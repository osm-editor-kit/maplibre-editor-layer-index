import type { Feature, Geometry } from 'geojson'
import { describe, expect, it } from 'vitest'
import { continentForLngLat } from '../scripts/continents'
import { coverageCountries } from '../scripts/countries'
import { geometryBBoxes, geometryId } from '../scripts/geometry'
import { transform } from '../scripts/transform'

const berlinPolygon = {
  type: 'Polygon' as const,
  coordinates: [
    [
      [13.0, 52.3],
      [13.8, 52.3],
      [13.8, 52.7],
      [13.0, 52.7],
      [13.0, 52.3],
    ],
  ],
}

type AnyFeature = Feature<Geometry | null>

type Ring = [number, number][]

function polygon(ring: Ring): Geometry {
  return { type: 'Polygon', coordinates: [ring] }
}

function rect(west: number, south: number, east: number, north: number): Ring {
  return [
    [west, south],
    [east, south],
    [east, north],
    [west, north],
    [west, south],
  ]
}

function multi(...rings: Ring[]): Geometry {
  return { type: 'MultiPolygon', coordinates: rings.map((ring) => [ring]) }
}

/** Alaska mainland plus the western Aleutians beyond 180°. */
const alaska = multi(rect(-170, 54, -141, 71), rect(172, 52, 179.9, 53.2))

/** Mainland, Corsica, Guadeloupe, French Guiana, New Caledonia, Wallis. */
const france = multi(
  rect(-5, 42.3, 8.2, 51.1),
  rect(8.5, 41.4, 9.6, 43),
  rect(-61.8, 15.8, -61, 16.5),
  rect(-55, 1.8, -51.3, 6),
  rect(163.5, -22.7, 167.2, -19.5),
  rect(-178.3, -14.4, -176.1, -13.2),
)

/** South Island plus the Chatham Islands east of 180°. */
const newZealand = multi(rect(168, -46, 174, -41), rect(-177, -44.4, -176.1, -43.6))

function feature(id: string, extra: Record<string, unknown> = {}): AnyFeature {
  return {
    type: 'Feature',
    properties: {
      id,
      name: id,
      type: 'tms',
      url: 'https://example.com/{zoom}/{x}/{y}.png',
      ...extra,
    },
    geometry: berlinPolygon,
  }
}

function collection(features: AnyFeature[]) {
  return { type: 'FeatureCollection', features }
}

describe('transform', () => {
  it('deduplicates identical geometries to one entry shared by geometryId', () => {
    const result = transform(collection([feature('a'), feature('b'), feature('c')]))
    expect(result.layers).toHaveLength(3)
    expect(result.counts.geometries).toBe(1)
    const ids = new Set(result.layers.map((l) => l.geometryId))
    expect(ids.size).toBe(1)
    expect(Object.keys(result.geometries)).toEqual([...ids])
  })

  it('drops unsupported source types and records the counts', () => {
    const result = transform(collection([feature('tms-ok'), feature('bing', { type: 'bing' })]))
    expect(result.layers.map((l) => l.id)).toEqual(['tms-ok'])
    expect(result.counts.dropped).toEqual({ bing: 1 })
    expect(result.counts.upstream).toBe(2)
    expect(result.counts.published).toBe(1)
  })

  it('uses the world sentinel for null geometry and keeps it out of the geometry table', () => {
    const worldFeature = { ...feature('world-layer'), geometry: null }
    const result = transform(collection([worldFeature]))
    expect(result.layers[0]!.geometryId).toBe('world')
    expect(result.layers[0]!.bboxes).toEqual([[-180, -90, 180, 90]])
    expect('world' in result.geometries).toBe(false)
  })

  it('precomputes bboxes and country codes for a Berlin polygon', () => {
    const result = transform(collection([feature('berlin')]))
    const layer = result.layers[0]!
    const locator = result.locatorLayers[0]!
    expect(layer.bboxes).toEqual([[13.0, 52.3, 13.8, 52.7]])
    expect(layer.countryCodes).toContain('DE')
    expect(locator.continents).toEqual(['europe'])
    expect(result.detailsByContinent.europe.berlin).toMatchObject({
      urlTemplate: 'https://example.com/{zoom}/{x}/{y}.png',
    })
    expect(result.geometriesByContinent.europe[layer.geometryId]).toBeDefined()
    expect(result.shardsMeta.countryToContinent.DE).toBe('europe')
  })

  it('files worldwide layers under the world shard only', () => {
    const worldFeature = { ...feature('world-layer'), geometry: null }
    const result = transform(collection([worldFeature]))
    expect(result.locatorLayers[0]!.continents).toEqual(['world'])
    expect(result.detailsByContinent.world['world-layer']).toBeDefined()
    expect(Object.keys(result.geometriesByContinent.world)).toHaveLength(0)
  })

  it('records requiresKeys from leftover {apikey} placeholders', () => {
    const keyed = feature('keyed', { url: 'https://t/{zoom}/{x}/{y}?token={apikey}' })
    const result = transform(collection([feature('plain'), keyed]))
    expect(result.layers.find((l) => l.id === 'plain')!.requiresKeys).toEqual([])
    expect(result.layers.find((l) => l.id === 'keyed')!.requiresKeys).toEqual(['apikey'])
    expect(result.apiKeys).toEqual(['apikey'])
  })

  it('throws on structurally invalid input (refuse to publish garbage)', () => {
    expect(() => transform({ type: 'FeatureCollection' })).toThrow()
    expect(() =>
      transform(collection([{ type: 'Feature', properties: {}, geometry: null } as AnyFeature])),
    ).toThrow()
  })
})

describe('geometry helpers', () => {
  it('hashes identical geometries to the same id and differs on change', () => {
    const other = {
      type: 'Polygon' as const,
      coordinates: [
        [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 0],
        ],
      ],
    }
    expect(geometryId(berlinPolygon)).toBe(geometryId(berlinPolygon))
    expect(geometryId(berlinPolygon)).not.toBe(geometryId(other))
  })

  it('computes one [w,s,e,n] box for a simple polygon', () => {
    expect(geometryBBoxes(berlinPolygon)).toEqual([[13.0, 52.3, 13.8, 52.7]])
  })

  it('keeps Alaska and the western Aleutians (across ±180°) as two boxes', () => {
    expect(geometryBBoxes(alaska)).toEqual([
      [-170, 54, -141, 71],
      [172, 52, 179.9, 53.2],
    ])
  })

  it('splits a ring that crosses the antimeridian into one box per side', () => {
    const fiji = polygon([
      [177, -19],
      [-179, -19],
      [-179, -16],
      [177, -16],
      [177, -19],
    ])
    expect(geometryBBoxes(fiji)).toEqual([
      [-180, -19, -179, -16],
      [177, -19, 180, -16],
    ])
  })

  it('merges nearby parts (mainland France + Corsica) but keeps overseas regions apart', () => {
    const boxes = geometryBBoxes(france)
    expect(boxes).toContainEqual([-5, 41.4, 9.6, 51.1])
    expect(boxes).toHaveLength(5)
    for (const [west, , east] of boxes) {
      expect(west).toBeLessThanOrEqual(east)
      expect(east - west).toBeLessThan(180)
    }
  })

  it('never merges parts into a box wider than half the globe', () => {
    const boxes = geometryBBoxes(newZealand)
    expect(boxes).toEqual([
      [-177, -44.4, -176.1, -43.6],
      [168, -46, 174, -41],
    ])
  })
})

describe('coverage countries', () => {
  it('finds New Zealand when its parts sit on both sides of ±180° (LINZ Topo50 case)', () => {
    // One grid over the old globe-spanning box missed the islands entirely, so the
    // layer had no countries and counted as worldwide.
    expect(coverageCountries(newZealand).countryCodes).toEqual(['NZ'])
    const result = transform(collection([{ ...feature('topo50'), geometry: newZealand }]))
    expect(result.locatorLayers[0]!.continents).toEqual(['oceania'])
    expect(result.locatorLayers[0]!.countryCodes).toEqual(['NZ'])
  })

  it('files a layer by the main country of each box, not by border slivers', () => {
    // A coarse French Guiana box spills into Suriname and Brazil.
    const { countryCodes, mainCountryCodes } = coverageCountries(france)
    expect(countryCodes).toContain('FR')
    expect(mainCountryCodes).toEqual(['FR'])
    const result = transform(collection([{ ...feature('fr'), geometry: france }]))
    expect(result.locatorLayers[0]!.continents).toEqual(['europe'])
    expect(result.detailsByContinent['south-america'].fr).toBeUndefined()
  })
})

describe('continents', () => {
  it('routes Berlin map center to europe', () => {
    expect(continentForLngLat(13.4, 52.5)).toBe('europe')
  })
})
