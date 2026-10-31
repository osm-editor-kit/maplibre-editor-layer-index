---
'@osm-editor-kit/maplibre-editor-layer-index': major
---

First stable release. The code API now follows semantic versioning; the weekly data updates stay patch releases, so a layer id can disappear (see Versioning in the README).

Breaking: exports that only described internals are gone.

- Root: the types `EliIndex`, `EliLocatorIndex` and `EliDetailsShard`.
- `/oam`: `oamMaxzoom`, `oamRenderParams`, `oamSearchUrl`, `pickOamAsset`, `toOamLayer` and the types `StacAsset`, `StacItem`, `StacItemCollection`. Use `searchOam` and `getOamItem`.
