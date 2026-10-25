import type { Geometry, Position } from 'geojson'
import type { BBox } from '../core/types'
import {
  OAM_COLLECTION,
  OAM_RASTER_URL,
  OAM_STAC_URL,
  type OamLayer,
  type StacAsset,
  type StacItem,
} from './types'

export type OamUrls = {
  /** STAC API root, default {@link OAM_STAC_URL} (a mock server can stand in) */
  stacUrl?: string
  /** TiTiler-pgSTAC root, default {@link OAM_RASTER_URL} */
  rasterUrl?: string
}

/** Meters per pixel at zoom 0 on the equator, for 256 px tiles */
const EQUATOR_RESOLUTION = 40_075_016.686 / 256
const MAX_ZOOM = 24
const LICENSES: Record<string, string> = {
  'CC-BY-4.0': 'https://creativecommons.org/licenses/by/4.0/',
  'CC-BY-SA-4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'CC0-1.0': 'https://creativecommons.org/publicdomain/zero/1.0/',
}

function trimSlash(url: string): string {
  return url.replace(/\/+$/, '')
}

function text(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : undefined
}

function finite(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const isCog = (asset: StacAsset) =>
  typeof asset.type === 'string' &&
  /image\/tiff/i.test(asset.type) &&
  /cloud-optimized/i.test(asset.type)

/**
 * The asset TiTiler should render, as HOT's own browser picks it: `visual` (the
 * display COG of new uploads), else `data` (some older items), else the first
 * Cloud Optimized GeoTIFF with the role `data`. The collection's `item_assets`
 * call it `image`, so no name is hard-coded beyond those two.
 */
export function pickOamAsset(item: Pick<StacItem, 'assets'>): string | undefined {
  const assets = item.assets ?? {}
  if (assets.visual?.href) return 'visual'
  if (assets.data?.href) return 'data'
  for (const [name, asset] of Object.entries(assets)) {
    if (asset.href && asset.roles?.includes('data') && isCog(asset)) return name
  }
  return undefined
}

/**
 * TiTiler query parameters from the item's `renders.browse` (bands, rescale,
 * colour map, nodata), as HOT's mosaic job writes them. Without a render, old
 * uploads need `nodata=0` to draw their black border transparent.
 */
export function oamRenderParams(item: Pick<StacItem, 'properties'>): string {
  const renders = item.properties?.renders
  const browse =
    renders && typeof renders === 'object'
      ? ((renders as Record<string, unknown>).browse as Record<string, unknown> | undefined)
      : undefined
  const parts: string[] = []
  if (browse && typeof browse === 'object') {
    if (Array.isArray(browse.bidx)) {
      for (const band of browse.bidx)
        if (finite(band) !== undefined) parts.push(`bidx=${Math.trunc(band)}`)
    }
    if (Array.isArray(browse.rescale)) {
      for (const pair of browse.rescale) {
        if (Array.isArray(pair) && pair.length === 2) {
          parts.push(`rescale=${encodeURIComponent(`${pair[0]},${pair[1]}`)}`)
        }
      }
    }
    if (typeof browse.colormap_name === 'string') {
      parts.push(`colormap_name=${encodeURIComponent(browse.colormap_name)}`)
    }
    if (browse.colormap && typeof browse.colormap === 'object') {
      parts.push(`colormap=${encodeURIComponent(JSON.stringify(browse.colormap))}`)
    }
    if (browse.nodata !== undefined && browse.nodata !== null) {
      parts.push(`nodata=${encodeURIComponent(String(browse.nodata))}`)
    }
  }
  return parts.length > 0 ? parts.join('&') : 'nodata=0'
}

/** The tile URL of one item; `token` is `{z}` for MapLibre or `{zoom}` for iD */
function tileUrl(
  rasterUrl: string,
  collection: string,
  itemId: string,
  asset: string,
  params: string,
  token: string,
) {
  const path = `${trimSlash(rasterUrl)}/collections/${encodeURIComponent(collection)}/items/${encodeURIComponent(itemId)}`
  return `${path}/tiles/WebMercatorQuad/${token}/{x}/{y}?assets=${encodeURIComponent(asset)}&${params}`
}

function positionsOf(geometry: Geometry): Position[] {
  switch (geometry.type) {
    case 'Point':
      return [geometry.coordinates]
    case 'MultiPoint':
    case 'LineString':
      return geometry.coordinates
    case 'MultiLineString':
    case 'Polygon':
      return geometry.coordinates.flat()
    case 'MultiPolygon':
      return geometry.coordinates.flat(2)
    case 'GeometryCollection':
      return geometry.geometries.flatMap(positionsOf)
  }
}

function bboxOf(item: StacItem): BBox | undefined {
  const b = item.bbox
  if (
    Array.isArray(b) &&
    (b.length === 4 || b.length === 6) &&
    b.every((n) => finite(n) !== undefined)
  ) {
    // a 3D bbox is [w, s, min height, e, n, max height]
    return b.length === 4 ? [b[0]!, b[1]!, b[2]!, b[3]!] : [b[0]!, b[1]!, b[3]!, b[4]!]
  }
  if (!item.geometry) return undefined
  const positions = positionsOf(item.geometry)
  if (positions.length === 0) return undefined
  const xs = positions.map((p) => p[0]!)
  const ys = positions.map((p) => p[1]!)
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)]
}

/**
 * The zoom at which a tile pixel is no larger than an image pixel, at the image's
 * latitude. MapLibre overzooms past it instead of asking TiTiler to upsample.
 */
export function oamMaxzoom(gsd: number | undefined, latitude: number): number | undefined {
  if (gsd === undefined || !(gsd > 0)) return undefined
  const resolution = EQUATOR_RESOLUTION * Math.cos((latitude * Math.PI) / 180)
  const zoom = Math.ceil(Math.log2(resolution / gsd))
  return Math.min(MAX_ZOOM, Math.max(0, zoom))
}

/** `YYYY-MM-DD` of an RFC 3339 date-time */
function day(datetime: string | undefined): string | undefined {
  const match = datetime && /^\d{4}-\d{2}-\d{2}/.exec(datetime)
  return match ? match[0] : undefined
}

function isStacItem(value: unknown): value is StacItem {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as { id?: unknown }).id === 'string' &&
    (value as { id: string }).id !== ''
  )
}

/** The id OAM layers carry: `oam:<item id>` */
export function oamLayerId(itemId: string): string {
  return `oam:${itemId}`
}

/** The item id of an `oam:<item id>` layer id, else `undefined` */
export function oamItemId(layerId: string): string | undefined {
  return layerId.startsWith('oam:') && layerId.length > 4 ? layerId.slice(4) : undefined
}

/**
 * One STAC item as an {@link OamLayer}, or `undefined` when it cannot be drawn
 * (no id, no extent, or no image asset).
 */
export function toOamLayer(value: unknown, urls: OamUrls = {}): OamLayer | undefined {
  if (!isStacItem(value)) return undefined
  const item = value
  const asset = pickOamAsset(item)
  const bbox = bboxOf(item)
  if (asset === undefined || bbox === undefined) return undefined

  const props = item.properties ?? {}
  const collection = text(item.collection) ?? OAM_COLLECTION
  const rasterUrl = urls.rasterUrl ?? OAM_RASTER_URL
  const stacUrl = trimSlash(urls.stacUrl ?? OAM_STAC_URL)
  const params = oamRenderParams(item)

  const providers = Array.isArray(props.providers) ? props.providers : []
  const firstProvider = providers[0] as { name?: unknown } | undefined
  const provider = text(firstProvider?.name) ?? text(props['oam:producer_name'])
  const instruments = Array.isArray(props.instruments) ? props.instruments : []
  const datetime = text(props.datetime) ?? text(props.end_datetime) ?? text(props.start_datetime)
  const gsd = finite(props.gsd)
  const license = text(props.license)
  const licenseUrl = license ? LICENSES[license] : undefined
  const thumbnail = item.assets?.thumbnail?.href

  const attributionUrl = 'https://openaerialmap.org/'
  const credit = provider ? `${provider}, ` : ''
  const licenseLabel = license ? `, ${license}` : ''
  const attributionText = `© ${credit}OpenAerialMap${licenseLabel}`
  const licenseHtml = license
    ? licenseUrl
      ? `, <a href="${licenseUrl}" target="_blank" rel="noopener">${escapeHtml(license)}</a>`
      : `, ${escapeHtml(license)}`
    : ''
  const attributionHtml = `© ${provider ? `${escapeHtml(provider)}, ` : ''}<a href="${attributionUrl}" target="_blank" rel="noopener">OpenAerialMap</a>${licenseHtml}`

  const date = day(datetime)
  return {
    id: oamLayerId(item.id),
    name: text(props.title) ?? item.id,
    type: 'tms',
    category: 'photo',
    best: false,
    overlay: false,
    tileSize: 256,
    bbox,
    bboxes: [bbox],
    ...(gsd !== undefined ? { maxzoom: oamMaxzoom(gsd, (bbox[1] + bbox[3]) / 2) } : {}),
    tiles: [tileUrl(rasterUrl, collection, item.id, asset, params, '{z}')],
    urlTemplate: tileUrl(rasterUrl, collection, item.id, asset, params, '{zoom}'),
    attributionHtml,
    attributionText,
    attributionUrl,
    ...(licenseUrl ? { licenseUrl } : {}),
    ...(date ? { startDate: date, endDate: date } : {}),
    oam: {
      itemId: item.id,
      collection,
      ...(datetime ? { datetime } : {}),
      ...(provider ? { provider } : {}),
      ...(text(props['oam:platform_type']) ? { platform: text(props['oam:platform_type']) } : {}),
      ...(text(instruments[0]) ? { sensor: text(instruments[0]) } : {}),
      ...(gsd !== undefined ? { gsd } : {}),
      ...(finite(props['oam:footprint_area']) !== undefined
        ? { footprintArea: finite(props['oam:footprint_area']) }
        : {}),
      ...(license ? { license } : {}),
      ...(item.geometry ? { footprint: item.geometry } : {}),
      ...(thumbnail ? { thumbnailUrl: thumbnail } : {}),
      asset,
      itemUrl: `${stacUrl}/collections/${encodeURIComponent(collection)}/items/${encodeURIComponent(item.id)}`,
    },
  }
}
