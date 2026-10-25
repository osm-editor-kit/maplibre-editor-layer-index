import type { Geometry } from 'geojson'
import type { BBox } from '../core/types'

/** HOT's STAC API, the catalogue of OpenAerialMap. */
export const OAM_STAC_URL = 'https://api.imagery.hotosm.org/stac'
/** HOT's TiTiler-pgSTAC, which renders tiles from an item's Cloud Optimized GeoTIFF. */
export const OAM_RASTER_URL = 'https://api.imagery.hotosm.org/raster'
/** The collection of OpenAerialMap uploads. HOT's API also serves other catalogues (Maxar, Vantor). */
export const OAM_COLLECTION = 'openaerialmap'

/**
 * One OpenAerialMap image, ready for MapLibre. Shaped like an `EliLayer` where the
 * fields mean the same, so a list can show both; the OAM-only fields are under `oam`.
 */
export type OamLayer = {
  /** `oam:<item id>`, never an ELI id */
  id: string
  /** The item's title, else its id */
  name: string
  type: 'tms'
  category: 'photo'
  best: false
  overlay: false
  tileSize: 256
  /** Where the image has pixels; sources use it as `bounds`, so no tile is asked for outside */
  bbox: BBox
  /** One box, as `EliLocatorLayer.bboxes` */
  bboxes: [BBox]
  /** Zoom at which one tile pixel is about one image pixel (from `gsd`, capped at 24) */
  maxzoom?: number
  /** MapLibre tile URLs (`{z}/{x}/{y}`) */
  tiles: string[]
  /** The same URL with iD's `{zoom}` token, for other renderers */
  urlTemplate: string
  attributionHtml: string
  attributionText: string
  attributionUrl: string
  licenseUrl?: string
  /** The capture date, `YYYY-MM-DD` */
  startDate?: string
  endDate?: string
  oam: {
    itemId: string
    collection: string
    /** The item's `datetime` (or `end_datetime`), as the API writes it */
    datetime?: string
    /** The first provider's name, else `oam:producer_name` */
    provider?: string
    /** `oam:platform_type`: `uav`, `aircraft`, `satellite`, … */
    platform?: string
    /** First of `instruments` */
    sensor?: string
    /** Ground sample distance in meters per pixel */
    gsd?: number
    /** Area of the footprint in m² (`oam:footprint_area`) */
    footprintArea?: number
    /** SPDX id, e.g. `CC-BY-4.0` */
    license?: string
    /** The image outline, the item's geometry */
    footprint?: Geometry
    thumbnailUrl?: string
    /** The asset TiTiler renders (`visual` on new uploads, `data` on some old ones) */
    asset: string
    /** The item in the STAC API (JSON) */
    itemUrl: string
  }
}

/** The parts of a STAC item this package reads. Anything else is ignored. */
export type StacItem = {
  type?: string
  id: string
  collection?: string
  bbox?: number[]
  geometry?: Geometry | null
  properties?: Record<string, unknown>
  assets?: Record<string, StacAsset>
  links?: { rel?: string; href?: string; method?: string; body?: unknown }[]
}

export type StacAsset = { href?: string; type?: string; roles?: string[]; title?: string }

export type StacItemCollection = {
  type?: string
  features?: unknown[]
  links?: { rel?: string; href?: string }[]
  numberMatched?: number
  context?: { matched?: number }
}
