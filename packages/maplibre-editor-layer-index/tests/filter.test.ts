import { describe, expect, it } from 'vitest'
import { applyApiKeys, hasRequiredKeys } from '../src/core/apiKeys'
import { viewportBoxes, viewportCenter } from '../src/core/bounds'
import { filterLayers, layersInViewport } from '../src/core/filter'
import { getRasterLayerSpec, getRasterSourceSpec } from '../src/core/specs'
import type { EliLayer, EliLocatorLayer } from '../src/core/types'

function locator(
  partial: Partial<EliLocatorLayer> & Pick<EliLocatorLayer, 'id' | 'bboxes'>,
): EliLocatorLayer {
  return {
    name: partial.id,
    type: 'tms',
    best: false,
    overlay: false,
    tileSize: 256,
    geometryId: 'g',
    countryCodes: [],
    requiresKeys: [],
    continents: ['world'],
    ...partial,
  }
}

function layer(partial: Partial<EliLayer> & Pick<EliLayer, 'id' | 'bboxes'>): EliLayer {
  return {
    ...locator(partial),
    tiles: ['https://example.com/{z}/{x}/{y}.png'],
    urlTemplate: 'https://example.com/{zoom}/{x}/{y}.png',
    ...partial,
  } as EliLayer
}

const berlin = locator({
  id: 'berlin',
  bboxes: [[13.0, 52.3, 13.8, 52.7]],
  countryCodes: ['DE'],
  continents: ['europe'],
})
const paris = locator({
  id: 'paris',
  bboxes: [[2.2, 48.8, 2.5, 49.0]],
  countryCodes: ['FR'],
  continents: ['europe'],
})
const world = locator({ id: 'world', bboxes: [[-180, -90, 180, 90]], geometryId: 'world' })
const layers = [berlin, paris, world]

const berlinViewport = { west: 13.2, south: 52.4, east: 13.6, north: 52.6 }

describe('layersInViewport', () => {
  it('returns layers overlapping the viewport plus worldwide layers', () => {
    const result = layersInViewport(berlinViewport, {}, layers).map((l) => l.id)
    expect(result).toContain('berlin')
    expect(result).toContain('world')
    expect(result).not.toContain('paris')
  })

  it('accepts [w,s,e,n] tuples and LngLatBounds-like objects', () => {
    const tuple = layersInViewport([13.2, 52.4, 13.6, 52.6], {}, layers).map((l) => l.id)
    const boundsLike = layersInViewport(
      {
        getWest: () => 13.2,
        getSouth: () => 52.4,
        getEast: () => 13.6,
        getNorth: () => 52.6,
      },
      {},
      layers,
    ).map((l) => l.id)
    expect(tuple).toEqual(boundsLike)
  })

  it('filters region-scoped layers by countryCodes but always keeps worldwide', () => {
    const result = layersInViewport([-180, -90, 180, 90], { countryCodes: ['FR'] }, layers).map(
      (l) => l.id,
    )
    // paris matches FR; world has no country list so it always passes; berlin (DE) drops.
    expect(result).toEqual(['paris', 'world'])
  })

  it('drops a globe-spanning layer that does not cover the viewport country (TIGER case)', () => {
    // bbox spans the world (antimeridian territories) but country codes are US/CA only.
    const tiger = locator({
      id: 'tiger',
      bboxes: [[-178, 12, 180, 71]],
      countryCodes: ['US', 'CA'],
      continents: ['north-america'],
    })
    const result = layersInViewport(berlinViewport, { countryCodes: ['DE'] }, [berlin, tiger]).map(
      (l) => l.id,
    )
    expect(result).toEqual(['berlin'])
  })

  it('includeWorldwide:false drops worldwide layers', () => {
    const result = layersInViewport(berlinViewport, { includeWorldwide: false }, layers).map(
      (l) => l.id,
    )
    expect(result).toEqual(['berlin'])
  })
})

// Coverage boxes as the build writes them (see geometryBBoxes in transform.test.ts).
const alaska = locator({
  id: 'alaska',
  bboxes: [
    [-179.7, 50.3, -129.9, 72.1],
    [171.9, 51.1, 179.9, 53.2],
  ],
  countryCodes: ['US'],
  continents: ['north-america'],
})
const france = locator({
  id: 'france',
  bboxes: [
    [-178.5, -14.7, -175.8, -12.9],
    [-61.9, 14.4, -60.7, 16.6],
    [-54.8, 2.0, -51.5, 6.0],
    [-5.4, 41.3, 9.8, 51.3],
    [162.4, -23.3, 169.3, -17.6],
  ],
  countryCodes: ['FR'],
  continents: ['europe'],
})
const newZealand = locator({
  id: 'nz',
  bboxes: [
    [-177.0, -44.4, -176.1, -43.6],
    [166.3, -47.4, 178.7, -34.2],
  ],
  countryCodes: ['NZ'],
  continents: ['oceania'],
})
const fiji = locator({
  id: 'fiji',
  bboxes: [
    [-180, -19, -178, -16],
    [177, -19, 180, -16],
  ],
  countryCodes: ['FJ'],
  continents: ['oceania'],
})
const regional = [berlin, paris, alaska, france, newZealand, fiji]
const ids = (bounds: Parameters<typeof layersInViewport>[0]) =>
  layersInViewport(bounds, {}, regional).map((l) => l.id)

describe('layersInViewport across the antimeridian', () => {
  it('keeps Alaska, France overseas and New Zealand out of a Berlin view', () => {
    expect(ids(berlinViewport)).toEqual(['berlin'])
  })

  it('finds Alaska on the mainland and on the western Aleutians', () => {
    expect(ids([-155, 60, -145, 65])).toEqual(['alaska'])
    expect(ids([173, 51.5, 178, 53])).toEqual(['alaska'])
  })

  it('finds France in Paris, Guadeloupe and New Caledonia', () => {
    expect(ids([2.2, 48.8, 2.5, 49.0])).toEqual(['paris', 'france'])
    expect(ids([-61.7, 16.0, -61.2, 16.4])).toEqual(['france'])
    expect(ids([165, -22, 167, -20])).toEqual(['france'])
  })

  it('finds New Zealand on both sides of ±180°', () => {
    expect(ids([174.5, -37, 175, -36.7])).toEqual(['nz'])
    expect(ids([-176.8, -44.2, -176.3, -43.8])).toEqual(['nz'])
  })

  it('handles a view across the antimeridian, as MapLibre (east > 180) or as west > east', () => {
    expect(ids([176, -20, 183, -15])).toEqual(['fiji'])
    expect(ids([176, -20, -177, -15])).toEqual(['fiji'])
    expect(ids([170, 50, 190, 60])).toEqual(['alaska'])
  })

  it('treats a world copy like the original view', () => {
    expect(ids([13.2 - 360, 52.4, 13.6 - 360, 52.6])).toEqual(['berlin'])
    expect(ids([13.2 + 720, 52.4, 13.6 + 720, 52.6])).toEqual(['berlin'])
  })

  it('matches everything in its latitude band when the view is wider than the globe', () => {
    expect(ids([-300, -60, 300, 80])).toEqual(regional.map((l) => l.id))
  })
})

describe('viewportBoxes', () => {
  it('passes a plain view through', () => {
    expect(viewportBoxes([13.2, 52.4, 13.6, 52.6])).toEqual([[13.2, 52.4, 13.6, 52.6]])
  })

  it('splits a view across the antimeridian into two boxes within ±180°', () => {
    expect(viewportBoxes([170, -20, 190, -10])).toEqual([
      [170, -20, 180, -10],
      [-180, -20, -170, -10],
    ])
    expect(viewportBoxes([170, -20, -170, -10])).toEqual([
      [170, -20, 180, -10],
      [-180, -20, -170, -10],
    ])
  })

  it('shifts world copies back and covers all longitudes for views of 360° or more', () => {
    expect(viewportBoxes([-350, 0, -340, 10])).toEqual([[10, 0, 20, 10]])
    expect(viewportBoxes([-200, -10, 200, 10])).toEqual([[-180, -10, 180, 10]])
  })

  it('centers a world-copy view within ±180°', () => {
    expect(viewportCenter([13.2 - 360, 52.4, 13.6 - 360, 52.6]).lng).toBeCloseTo(13.4)
    expect(viewportCenter([170, 0, -170, 10]).lng).toBeCloseTo(-180)
  })
})

describe('filterLayers', () => {
  it('filters by type/best/overlay without location', () => {
    const best = locator({ id: 'best', bboxes: [[0, 0, 1, 1]], best: true })
    expect(filterLayers({ bestOnly: true }, [berlin, best]).map((l) => l.id)).toEqual(['best'])
  })

  it('hides key-requiring layers by default, includes them once keys are provided', () => {
    const keyed = locator({ id: 'mapbox', bboxes: [[0, 0, 1, 1]], requiresKeys: ['apikey'] })
    const layers = [berlin, keyed]
    expect(filterLayers({}, layers).map((l) => l.id)).toEqual(['berlin'])
    expect(filterLayers({ apiKeys: { apikey: 'pk.test' } }, layers).map((l) => l.id)).toEqual([
      'berlin',
      'mapbox',
    ])
  })
})

describe('api keys', () => {
  it('hasRequiredKeys reflects availability', () => {
    expect(hasRequiredKeys([])).toBe(true)
    expect(hasRequiredKeys(['apikey'])).toBe(false)
    expect(hasRequiredKeys(['apikey'], { apikey: '' })).toBe(false)
    expect(hasRequiredKeys(['apikey'], { apikey: 'pk' })).toBe(true)
  })

  it('applyApiKeys substitutes only matching placeholders', () => {
    expect(applyApiKeys(['https://t/{z}/{x}/{y}?key={apikey}'], { apikey: 'pk.test' })).toEqual([
      'https://t/{z}/{x}/{y}?key=pk.test',
    ])
    // Standard tokens are never touched.
    expect(applyApiKeys(['https://t/{z}/{x}/{y}'], { apikey: 'pk' })).toEqual([
      'https://t/{z}/{x}/{y}',
    ])
  })

  it('getRasterSourceSpec substitutes keys into tiles', () => {
    const keyed = layer({
      id: 'k',
      bboxes: [[0, 0, 1, 1]],
      tiles: ['https://t/{z}/{x}/{y}?key={apikey}'],
    })
    expect(getRasterSourceSpec(keyed, { apiKeys: { apikey: 'pk' } }).tiles).toEqual([
      'https://t/{z}/{x}/{y}?key=pk',
    ])
  })
})

describe('specs', () => {
  it('builds a maplibre raster source spec', () => {
    const tms = layer({ id: 't', bboxes: [[0, 0, 1, 1]], scheme: 'tms', maxzoom: 19 })
    expect(getRasterSourceSpec(tms)).toEqual({
      type: 'raster',
      tiles: ['https://example.com/{z}/{x}/{y}.png'],
      tileSize: 256,
      scheme: 'tms',
      maxzoom: 19,
    })
  })

  it('builds a raster layer spec with a derived id', () => {
    expect(getRasterLayerSpec(layer({ id: 'berlin', bboxes: berlin.bboxes }))).toMatchObject({
      id: 'eli-berlin',
      type: 'raster',
      source: 'eli-berlin',
    })
  })

  it('keeps maxzoom on the source only so MapLibre overzooms past native tiles', () => {
    const tms = layer({ id: 't', bboxes: [[0, 0, 1, 1]], maxzoom: 18, minzoom: 10 })
    expect(getRasterSourceSpec(tms).maxzoom).toBe(18)
    expect(getRasterLayerSpec(tms)).not.toHaveProperty('maxzoom')
    expect(getRasterLayerSpec(tms).minzoom).toBe(10)
    expect(getRasterLayerSpec(tms, { clampMaxzoom: true }).maxzoom).toBe(18)
  })

  it('scales WMS WIDTH/HEIGHT by pixelRatio while keeping logical tileSize', () => {
    const wms = layer({
      id: 'alkis',
      type: 'wms',
      bboxes: [[0, 0, 1, 1]],
      tiles: ['https://example.com/wms?WIDTH=256&HEIGHT=256&BBOX={bbox-epsg-3857}'],
    })
    expect(getRasterSourceSpec(wms, { pixelRatio: 2 })).toEqual({
      type: 'raster',
      tiles: ['https://example.com/wms?WIDTH=512&HEIGHT=512&BBOX={bbox-epsg-3857}'],
      tileSize: 256,
    })
  })

  it('does not scale TMS tile URLs for pixelRatio', () => {
    const tms = layer({ id: 't', bboxes: [[0, 0, 1, 1]], scheme: 'tms', maxzoom: 19 })
    expect(getRasterSourceSpec(tms, { pixelRatio: 2 }).tiles).toEqual([
      'https://example.com/{z}/{x}/{y}.png',
    ])
  })
})
