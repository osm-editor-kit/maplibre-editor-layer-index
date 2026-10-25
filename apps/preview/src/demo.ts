import {
  getLayer,
  loadCoverageFeatures,
  type EliCategory,
  type EliLayer,
} from '@osm-editor-kit/maplibre-editor-layer-index'
import * as countryCoder from '@rapideditor/country-coder'
import type { FeatureCollection, Geometry, Position } from 'geojson'
import type {
  ExpressionSpecification,
  FilterSpecification,
  LayerSpecification,
  Map as MaplibreMap,
} from 'maplibre-gl'
import { useEffect, useRef, useState } from 'react'
import { coverageCategories, type MapSearch } from './mapSearch'

/** Everything both demos (react-map-gl and raw maplibre-gl) share besides the map itself. */

export const BASE_STYLE = 'https://tiles.openfreemap.org/styles/positron'
export const COVERAGE_SOURCE = 'eli-coverage'
export const HIGHLIGHT_SOURCE = 'eli-highlight'
export const BBOX_SOURCE = 'eli-bbox'
/** Lowest coverage layer — imagery is inserted below it so borders stay on top. */
export const FIRST_COVERAGE_LAYER = 'eli-coverage-fill'
/** Zoom buttons: top-left, the corner free of the spinner (top-right), edge note and attribution. */
export const ZOOM_CONTROL_POSITION = 'top-left' as const
export const EMPTY_FC: FeatureCollection = { type: 'FeatureCollection', features: [] }

// Coverage geometry of a layer falls into its category (missing → "other").
const categoryExpr: ExpressionSpecification = ['coalesce', ['get', 'category'], 'other']
// Inset band: a thick translucent line offset toward the polygon interior.
// MapLibre tiles GeoJSON with exterior rings clockwise on screen (and holes the
// other way round), whatever the source winding — so the covered side is always
// to the right of the line direction, which is a positive `line-offset`.
const INNER_WIDTH = 9

/** Style layers for coverage borders, hover highlight and the hovered bbox. */
export function coverageLayers(
  open: EliCategory[],
  selected: string[],
  hoveredId: string | null,
): LayerSpecification[] {
  // Opening a group draws the borders of all its categories (Aerial also draws historic aerial).
  // While imagery is selected only that imagery and its outline are shown, so its seams
  // can be checked — the open groups' borders are hidden.
  const openFilter = [
    'in',
    categoryExpr,
    ['literal', selected.length > 0 ? [] : coverageCategories(open)],
  ] as FilterSpecification
  const selectedFilter = ['in', ['get', 'id'], ['literal', selected]] as FilterSpecification
  const labelFilter = ['==', ['get', 'id'], hoveredId ?? '__none__'] as FilterSpecification
  const inset = (width: number) => ({ 'line-width': width, 'line-offset': width / 2 })
  return [
    {
      id: FIRST_COVERAGE_LAYER,
      source: COVERAGE_SOURCE,
      type: 'fill',
      filter: openFilter,
      paint: { 'fill-color': '#1a73e8', 'fill-opacity': 0 },
    },
    {
      id: 'eli-coverage-inner',
      source: COVERAGE_SOURCE,
      type: 'line',
      filter: openFilter,
      paint: { 'line-color': '#1a73e8', 'line-opacity': 0.16, ...inset(INNER_WIDTH) },
    },
    {
      id: 'eli-coverage-outline',
      source: COVERAGE_SOURCE,
      type: 'line',
      filter: openFilter,
      paint: { 'line-color': '#1a73e8', 'line-width': 1.5 },
    },
    // Selected shape: a thin cut line with a white casing, nothing that covers the
    // imagery's edge — so you can see where the tiles really end.
    {
      id: 'eli-coverage-selected-casing',
      source: COVERAGE_SOURCE,
      type: 'line',
      filter: selectedFilter,
      paint: { 'line-color': '#ffffff', 'line-width': 3, 'line-opacity': 0.8 },
    },
    {
      id: 'eli-coverage-selected',
      source: COVERAGE_SOURCE,
      type: 'line',
      filter: selectedFilter,
      paint: { 'line-color': '#d50000', 'line-width': 1.25 },
    },
    {
      id: 'eli-coverage-label',
      source: COVERAGE_SOURCE,
      type: 'symbol',
      filter: labelFilter,
      layout: {
        'symbol-placement': 'line',
        'text-field': ['get', 'name'],
        'text-size': 11,
        'text-font': ['Noto Sans Regular'],
      },
      paint: { 'text-color': '#0b3d91', 'text-halo-color': '#ffffff', 'text-halo-width': 1.5 },
    },
    // Hovered shape — its own source on top, so the highlight is always visible
    // even where many layers share (and stack) the same polygon.
    {
      id: 'eli-highlight-inner',
      source: HIGHLIGHT_SOURCE,
      type: 'line',
      paint: { 'line-color': '#ff6d00', 'line-opacity': 0.28, ...inset(INNER_WIDTH + 3) },
    },
    {
      id: 'eli-highlight-outline',
      source: HIGHLIGHT_SOURCE,
      type: 'line',
      paint: { 'line-color': '#ff6d00', 'line-width': 3 },
    },
    // Bounding box of the hovered layer (the box used for viewport filtering).
    {
      id: 'eli-bbox-fill',
      source: BBOX_SOURCE,
      type: 'fill',
      paint: { 'fill-color': '#9c27b0', 'fill-opacity': 0.08 },
    },
    {
      id: 'eli-bbox-line',
      source: BBOX_SOURCE,
      type: 'line',
      paint: { 'line-color': '#9c27b0', 'line-width': 2, 'line-dasharray': [3, 2] },
    },
  ]
}

/** The hovered layer's coverage polygon as its own collection (empty when none). */
export function highlightData(
  coverage: FeatureCollection | null,
  hoveredId: string | null,
): FeatureCollection {
  const feature = coverage?.features.find((f) => f.properties?.id === hoveredId)
  return feature ? { type: 'FeatureCollection', features: [feature] } : EMPTY_FC
}

/** The hovered layer's coverage boxes as rectangles (empty when none). */
export function bboxData(hoveredId: string | null): FeatureCollection {
  const layer = hoveredId ? getLayer(hoveredId) : undefined
  if (!layer) return EMPTY_FC
  return {
    type: 'FeatureCollection',
    features: layer.bboxes.map(([w, rawS, e, rawN]) => {
      // Clamp latitude to the Web Mercator limit so a whole-world bbox still renders.
      const s = Math.max(rawS, -85.05)
      const n = Math.min(rawN, 85.05)
      return {
        type: 'Feature' as const,
        properties: {},
        geometry: {
          type: 'Polygon' as const,
          coordinates: [
            [
              [w, s],
              [e, s],
              [e, n],
              [w, n],
              [w, s],
            ],
          ],
        },
      }
    }),
  }
}

/**
 * Coarse coverage scope. `worldwide` layers have no coverage polygon — which is
 * why they show no outline on the map. `continental` layers have a very large coverage box.
 */
export function layerScope(layer: EliLayer): 'worldwide' | 'continental' | null {
  if (layer.geometryId === 'world' || layer.continents.includes('world')) return 'worldwide'
  if (layer.bboxes.some(([w, s, e, n]) => Math.max(e - w, n - s) >= 30)) return 'continental'
  return null
}

/**
 * Countries visible in the map, found by sampling a grid of points with
 * country-coder. Passed to the package as `filter.countryCodes`, which drops
 * bbox false matches (a US-only source whose bounding box spans the globe).
 */
export function countriesInView(map: MaplibreMap): string[] {
  const { clientWidth, clientHeight } = map.getContainer()
  // Dense enough to catch small countries at country-level zooms; a lookup takes microseconds.
  const steps = 16
  const codes = new Set<string>()
  for (let i = 0; i <= steps; i++) {
    for (let j = 0; j <= steps; j++) {
      const { lng, lat } = map.unproject([(clientWidth * i) / steps, (clientHeight * j) / steps])
      const code = countryCoder.iso1A2Code([lng, lat])
      if (code) codes.add(code)
    }
  }
  return [...codes].sort()
}

/** State of the layer list: `error` when a data chunk failed to load. */
export type ListStatus = 'loading' | 'ready' | 'error'

/** Countries in view, refreshed whenever the map stops moving. */
export function useCountriesInView(map: MaplibreMap | null): string[] {
  const [codes, setCodes] = useState<string[]>([])
  useEffect(() => {
    if (!map) return
    const update = () => {
      const next = countriesInView(map)
      setCodes((cur) => (cur.join() === next.join() ? cur : next))
    }
    update()
    map.on('moveend', update)
    map.on('resize', update)
    return () => {
      map.off('moveend', update)
      map.off('resize', update)
    }
  }, [map])
  return codes
}

/**
 * Coverage polygons for the listed layers (borders + hover/selected highlight).
 * Only loaded while something draws them: with nothing open, selected or hovered,
 * moving the map must not reload or re-set the large coverage source.
 */
export function useCoverage(
  layers: EliLayer[],
  open: string[],
  selected: string[],
  hoveredId: string | null,
): FeatureCollection | null {
  const [coverage, setCoverage] = useState<FeatureCollection | null>(null)
  const inUse = open.length > 0 || selected.length > 0 || hoveredId !== null
  const key = inUse ? layers.map((l) => l.id).join(',') : null
  useEffect(() => {
    if (key === null) return
    let cancelled = false
    loadCoverageFeatures(layers).then((fc) => {
      if (!cancelled) setCoverage(fc)
    })
    return () => {
      cancelled = true
    }
    // `key` stands in for the layer list's content.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return inUse ? coverage : null
}

/** True while imagery tiles are loading (only when something is selected). */
export function useTilesLoading(map: MaplibreMap | null, active: boolean): boolean {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    // Nothing selected: no imagery can be loading, so no map listeners either.
    if (!map || !active) return
    let raf = 0
    // Defer to the next frame: maplibre fires these during synchronous source commits.
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const next = active && !map.areTilesLoaded()
        setLoading((cur) => (cur === next ? cur : next))
      })
    }
    map.on('dataloading', update)
    map.on('data', update)
    map.on('idle', update)
    update()
    return () => {
      cancelAnimationFrame(raf)
      map.off('dataloading', update)
      map.off('data', update)
      map.off('idle', update)
    }
  }, [map, active])
  // A stale `true` from an earlier selection must not outlive it.
  return active && loading
}

function pointInRing(x: number, y: number, ring: Position[]): boolean {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i] as [number, number]
    const [xj, yj] = ring[j] as [number, number]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

/** Is a lon/lat point covered by a Polygon/MultiPolygon (holes respected)? */
export function pointInGeometry(lng: number, lat: number, geometry: Geometry): boolean {
  const inRings = (rings: Position[][]) =>
    rings.length > 0 &&
    pointInRing(lng, lat, rings[0]!) &&
    !rings.slice(1).some((hole) => pointInRing(lng, lat, hole))
  if (geometry.type === 'Polygon') return inRings(geometry.coordinates)
  if (geometry.type === 'MultiPolygon') return geometry.coordinates.some(inRings)
  return false
}

/** URL-backed demo state: view, open categories, selected layers. */
export function useDemoSearch(search: MapSearch, commit: (next: MapSearch) => void) {
  // Read from a ref (not the render snapshot) so same-tick changes compose
  // instead of clobbering each other.
  const ref = useRef(search)
  ref.current = search
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const set = (patch: Partial<MapSearch>) => {
    const next = { ...ref.current, ...patch }
    ref.current = next
    commit(next)
  }
  return {
    persistView: (map: MaplibreMap) => {
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        const round = (n: number) => Math.round(n * 1e5) / 1e5
        const { lat, lng } = map.getCenter()
        set({ lat: round(lat), lng: round(lng), zoom: round(map.getZoom()) })
      }, 250)
    },
    toggleOpen: (category: EliCategory) => {
      const cur = ref.current.open
      set({ open: cur.includes(category) ? cur.filter((c) => c !== category) : [...cur, category] })
    },
    // A time series shows one date at a time: picking a date swaps out its
    // siblings, picking the active one turns the series off.
    toggleSelect: (id: string, siblingIds: string[] = [id]) => {
      const cur = ref.current.selected
      const rest = cur.filter((s) => !siblingIds.includes(s))
      set({ selected: cur.includes(id) ? rest : [...rest, id] })
    },
  }
}

/** What the edge indicator needs for the hovered layer. */
export function hoveredArea(
  coverage: FeatureCollection | null,
  hoveredId: string | null,
): Geometry | 'world' | null {
  if (!hoveredId) return null
  if (getLayer(hoveredId)?.geometryId === 'world') return 'world'
  return coverage?.features.find((f) => f.properties?.id === hoveredId)?.geometry ?? null
}
