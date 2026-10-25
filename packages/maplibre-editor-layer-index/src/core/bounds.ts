import type { BBox } from './types'

/** A viewport, accepted in the shapes MapLibre / react-map-gl hand you. */
export type ViewportBounds =
  | BBox
  | { west: number; south: number; east: number; north: number }
  // maplibre-gl LngLatBounds-like
  | { getWest(): number; getSouth(): number; getEast(): number; getNorth(): number }

export function toBBox(bounds: ViewportBounds): BBox {
  if (Array.isArray(bounds)) return bounds
  if ('getWest' in bounds) {
    return [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()]
  }
  return [bounds.west, bounds.south, bounds.east, bounds.north]
}

/** Whole turns to add so `lng` lands in [-180, 180), e.g. `-346.6` → `+360`. */
function wrapShift(lng: number): number {
  return -360 * Math.floor((lng + 180) / 360)
}

/**
 * A viewport as one or two boxes within ±180° (west ≤ east). MapLibre hands out
 * longitudes past ±180° on world copies and when the view spans the antimeridian;
 * those are shifted back, and a view across the antimeridian is split in two.
 * A `west > east` box is read as crossing the antimeridian too.
 */
export function viewportBoxes(bounds: ViewportBounds): BBox[] {
  const [rawWest, south, rawEast, north] = toBBox(bounds)
  // Unroll a west > east box, then shift by whole turns (exact for in-range views).
  const unrolledEast = rawEast >= rawWest ? rawEast : rawEast + 360
  if (unrolledEast - rawWest >= 360) return [[-180, south, 180, north]]
  const shift = wrapShift(rawWest)
  const west = rawWest + shift
  const east = unrolledEast + shift
  if (east <= 180) return [[west, south, east, north]]
  return [
    [west, south, 180, north],
    [-180, south, east - 360, north],
  ]
}

/** Map-center point from a viewport (midpoint of west/east and south/north, within ±180°). */
export function viewportCenter(bounds: ViewportBounds): { lng: number; lat: number } {
  const [west, south, east, north] = toBBox(bounds)
  const middle = (west + (east >= west ? east : east + 360)) / 2
  return { lng: middle + wrapShift(middle), lat: (south + north) / 2 }
}
