---
'@osm-editor-kit/maplibre-editor-layer-index': minor
---

**Breaking:** `EliLocatorLayer.bbox` is replaced by `bboxes: BBox[]`.

Layers whose coverage lies on both sides of the antimeridian or in far-apart parts had a bounding box around the whole globe, so `layersInViewport()` listed them almost everywhere: NRCS Alaska in Berlin, IGN BD Ortho (France with its overseas regions) across the tropics, LINZ New Zealand around the southern hemisphere.

- Every layer now has one coverage box, or one per area when its parts lie far apart. Each box lies within ±180° with west ≤ east. Migrate `layer.bbox` to `layer.bboxes` (for a single extent, e.g. `fitBounds`, use the box you need; most layers have exactly one).
- `layersInViewport()` handles views on MapLibre world copies (longitudes past ±180°, which previously matched nothing) and views across the antimeridian. The new `viewportBoxes()` exposes that normalisation.
- LINZ NZ Topo50 no longer counts as worldwide: it is filed under `NZ` / `oceania` and gets its coverage outline back.
- Continent shards hold a layer by the main country of each coverage area, not by border slivers of coarse polygons. Spanish, Canadian, Argentinian and some Greenland and Bulgarian layers left the shards of neighbouring continents, so the Africa, South America and Asia shards got smaller.
