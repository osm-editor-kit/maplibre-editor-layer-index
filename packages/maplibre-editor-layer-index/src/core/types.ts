import type { Geometry } from 'geojson'

/** Editor Layer Index source types we transform into MapLibre raster sources. */
export type EliLayerType = 'tms' | 'wms' | 'wmts'

/** ELI rough categorisation, passed through for app-side filtering/UI. */
export type EliCategory =
  | 'photo'
  | 'map'
  | 'historicmap'
  | 'osmbasedmap'
  | 'historicphoto'
  | 'qa'
  | 'elevation'
  | 'other'

/** `[west, south, east, north]` in WGS84 degrees. */
export type BBox = [number, number, number, number]

export type EliContinent =
  | 'africa'
  | 'antarctica'
  | 'asia'
  | 'europe'
  | 'north-america'
  | 'oceania'
  | 'south-america'
  | 'world'

/** Slim always-loaded row used for viewport/country filtering. */
export type EliLocatorLayer = {
  id: string
  name: string
  type: EliLayerType
  category?: EliCategory
  best: boolean
  overlay: boolean
  minzoom?: number
  maxzoom?: number
  tileSize: number
  scheme?: 'xyz' | 'tms'
  geometryId: string
  /**
   * Coverage boxes, each within ±180° with west ≤ east. Usually one; coverage
   * whose parts lie far apart or on both sides of the antimeridian (Alaska,
   * France with its overseas regions, New Zealand) gets one box per area, so no
   * box spans the globe unless the coverage does.
   */
  bboxes: BBox[]
  countryCodes: string[]
  requiresKeys: string[]
  /**
   * Continents this layer is filed under. The main country of each coverage box decides
   * (border slivers do not count). Worldwide → ['world'].
   */
  continents: EliContinent[]
}

/** Lazy detail fields merged onto a locator row to form a full EliLayer. */
export type EliLayerDetails = {
  tiles: string[]
  urlTemplate: string
  availableProjections?: string[]
  attributionHtml?: string
  attributionText?: string
  attributionUrl?: string
  licenseUrl?: string
  icon?: string
  startDate?: string
  endDate?: string
  /** Set when this layer is one date of a time series, see {@link EliLayerGroup}. */
  group?: EliLayerGroup
}

/**
 * Membership in a time series: layers that cover the same area and differ only
 * by capture date (year, month or season). Derived at build time from the layer
 * name and coverage, because ELI has no such field.
 */
export type EliLayerGroup = {
  /** Shared by all members of the series, e.g. `berlin-geoportal-dop20rgb`. */
  id: string
  /** Series name without the date part, e.g. `Berlin/Geoportal DOP20RGB`. */
  name: string
  /** What tells this member apart, e.g. `2025`, `2025 Sommer`, `Mar 2026`. */
  label: string
  /** Position within the series, `0` = oldest. */
  order: number
}

/**
 * One ELI layer, ready for MapLibre. Everything needed to render the imagery and
 * to filter by viewport is here — except the coverage polygon coordinates, which
 * live in continent-sharded `geometries/<continent>.json` (referenced by
 * {@link EliLocatorLayer.geometryId}).
 */
export type EliLayer = EliLocatorLayer & EliLayerDetails

/** The slim, always-loaded locator file: filter fields only, no tile URLs. */
export type EliLocatorIndex = { layers: EliLocatorLayer[] }

/** Per-continent lazy detail shard: layer id → tile URLs, attribution, etc. */
export type EliDetailsShard = Record<string, EliLayerDetails>

/** Router metadata for continent-sharded lazy loads. */
export type EliShardsMeta = {
  continents: EliContinent[]
  /** ISO alpha-2 → continent (no 'world'). */
  countryToContinent: Record<string, Exclude<EliContinent, 'world'>>
}

/**
 * Legacy monolithic index shape ({@link EliLayer}[] with details inline). Prefer
 * {@link EliLocatorIndex} + continent detail shards for new consumers.
 */
export type EliIndex = {
  layers: EliLayer[]
}

/** Deduplicated coverage geometries by id (continent-sharded at rest). */
export type EliGeometries = Record<string, Geometry>

/**
 * Precomputed area↔layer map: ISO region code → layer ids whose coverage touches
 * it, plus the special `"worldwide"` bucket for layers with no coverage polygon.
 * A ready-made spatial shortcut for consumers that don't want to build their own
 * index (e.g. iD/Rapid).
 */
export type EliByCountry = Record<string, string[]>

/** Build provenance, emitted next to the data. */
export type EliManifest = {
  /** URL the imagery index was fetched from. */
  source: string
  /** HTTP ETag / Last-Modified from the imagery.geojson response, when available. */
  sourceVersion: string | null
  /**
   * Content commit SHA on `osmlab/editor-layer-index` (gh-pages), resolved from
   * the tip commit or its “Deploying to gh-pages from @…@SHA” message.
   */
  sourceCommit?: string | null
  /** ISO timestamp the data was generated. */
  generatedAt: string
  counts: {
    /** Layers present in the upstream index. */
    upstream: number
    /** Layers kept after dropping unsupported types. */
    published: number
    /** Unique geometries after deduplication. */
    geometries: number
    dropped: Record<string, number>
    /** Non-empty `details/<continent>.json` shards written. */
    detailShards?: number
    /** Non-empty `geometries/<continent>.json` shards written. */
    geometryShards?: number
  }
}
