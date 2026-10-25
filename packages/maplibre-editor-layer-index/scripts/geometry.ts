import { createHash } from 'node:crypto'
import type { Geometry, Position } from 'geojson'
import type { BBox } from '../src/core/types'

export const WORLD_GEOMETRY_ID = 'world'
export const WORLD_BBOX: BBox = [-180, -90, 180, 90]

/**
 * Stable content hash of a geometry, used as the dedup key. ELI repeats identical
 * coverage polygons across many layers (e.g. the Berlin polygon); hashing the
 * `{type, coordinates}` shape collapses them to a single stored geometry.
 */
export function geometryId(geometry: Geometry): string {
  const canonical = JSON.stringify({
    type: geometry.type,
    coordinates: 'coordinates' in geometry ? geometry.coordinates : null,
  })
  return createHash('sha1').update(canonical).digest('hex').slice(0, 16)
}

/** Outer rings of a Polygon/MultiPolygon; holes never widen a box. */
function outerRings(geometry: Geometry): Position[][] {
  if (geometry.type === 'Polygon') return geometry.coordinates.slice(0, 1)
  if (geometry.type === 'MultiPolygon') return geometry.coordinates.map((rings) => rings[0]!)
  return []
}

/**
 * Boxes of one ring. A ring that crosses the antimeridian (consecutive points
 * more than 180° apart) is unrolled past 180° and split into one box per side.
 */
function ringBBoxes(ring: Position[]): BBox[] {
  const crosses = ring.some((pos, i) => i > 0 && Math.abs(pos[0]! - ring[i - 1]![0]!) > 180)
  let west = Infinity
  let south = Infinity
  let east = -Infinity
  let north = -Infinity
  for (const [rawLon, lat] of ring) {
    if (rawLon === undefined || lat === undefined) continue
    const lon = crosses && rawLon < 0 ? rawLon + 360 : rawLon
    west = Math.min(west, lon)
    east = Math.max(east, lon)
    south = Math.min(south, lat)
    north = Math.max(north, lat)
  }
  if (!Number.isFinite(west)) return []
  if (east <= 180) return [[west, south, east, north]]
  return [
    [west, south, 180, north],
    [-180, south, east - 360, north],
  ]
}

export const bboxArea = (box: BBox) => (box[2] - box[0]) * (box[3] - box[1])

function union(a: BBox, b: BBox): BBox {
  return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])]
}

/**
 * Two boxes become one when that adds little empty space, or when both fit in
 * a small area anyway. Far-apart parts (Alaska and the western Aleutians,
 * France and its overseas regions) keep their own boxes.
 */
function shouldMerge(a: BBox, b: BBox): boolean {
  const merged = union(a, b)
  // Wider than half the globe: the parts are on opposite sides, keep them apart.
  if (merged[2] - merged[0] > 180) return false
  if (merged[2] - merged[0] + (merged[3] - merged[1]) <= 10) return true
  return bboxArea(merged) <= 4 * (bboxArea(a) + bboxArea(b))
}

/**
 * Coverage boxes `[west, south, east, north]` of a Polygon/MultiPolygon, each
 * within ±180° and with west ≤ east. Usually one box; parts far apart (or on
 * both sides of the antimeridian) get one box each, so a box never spans the
 * globe just because the coverage does. Sorted west to east.
 */
export function geometryBBoxes(geometry: Geometry): BBox[] {
  const boxes = outerRings(geometry).flatMap(ringBBoxes)
  if (boxes.length === 0) return [WORLD_BBOX]
  let merging = true
  while (merging) {
    merging = false
    outer: for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        if (shouldMerge(boxes[i]!, boxes[j]!)) {
          boxes[i] = union(boxes[i]!, boxes[j]!)
          boxes.splice(j, 1)
          merging = true
          break outer
        }
      }
    }
  }
  return boxes.sort((a, b) => a[0] - b[0] || a[1] - b[1])
}
