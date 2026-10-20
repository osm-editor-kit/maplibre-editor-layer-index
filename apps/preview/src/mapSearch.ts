import type { EliCategory } from '@osm-editor-kit/maplibre-editor-layer-index'
import { parseList } from './searchParams'

/** Category groups shown in the sidebar, in display order, with friendly labels. */
export const CATEGORY_GROUPS: { key: EliCategory; label: string }[] = [
  { key: 'photo', label: 'Aerial / Satellite' },
  { key: 'map', label: 'Maps' },
  { key: 'osmbasedmap', label: 'OSM-based maps' },
  { key: 'historicmap', label: 'Historic maps' },
  { key: 'elevation', label: 'Elevation' },
  { key: 'qa', label: 'QA' },
  { key: 'other', label: 'Other' },
]

/**
 * The group each ELI category is listed under. Historic aerial sits with aerial:
 * a dated series is one row whatever its photo/historic split.
 */
const GROUP_OF: Record<EliCategory, EliCategory> = {
  photo: 'photo',
  historicphoto: 'photo',
  map: 'map',
  historicmap: 'historicmap',
  osmbasedmap: 'osmbasedmap',
  elevation: 'elevation',
  qa: 'qa',
  other: 'other',
}

/** The group a layer is listed under (`category` missing → "other"). */
export function groupOf(category: EliCategory | undefined): EliCategory {
  return GROUP_OF[category ?? 'other']
}

/** Every ELI category whose coverage is drawn for these open groups. */
export function coverageCategories(open: EliCategory[]): EliCategory[] {
  return (Object.keys(GROUP_OF) as EliCategory[]).filter((c) => open.includes(GROUP_OF[c]))
}

// Every ELI category, so URLs with a retired key (`open=historicphoto`) still map to a group.
const CATEGORY_KEYS = Object.keys(GROUP_OF)

export type MapSearch = {
  lat: number
  lng: number
  zoom: number
  /** Category groups currently expanded (also: which coverage borders to draw). */
  open: EliCategory[]
  /** Layers toggled on as raster overlays. */
  selected: string[]
}

/**
 * Nice, shareable URLs:
 * `?lat=52.52&lng=13.405&zoom=10&open=photo,historicmap&selected=Berlin-2024`.
 */
export function mapSearchSchema(raw: Record<string, unknown>): MapSearch {
  const num = (v: unknown, fallback: number) => {
    const n = Number(v)
    return Number.isFinite(n) ? n : fallback
  }
  // Categories map to their group, so `open=historicphoto` opens Aerial / Satellite.
  const open = [
    ...new Set(
      parseList(raw.open)
        .filter((c): c is EliCategory => CATEGORY_KEYS.includes(c))
        .map(groupOf),
    ),
  ]
  return {
    lat: num(raw.lat, 52.52),
    lng: num(raw.lng, 13.405),
    zoom: num(raw.zoom, 10),
    open,
    selected: parseList(raw.selected),
  }
}

export const DEFAULT_VIEW: MapSearch = {
  lat: 52.52,
  lng: 13.405,
  zoom: 10,
  open: [],
  selected: [],
}
