---
'@osm-editor-kit/maplibre-editor-layer-index': patch
---

Make lazy loading reliable and lighter:

- Layers no longer go missing along continent borders (Guam, Turkey, Israel, North Africa) or in
  views spanning two continents. Details are now loaded for the layers in view
  (`ensureDetailsForLayers()`) instead of for a continent guessed from the map center.
- A data chunk that failed to load is retried on the next call instead of failing until reload, and
  `useEditorLayerIndex()` reports `status: 'error'` instead of staying on `'loading'`.
- Data chunks ship as compact JSON: the published package shrinks from 13.7 MB to 5.6 MB and large
  shards parse faster.
- The package can now be loaded with `require()` on Node 22+ (`default` export condition).
