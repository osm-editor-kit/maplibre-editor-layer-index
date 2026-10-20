# [@osm-editor-kit/maplibre-editor-layer-index](https://npmx.dev/package/@osm-editor-kit/maplibre-editor-layer-index)

Background imagery for your map, straight from the OSM
[Editor Layer Index](https://github.com/osmlab/editor-layer-index) (ELI): aerial photos, cadastral
maps, historic maps and more, for **react-map-gl** and **maplibre-gl**.

The package tells you **which layers cover the current view** and hands you ready-made MapLibre
source and layer specs. Rendering and styling stay with you.

- Refreshed weekly from ELI and released automatically.
- Small at runtime: a ~550 KB index (~75 KB gzipped) loads up front, tile URLs and coverage polygons
  load on demand, per continent.
- No runtime dependencies beyond GeoJSON types.

**[Try the live preview](https://osm-editor-kit.github.io/maplibre-editor-layer-index/)**

```bash
npm i @osm-editor-kit/maplibre-editor-layer-index
```

There are three entry points: `/react` (hook), `/maplibre` (add and remove helpers) and the root
(everything framework-agnostic). The package is ESM; `require()` works on Node 22+.

## react-map-gl

`useEditorLayerIndex` returns the layers covering the current viewport and updates them when the
map stops moving.

With `maplibre-gl` 6, use `react-map-gl` 8.1.2 or newer: 8.1.1 reads a camera property that
maplibre 6 no longer has, so the map throws on every move and jumps around when zooming.

```tsx
import { Fragment } from 'react'
import { Layer, Map, Source } from 'react-map-gl/maplibre'
import {
  eliSourceId,
  getRasterLayerSpec,
  getRasterSourceSpec,
  useEditorLayerIndex,
} from '@osm-editor-kit/maplibre-editor-layer-index/react'

function ImageryLayers() {
  const { layers } = useEditorLayerIndex({ filter: { categories: ['photo'] } })

  return layers.map((layer) => (
    <Fragment key={layer.id}>
      <Source id={eliSourceId(layer)} {...getRasterSourceSpec(layer)} />
      <Layer {...getRasterLayerSpec(layer, { paint: { 'raster-opacity': 0.8 } })} />
    </Fragment>
  ))
}

function App() {
  return (
    <Map initialViewState={{ longitude: 13.4, latitude: 52.5, zoom: 10 }}>
      <ImageryLayers />
    </Map>
  )
}
```

This draws every match on top of each other to keep the example short. A real app shows `layers`
as a list and renders the one the user picks.

Keep `<Source>` and `<Layer>` as siblings, as react-map-gl recommends, rather than nesting the layer
inside the source.

The hook also returns `status`: `'loading'` while data is fetched, `'ready'`, or `'error'` when a
data chunk failed to load. It retries on the next map move, and `layers` keeps its last value in the
meantime.

| Option           | Default     | Purpose                                                                      |
| ---------------- | ----------- | ---------------------------------------------------------------------------- |
| `filter`         | none        | Narrow the list, see [Filter options](#filter-options).                      |
| `mapId`          | current map | `id` of a `<Map>` when you call the hook outside it, inside a `MapProvider`. |
| `map`            | current map | Pass a map instance directly instead.                                        |
| `debounceMs`     | `150`       | Wait after `moveend` before recomputing.                                     |
| `viewportFilter` | `true`      | Set to `false` to get all layers regardless of the view.                     |

## maplibre-gl

```ts
import { loadLayersInViewport } from '@osm-editor-kit/maplibre-editor-layer-index'
import {
  addEditorLayer,
  removeEditorLayer,
} from '@osm-editor-kit/maplibre-editor-layer-index/maplibre'

const [layer] = await loadLayersInViewport(map.getBounds())
if (layer) {
  const id = addEditorLayer(map, layer, { paint: { 'raster-opacity': 0.8 } })
  // later
  removeEditorLayer(map, id)
}
```

`addEditorLayer` adds the source and the layer, and replaces them if they already exist. Pass
`beforeId` to insert the imagery below one of your own layers.

If you only need names and categories for a list, `layersInViewport(bounds)` answers synchronously
from the index, without loading any tile URLs.

## Filter options

Every function that returns layers, and the hook's `filter`, accepts these:

| Option             | Effect                                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------- |
| `categories`       | Keep only these: `photo`, `map`, `historicmap`, `osmbasedmap`, `historicphoto`, `qa`, `elevation`, `other`. |
| `types`            | Keep only these source types: `tms`, `wms`, `wmts`.                                                         |
| `bestOnly`         | Keep only layers ELI marks as the best for their region.                                                    |
| `excludeOverlays`  | Drop transparent overlays, keep full base imagery.                                                          |
| `countryCodes`     | Keep only layers that cover one of these countries, see [below](#filtering-by-country).                     |
| `includeWorldwide` | Set to `false` to drop layers that cover the whole world.                                                   |
| `apiKeys`          | Include layers that need a key, see [API keys](#api-keys).                                                  |

## Filtering by country

The viewport filter compares bounding boxes. That is fast and needs no geometry, but a layer with a
huge bounding box and small real coverage matches too often. US TIGER is the classic case: its
territories sit on both sides of the antimeridian, so its box spans the globe and it shows up in
Germany.

Each layer therefore carries `countryCodes`, computed at build time from its real coverage polygon.
Pass the country of the view to drop the false matches:

```ts
import { iso1A2Code } from '@rapideditor/country-coder' // your dependency, not ours

const country = iso1A2Code(map.getCenter().toArray()) // e.g. 'DE'
const layers = layersInViewport(map.getBounds(), {
  countryCodes: country ? [country] : undefined,
})
// TIGER (US, CA) is gone in Germany. Worldwide layers always pass.
```

To list the layers of a country without a map, use `await layersForCountry('DE')`.

**Limitation:** the bounding box check does not wrap at ±180°, so a layer that crosses the
antimeridian can be missed in a view right at that seam.

## Time series

ELI lists every capture date as its own layer: Berlin has eleven `Berlin/Geoportal DOP20RGB (…)`
entries. `groupLayers()` collapses such a series into one entry with its dates as variants:

```ts
import { groupLayers } from '@osm-editor-kit/maplibre-editor-layer-index'

for (const entry of groupLayers(layers)) {
  entry.name // 'Berlin/Geoportal DOP20RGB', or the plain name of a standalone layer
  entry.grouped // true for a series
  entry.variants // layers, newest first; exactly one for a standalone layer
  entry.defaultVariant // ELI's `best`, else the newest
  entry.variants.map((v) => v.group?.label) // ['2026', '2025 Sommer', '2025', …]
}
```

Group after viewport filtering, so a series only offers the dates that cover the view. In the UI,
show the dates as always-visible buttons rather than a dropdown, so switching year is one click
(the [live preview](https://osm-editor-kit.github.io/maplibre-editor-layer-index/) does this).

ELI has no grouping field, so the series are derived at build time. Layers belong together when
their names match once the date is removed, their coverage is nearly identical (bounding boxes
overlap by at least 80 %), and they are the same kind of layer. A series whose coverage changes
between dates stays split, e.g. ACTmapi (whole territory vs. urban Canberra).

## API keys

A few layers need an API key, for example Mapbox Satellite and the Thunderforest maps. They are
**left out by default**, so your list never contains layers that would render broken tiles. Provide
the key to include them, and pass the same key when building the source:

```ts
const apiKeys = { apikey: 'pk.your-token' }

const layers = layersInViewport(bounds, { apiKeys })
const source = getRasterSourceSpec(layer, { apiKeys })

// react-map-gl
useEditorLayerIndex({ filter: { apiKeys } })
```

`layer.requiresKeys` lists what a layer needs, and `eliApiKeyNames` lists every key name in the
data.

## Sharp WMS tiles on retina screens

ELI's WMS URLs request 256 px images, which look soft on high-density screens. `getRasterSourceSpec`
and `addEditorLayer` therefore request larger images, scaled by the device pixel ratio (up to 2×),
so cadastral layers like ALKIS stay sharp. Pass `{ pixelRatio: 1 }` to turn this off.

TMS and WMTS layers are unchanged. They are only sharper when the server offers `{ratio}` or `@2x`
tiles.

## Zooming past a layer's maximum zoom

By default the imagery stays visible when you zoom in further than a layer's `maxzoom`: MapLibre
stretches the most detailed tiles it has. Pass `{ clampMaxzoom: true }` to `getRasterLayerSpec` or
`addEditorLayer` to hide the layer beyond its `maxzoom` instead.

## Attribution

`getRasterSourceSpec` sets `attribution` from `layer.attributionHtml`, so MapLibre's attribution
control shows it without extra work.

This HTML comes from ELI unchanged. MapLibre sanitizes it, but use `maplibre-gl` 6.4.1 or newer:
older versions have a sanitizer bypass
([GHSA-jrc7-96c5-q579](https://github.com/advisories/GHSA-jrc7-96c5-q579)). If you render it
yourself, sanitize it first and never pass it to `dangerouslySetInnerHTML` unchecked.

## Other renderers (iD, Rapid, Leaflet)

Use the root entry only, not `/maplibre` or `/react`, and read the original ELI `urlTemplate`
instead of the MapLibre-flavoured `tiles`:

```ts
import {
  getLayerHydrated,
  getLayers,
  loadGeometries,
} from '@osm-editor-kit/maplibre-editor-layer-index'

const [first] = getLayers()
const layer = first && (await getLayerHydrated(first.id))
layer?.urlTemplate // substitute {zoom}, {x}, {y} yourself

const geometries = await loadGeometries() // optional, keyed by layer.geometryId
```

The
[iD integration guide](https://github.com/osm-editor-kit/maplibre-editor-layer-index/blob/main/docs/iD-integration.md)
has a full adapter sketch with field mapping, polygons and known gaps.

## API overview

All of these are exported from the root entry. `/react` re-exports them next to the hook.

| Export                                                     | Purpose                                                                 |
| ---------------------------------------------------------- | ----------------------------------------------------------------------- |
| `layersInViewport(bounds, options?)`                       | Layers overlapping a view. Synchronous, no tile URLs.                   |
| `loadLayersInViewport(bounds, options?)`                   | The same, with tile URLs and attribution loaded.                        |
| `filterLayers(options?)`                                   | Apply the filter options without a view.                                |
| `layersForCountry(code)`                                   | Layers covering a country, from a precomputed lookup.                   |
| `getLayers()` / `getLayer(id)`                             | All layers, or one by its ELI id. No tile URLs.                         |
| `getLayerHydrated(id)`                                     | One layer with tile URLs and attribution loaded.                        |
| `getRasterSourceSpec(layer)` / `getRasterLayerSpec(layer)` | MapLibre source and layer specs.                                        |
| `eliSourceId(layer)`                                       | The id the specs use, `eli-<id>`.                                       |
| `groupLayers(layers)`                                      | Collapse time series into one entry each.                               |
| `loadCoverageFeatures(layers)`                             | Coverage polygons as a GeoJSON `FeatureCollection`, ready for a source. |
| `getGeometry(layer)` / `loadGeometries()`                  | The coverage polygon of one layer, or all of them.                      |
| `getImageryUsedValue(layer)`                               | The value for the `imagery_used` changeset tag, as iD writes it.        |
| `getManifest()`                                            | Where the data came from: source, commit, date and counts.              |

`bounds` can be `map.getBounds()`, a `[west, south, east, north]` array or a
`{ west, south, east, north }` object.

Layers come in two shapes. `EliLocatorLayer` has what filtering needs: name, category, bounding
box, countries, zoom range. `EliLayer` adds what rendering needs: `tiles`, `urlTemplate`,
attribution, icon, dates and `group`. The spec helpers and `groupLayers` need an `EliLayer`.

## How the data is loaded and built

| Data                                | Loaded                                         | Size                       |
| ----------------------------------- | ---------------------------------------------- | -------------------------- |
| Index of all layers (filter fields) | Always, with the package                       | ~550 KB, ~75 KB gzipped    |
| Tile URLs and attribution           | On demand, per continent of the layers in view | Up to ~750 KB (Europe)     |
| Coverage polygons                   | On demand, only when you ask for geometry      | ~3.5 MB for all continents |

The parts are separate chunks behind dynamic `import()`, so your bundler splits them automatically.
A map of Berlin loads the index plus the worldwide and European tile URLs, and no polygons. The npm
package itself contains everything, so its install size is the same wherever you are.

A weekly job fetches ELI's `imagery.geojson`, validates it and refuses to publish if the schema
changed, and converts the tile URLs to MapLibre's raster format. It then deduplicates identical
coverage polygons and precomputes each layer's bounding box, countries and continents. Source types
MapLibre cannot render as plain raster tiles (`bing`, `scanex`, `wms_endpoint`, `pmtiles`) are
dropped.

## License

MIT. ELI imagery metadata is © its respective providers; see each layer's `attributionHtml` and
`licenseUrl`.
