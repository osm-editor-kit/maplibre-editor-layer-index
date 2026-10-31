/**
 * OpenAerialMap, live from HOT's STAC API: the images in a view and the MapLibre
 * specs to draw one. A separate entry point with no data, so an app that never
 * imports it sends no request and ships none of this code.
 */
export { OAM_COLLECTION, OAM_RASTER_URL, OAM_STAC_URL, type OamLayer } from './types'

export { oamItemId, oamLayerId, type OamUrls } from './layer'

export {
  getOamItem,
  OamRequestError,
  searchOam,
  type OamRequestOptions,
  type OamSearchOptions,
  type OamSearchResult,
} from './search'

export {
  getOamImageryUsedValue,
  getOamRasterLayerSpec,
  getOamRasterSourceSpec,
  oamSourceId,
  type OamRasterSourceOptions,
} from './specs'
