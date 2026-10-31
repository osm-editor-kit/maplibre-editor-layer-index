import * as countryCoder from '@rapideditor/country-coder'
import type { Geometry, Position } from 'geojson'
import { geometryBBoxes } from './geometry'

export type CoverageCountries = {
  /** Every region code the polygon touches, sorted. Empty for worldwide coverage. */
  countryCodes: string[]
  /**
   * The code with the most sample points in each coverage box, sorted. Decides
   * which continent shards hold the layer: coarse ELI polygons overlap their
   * neighbours along every border, and those slivers alone should not file
   * French imagery under South America (French Guiana → BR) or Spanish imagery
   * under Africa (MA).
   */
  mainCountryCodes: string[]
}

/**
 * Region codes a coverage geometry actually covers, precomputed at build time so
 * the runtime never needs country-coder. Unlike a bbox query, this samples points
 * **inside the polygon**, box by box — so e.g. TIGER (US + Pacific/Caribbean
 * territories) resolves to its real countries, not every country between them.
 */
export function coverageCountries(geometry: Geometry): CoverageCountries {
  if (!('coordinates' in geometry)) return { countryCodes: [], mainCountryCodes: [] }
  const boxes = geometryBBoxes(geometry)

  // Whole-world (or near) coverage → treat as worldwide (no country list). Its boxes
  // can be split into hemispheres, so the widths are summed, the height is the tallest.
  const width = boxes.reduce((sum, [west, , east]) => sum + east - west, 0)
  const height = Math.max(...boxes.map(([, south, , north]) => north - south))
  if (width >= 350 && height >= 170) {
    return { countryCodes: [], mainCountryCodes: [] }
  }

  // Sample a grid across each box; keep a point's country only if it lies inside
  // the polygon. Bounded step count keeps tiny and huge polygons both reasonable.
  const steps = 24
  const codes = new Set<string>()
  const mainCodes = new Set<string>()
  for (const [west, south, east, north] of boxes) {
    const hits = new Map<string, number>()
    for (let i = 0; i <= steps; i++) {
      for (let j = 0; j <= steps; j++) {
        const lon = west + ((east - west) * i) / steps
        const lat = south + ((north - south) * j) / steps
        if (!pointInGeometry([lon, lat], geometry)) continue
        const code = countryCoder.iso1A2Code([lon, lat])
        if (code) hits.set(code, (hits.get(code) ?? 0) + 1)
      }
    }
    // Fallback for parts too small/thin for the grid to land inside: use the
    // box centre so each part still attributes a country.
    if (hits.size === 0) {
      const code = countryCoder.iso1A2Code([(west + east) / 2, (south + north) / 2])
      if (code) hits.set(code, 1)
    }
    let main: string | undefined
    for (const [code, count] of hits) {
      codes.add(code)
      if (main === undefined || count > hits.get(main)!) main = code
    }
    if (main) mainCodes.add(main)
  }
  return { countryCodes: [...codes].sort(), mainCountryCodes: [...mainCodes].sort() }
}

/** Ray-casting point-in-ring test. */
function pointInRing(point: Position, ring: Position[]): boolean {
  const x = point[0]!
  const y = point[1]!
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i]![0]!
    const yi = ring[i]![1]!
    const xj = ring[j]![0]!
    const yj = ring[j]![1]!
    const intersects = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
    if (intersects) inside = !inside
  }
  return inside
}

/** Inside a single Polygon (outer ring minus holes). */
function pointInPolygonRings(point: Position, rings: Position[][]): boolean {
  if (rings.length === 0 || !pointInRing(point, rings[0]!)) return false
  for (let h = 1; h < rings.length; h++) {
    if (pointInRing(point, rings[h]!)) return false
  }
  return true
}

function pointInGeometry(point: Position, geometry: Geometry): boolean {
  if (geometry.type === 'Polygon') {
    return pointInPolygonRings(point, geometry.coordinates as Position[][])
  }
  if (geometry.type === 'MultiPolygon') {
    return (geometry.coordinates as Position[][][]).some((rings) =>
      pointInPolygonRings(point, rings),
    )
  }
  return false
}
