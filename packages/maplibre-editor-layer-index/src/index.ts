export type {
  BBox,
  EliByCountry,
  EliCategory,
  EliContinent,
  EliGeometries,
  EliLayer,
  EliLayerDetails,
  EliLayerGroup,
  EliLayerType,
  EliLocatorLayer,
  EliManifest,
  EliShardsMeta,
} from './core/types'

export { getImageryUsedValue, sanitizeImageryUrlTemplate } from './core/imagery-used'

export {
  applyApiKeys,
  eliApiKeyNames,
  hasRequiredKeys,
  type EliApiKey,
  type EliApiKeys,
} from './core/apiKeys'

export { viewportBoxes, type ViewportBounds } from './core/bounds'

export { continentForLngLat } from './core/continents'

export {
  continentsForCenter,
  continentsForViewport,
  ensureDetailsForContinents,
  ensureDetailsForLayers,
  getGeometry,
  getLayer,
  getLayerHydrated,
  getLayers,
  getManifest,
  getShardsMeta,
  hydrateLayer,
  hydrateLayers,
  loadByCountry,
  loadCoverageFeatures,
  loadGeometries,
  type CoverageFeature,
} from './core/data'

export {
  ensureDetailsForViewport,
  filterLayers,
  layersForCountry,
  layersInViewport,
  loadLayersInViewport,
  type FilterOptions,
} from './core/filter'

export { groupLayers, type EliLayerEntry } from './core/groups'

export {
  applyWmsPixelRatio,
  eliSourceId,
  getRasterLayerSpec,
  getRasterSourceSpec,
  type RasterLayerOptions,
  type RasterLayerSpec,
  type RasterSourceOptions,
  type RasterSourceSpec,
} from './core/specs'
