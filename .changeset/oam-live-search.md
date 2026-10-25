---
'@osm-editor-kit/maplibre-editor-layer-index': minor
---

New entry point `/oam`: OpenAerialMap images, live from HOT's STAC API (`api.imagery.hotosm.org`).

- `searchOam(bounds, options)` lists the images in a view, newest first; `getOamItem(id)` reads one for a link.
- Each image is an `OamLayer`, shaped like an `EliLayer` where the fields mean the same, with the OAM details (provider, platform, resolution, footprint, thumbnail, license) under `oam`.
- `getOamRasterSourceSpec`, `getOamRasterLayerSpec`, `oamSourceId` and `getOamImageryUsedValue` mirror the ELI helpers. Tiles come from HOT's TiTiler, bounded to the image.
- No data is bundled and the root entry does not import it, so apps that do not use it are unchanged.
- `RasterSourceSpec` gains an optional `bounds`.
