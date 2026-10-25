import { describe, expect, it } from 'vitest'
import {
  getOamImageryUsedValue,
  getOamItem,
  getOamRasterLayerSpec,
  getOamRasterSourceSpec,
  oamItemId,
  oamMaxzoom,
  oamRenderParams,
  oamSearchUrl,
  OamRequestError,
  oamSourceId,
  pickOamAsset,
  searchOam,
  toOamLayer,
  type StacItem,
} from '../src/oam/index'
// Item 1e7cb303 as the API served it on 2026-10-25, without `processing:*` and with the footprint simplified to its bbox
import sainteOdile from './fixtures/oam-item-sainte-odile.json'

const RASTER = 'https://api.imagery.hotosm.org/raster/collections/openaerialmap/items'

/** An old upload in the legacy shape: no renders, asset `data`, no providers */
const legacy: StacItem = {
  id: '59e62b8a3d6412ef7220a51a',
  collection: 'openaerialmap',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-13.3, 8.4],
        [-13.2, 8.4],
        [-13.2, 8.5],
        [-13.3, 8.5],
        [-13.3, 8.4],
      ],
    ],
  },
  properties: { datetime: '2017-08-15T10:00:00Z', 'oam:producer_name': 'DroneTeam <Freetown>' },
  assets: {
    data: {
      href: 'https://example.org/a.tif',
      type: 'image/tiff; application=geotiff; profile=cloud-optimized',
    },
  },
}

/** A fetch that answers from a table of URLs and records what was asked */
function fakeFetch(answers: Record<string, unknown>, status = 200) {
  const asked: string[] = []
  const fetch = async (url: string) => {
    asked.push(url)
    const body = answers[url]
    return {
      ok: body !== undefined && status < 400,
      status: body === undefined ? 404 : status,
      json: async () => body,
    }
  }
  return { fetch, asked }
}

describe('toOamLayer', () => {
  it('turns a new upload into a layer with tiles, attribution and OAM fields', () => {
    const layer = toOamLayer(sainteOdile)!
    expect(layer.id).toBe('oam:1e7cb303-0c37-4904-81bf-374640b500af')
    expect(layer.name).toBe('Mont Sainte-Odile Abbey – selected footways – street-level 360 ortho')
    expect(layer.tiles).toEqual([
      `${RASTER}/1e7cb303-0c37-4904-81bf-374640b500af/tiles/WebMercatorQuad/{z}/{x}/{y}?assets=visual&bidx=1&bidx=2&bidx=3`,
    ])
    expect(layer.urlTemplate).toContain('/WebMercatorQuad/{zoom}/{x}/{y}?')
    expect(layer.bbox).toEqual([
      7.404381675568253, 48.43728034594524, 7.4060471713065, 48.438321228139294,
    ])
    expect(layer.startDate).toBe('2026-10-24')
    expect(layer.maxzoom).toBe(22)
    expect(layer.attributionText).toBe('© OSM Verkehrswende, OpenAerialMap, CC-BY-4.0')
    expect(layer.licenseUrl).toBe('https://creativecommons.org/licenses/by/4.0/')
    expect(layer.oam).toMatchObject({
      itemId: '1e7cb303-0c37-4904-81bf-374640b500af',
      provider: 'OSM Verkehrswende',
      platform: 'uav',
      sensor: 'GoPro MAX 2',
      gsd: 0.045,
      asset: 'visual',
      license: 'CC-BY-4.0',
      itemUrl:
        'https://api.imagery.hotosm.org/stac/collections/openaerialmap/items/1e7cb303-0c37-4904-81bf-374640b500af',
    })
    expect(layer.oam.thumbnailUrl).toMatch(/thumbnail\.png$/)
  })

  it('reads a legacy upload: asset `data`, nodata=0, bbox from the footprint, escaped producer', () => {
    const layer = toOamLayer(legacy)!
    expect(layer.tiles[0]).toBe(
      `${RASTER}/59e62b8a3d6412ef7220a51a/tiles/WebMercatorQuad/{z}/{x}/{y}?assets=data&nodata=0`,
    )
    expect(layer.bbox).toEqual([-13.3, 8.4, -13.2, 8.5])
    expect(layer.name).toBe('59e62b8a3d6412ef7220a51a')
    expect(layer.maxzoom).toBeUndefined()
    expect(layer.attributionHtml).toContain('DroneTeam &lt;Freetown&gt;')
    expect(layer.attributionHtml).not.toContain('<Freetown>')
  })

  it('leaves out what cannot be drawn', () => {
    expect(toOamLayer(null)).toBeUndefined()
    expect(toOamLayer({ id: 'x', bbox: [0, 0, 1, 1], assets: {} })).toBeUndefined()
    expect(toOamLayer({ id: 'x', assets: legacy.assets })).toBeUndefined()
  })

  it('uses other servers when asked', () => {
    const layer = toOamLayer(sainteOdile, {
      rasterUrl: 'http://localhost:8090/raster/',
      stacUrl: 'http://localhost:8090/stac',
    })!
    expect(layer.tiles[0]).toMatch(
      /^http:\/\/localhost:8090\/raster\/collections\/openaerialmap\/items\//,
    )
    expect(layer.oam.itemUrl).toMatch(/^http:\/\/localhost:8090\/stac\/collections\//)
  })
})

describe('asset, render and zoom rules', () => {
  it('prefers visual, then data, then a COG with the role data', () => {
    const cog = 'image/tiff; application=geotiff; profile=cloud-optimized'
    expect(pickOamAsset({ assets: { image: { href: 'a', type: cog, roles: ['data'] } } })).toBe(
      'image',
    )
    expect(
      pickOamAsset({ assets: { original: { href: 'a', type: 'image/tiff', roles: ['data'] } } }),
    ).toBeUndefined()
    expect(pickOamAsset({ assets: { data: { href: 'a' }, visual: { href: 'b' } } })).toBe('visual')
  })

  it('encodes renders.browse as TiTiler parameters', () => {
    expect(
      oamRenderParams({
        properties: {
          renders: {
            browse: { bidx: [1], rescale: [[0, 255]], colormap_name: 'viridis', nodata: -9999 },
          },
        },
      }),
    ).toBe('bidx=1&rescale=0%2C255&colormap_name=viridis&nodata=-9999')
    expect(oamRenderParams({ properties: {} })).toBe('nodata=0')
  })

  it('derives the native zoom from the ground sample distance', () => {
    expect(oamMaxzoom(0.045, 48.44)).toBe(22)
    expect(oamMaxzoom(0.3, 0)).toBe(19)
    expect(oamMaxzoom(0.001, 0)).toBe(24)
    expect(oamMaxzoom(0, 0)).toBeUndefined()
  })
})

describe('specs and ids', () => {
  const layer = toOamLayer(sainteOdile)!

  it('builds a bounded raster source and a layer', () => {
    const source = getOamRasterSourceSpec(layer)
    expect(source).toMatchObject({ type: 'raster', tileSize: 256, maxzoom: 22, bounds: layer.bbox })
    expect(source.attribution).toContain('<a href="https://openaerialmap.org/"')
    expect(getOamRasterSourceSpec(layer, { pixelRatio: 2 }).tiles[0]).toContain(
      '/{z}/{x}/{y}@2x?assets=visual',
    )
    expect(getOamRasterLayerSpec(layer)).toEqual({
      id: 'oam-1e7cb303-0c37-4904-81bf-374640b500af',
      type: 'raster',
      source: 'oam-1e7cb303-0c37-4904-81bf-374640b500af',
    })
    expect(getOamRasterLayerSpec(layer, { clampMaxzoom: true }).maxzoom).toBe(22)
  })

  it('maps ids both ways', () => {
    expect(oamSourceId('oam:abc')).toBe('oam-abc')
    expect(oamItemId(layer.id)).toBe('1e7cb303-0c37-4904-81bf-374640b500af')
    expect(oamItemId('Bing')).toBeUndefined()
    expect(oamItemId('oam:')).toBeUndefined()
  })

  it('names the image for imagery_used', () => {
    expect(getOamImageryUsedValue(layer)).toBe(
      'OpenAerialMap (Mont Sainte-Odile Abbey – selected footways – street-level 360 ortho)',
    )
  })
})

describe('searchOam', () => {
  it('asks once per box, newest first, and drops items it cannot draw', async () => {
    const url = oamSearchUrl([7.39, 48.43, 7.42, 48.44])
    expect(url).toBe(
      'https://api.imagery.hotosm.org/stac/search?collections=openaerialmap&bbox=7.39%2C48.43%2C7.42%2C48.44&limit=50&sortby=-properties.datetime',
    )
    const { fetch, asked } = fakeFetch({
      [url]: {
        type: 'FeatureCollection',
        features: [legacy, { id: 'broken' }, sainteOdile],
        numberMatched: 3,
      },
    })
    const result = await searchOam([7.39, 48.43, 7.42, 48.44], { fetch })
    expect(asked).toEqual([url])
    expect(result.layers.map((l) => l.oam.itemId)).toEqual([
      '1e7cb303-0c37-4904-81bf-374640b500af',
      '59e62b8a3d6412ef7220a51a',
    ])
    expect(result.matched).toBe(3)
  })

  it('splits a view across the antimeridian and merges the answers', async () => {
    const east = oamSearchUrl([170, -10, 180, 10])
    const west = oamSearchUrl([-180, -10, -170, 10])
    const { fetch, asked } = fakeFetch({
      [east]: { features: [sainteOdile] },
      [west]: { features: [sainteOdile, legacy] },
    })
    const result = await searchOam([170, -10, 190, 10], { fetch })
    expect(asked.sort()).toEqual([east, west].sort())
    expect(result.layers).toHaveLength(2)
    expect(result.matched).toBeUndefined()
  })

  it('keeps the limit and the datetime', async () => {
    expect(
      oamSearchUrl([0, 0, 1, 1], { limit: 1000, datetime: '2024-01-01T00:00:00Z/..' }),
    ).toContain('limit=250&sortby=-properties.datetime&datetime=2024-01-01T00%3A00%3A00Z%2F..')
  })

  it('throws on an error status', async () => {
    const { fetch } = fakeFetch({ [oamSearchUrl([0, 0, 1, 1])]: {} }, 503)
    await expect(searchOam([0, 0, 1, 1], { fetch })).rejects.toBeInstanceOf(OamRequestError)
  })
})

describe('getOamItem', () => {
  it('reads one item and answers undefined for an unknown one', async () => {
    const url =
      'https://api.imagery.hotosm.org/stac/collections/openaerialmap/items/1e7cb303-0c37-4904-81bf-374640b500af'
    const { fetch } = fakeFetch({ [url]: sainteOdile })
    expect((await getOamItem('1e7cb303-0c37-4904-81bf-374640b500af', { fetch }))?.name).toMatch(
      /^Mont Sainte-Odile/,
    )
    expect(await getOamItem('missing', { fetch })).toBeUndefined()
  })
})
