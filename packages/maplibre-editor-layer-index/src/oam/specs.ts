import type { RasterLayerOptions, RasterLayerSpec, RasterSourceSpec } from '../core/specs'
import type { OamLayer } from './types'

/** Stable source/layer id of an image: `oam-<item id>` */
export function oamSourceId(layer: OamLayer | string): string {
  const itemId = typeof layer === 'string' ? layer.replace(/^oam:/, '') : layer.oam.itemId
  return `oam-${itemId}`
}

export type OamRasterSourceOptions = {
  /**
   * `2` asks TiTiler for 512 px tiles (`@2x`) drawn into 256 px, for sharp images on
   * high-density screens. Default `1`: each tile is rendered on HOT's server, so
   * doubling the pixels is the app's choice.
   */
  pixelRatio?: 1 | 2
}

/**
 * A MapLibre raster source for an image, bounded to its extent. An image across the
 * antimeridian has no `bounds`: MapLibre draws no tile for a box with west > east.
 */
export function getOamRasterSourceSpec(
  layer: OamLayer,
  options: OamRasterSourceOptions = {},
): RasterSourceSpec {
  const tiles =
    options.pixelRatio === 2
      ? layer.tiles.map((url) => url.replace('/{z}/{x}/{y}?', '/{z}/{x}/{y}@2x?'))
      : layer.tiles
  return {
    type: 'raster',
    tiles,
    tileSize: layer.tileSize,
    ...(layer.bboxes.length === 1 ? { bounds: layer.bbox } : {}),
    ...(layer.maxzoom !== undefined ? { maxzoom: layer.maxzoom } : {}),
    attribution: layer.attributionHtml,
  }
}

/** A MapLibre raster layer for an image; as `getRasterLayerSpec`, it overzooms past `maxzoom` unless clamped */
export function getOamRasterLayerSpec(
  layer: OamLayer,
  options: RasterLayerOptions = {},
): RasterLayerSpec {
  return {
    id: options.id ?? oamSourceId(layer),
    type: 'raster',
    source: options.source ?? oamSourceId(layer),
    ...(options.clampMaxzoom && layer.maxzoom !== undefined ? { maxzoom: layer.maxzoom } : {}),
    ...(options.paint ? { paint: options.paint } : {}),
  }
}

/**
 * The value for the `imagery_used` changeset tag: `OpenAerialMap (<title>)`. iD and
 * JOSM have no OAM catalogue of their own, so there is no convention to follow;
 * the title names the image the mapper traced.
 */
export function getOamImageryUsedValue(layer: Pick<OamLayer, 'name'>): string {
  const name = layer.name.trim()
  return name ? `OpenAerialMap (${name})` : 'OpenAerialMap'
}
