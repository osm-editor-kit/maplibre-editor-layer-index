---
'@osm-editor-kit/maplibre-editor-layer-index': patch
---

`ensureDetailsForViewport` now also loads the shards of the layers in view, so layers filed under another continent than the map centre hydrate (Gran Canaria, French Guiana, Réunion, Guam, the western Aleutians).

`/oam`: images across the antimeridian get two `bboxes` and a source without `bounds`, so they draw. A malformed STAC item is skipped instead of failing the whole search, `matched` counts an image on both sides once, and a `NaN` limit falls back to the default.
