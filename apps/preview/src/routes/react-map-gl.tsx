import {
  getLayerHydrated,
  getRasterLayerSpec,
  getRasterSourceSpec,
  useEditorLayerIndex,
  type EliLayer,
} from '@osm-editor-kit/maplibre-editor-layer-index/react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Fragment, useEffect, useMemo, useState } from 'react'
import {
  Layer,
  Map,
  MapProvider,
  NavigationControl,
  Source,
  useMap,
  type MapLayerMouseEvent,
  type ViewStateChangeEvent,
} from 'react-map-gl/maplibre'
import {
  BASE_STYLE,
  BBOX_SOURCE,
  bboxData,
  COVERAGE_SOURCE,
  coverageLayers,
  EMPTY_FC,
  FIRST_COVERAGE_LAYER,
  HIGHLIGHT_SOURCE,
  highlightData,
  hoveredArea,
  useCountriesInView,
  useCoverage,
  useDemoSearch,
  useTilesLoading,
  ZOOM_CONTROL_POSITION,
} from '../demo'
import { EdgeIndicator } from '../EdgeIndicator'
import { LayerSidebar } from '../LayerSidebar'
import { LocationBanner } from '../LocationBanner'
import { mapSearchSchema } from '../mapSearch'

export const Route = createFileRoute('/react-map-gl')({
  validateSearch: mapSearchSchema,
  component: () => (
    <MapProvider>
      <ReactMapGlDemo />
    </MapProvider>
  ),
})

const MAP_ID = 'eli'

function ReactMapGlDemo() {
  const search = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const { persistView, toggleOpen, toggleSelect } = useDemoSearch(search, (next) =>
    navigate({ search: next, replace: true }),
  )
  const { open, selected } = search
  const map = useMap()[MAP_ID]?.getMap() ?? null

  // The package matches by bounding box; the countries in view narrow that down to
  // layers that really belong here (worldwide layers always pass).
  const countryCodes = useCountriesInView(map)
  const { layers, status } = useEditorLayerIndex({
    mapId: MAP_ID,
    filter: countryCodes.length > 0 ? { countryCodes } : undefined,
  })
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const coverage = useCoverage(layers, open, selected, hoveredId)
  const loading = useTilesLoading(map, selected.length > 0)

  // Stable objects, so the sources are only updated when the hover really changes.
  const highlight = useMemo(() => highlightData(coverage, hoveredId), [coverage, hoveredId])
  const bbox = useMemo(() => bboxData(hoveredId), [hoveredId])
  const area = useMemo(() => hoveredArea(coverage, hoveredId), [coverage, hoveredId])

  const selectedKey = selected.join(',')
  const [selectedLayers, setSelectedLayers] = useState<EliLayer[]>([])
  useEffect(() => {
    let cancelled = false
    Promise.all(selected.map((id) => getLayerHydrated(id))).then((results) => {
      if (!cancelled) setSelectedLayers(results.filter((l): l is EliLayer => Boolean(l)))
    })
    return () => {
      cancelled = true
    }
    // `selectedKey` stands in for the id list's content.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKey])

  return (
    <>
      <LocationBanner codes={countryCodes} />
      <LayerSidebar
        intro={
          <>
            <code>react-map-gl</code>: the <code>useEditorLayerIndex()</code> hook lists the layers,
            you render them as <code>&lt;Source&gt;</code> / <code>&lt;Layer&gt;</code>.
          </>
        }
        layers={layers}
        status={status}
        open={open}
        selected={selected}
        hoveredId={hoveredId}
        onToggleOpen={toggleOpen}
        onToggleSelect={toggleSelect}
        onHover={setHoveredId}
      />

      <div className="map">
        <Map
          id={MAP_ID}
          initialViewState={{ longitude: search.lng, latitude: search.lat, zoom: search.zoom }}
          mapStyle={BASE_STYLE}
          style={{ width: '100%', height: '100%' }}
          interactiveLayerIds={[FIRST_COVERAGE_LAYER]}
          onMouseMove={(e: MapLayerMouseEvent) => {
            // Read properties.id, not feature.id: maplibre GeoJSON sources don't keep
            // non-numeric string feature ids, so feature.id would be undefined here.
            const id = e.features?.[0]?.properties?.id
            setHoveredId(id != null ? String(id) : null)
          }}
          onMouseLeave={() => setHoveredId(null)}
          onMoveEnd={(e: ViewStateChangeEvent) => persistView(e.target)}
        >
          <NavigationControl showCompass={false} position={ZOOM_CONTROL_POSITION} />

          {/* react-map-gl convention: keep <Source> and <Layer> FLAT (separate
              siblings, Layer referencing the source by id) — never nested. */}

          {/* Coverage borders first and always mounted (empty until loaded), so the
              imagery below can name them as its beforeId. */}
          <Source id={COVERAGE_SOURCE} type="geojson" data={coverage ?? EMPTY_FC} />
          <Source id={HIGHLIGHT_SOURCE} type="geojson" data={highlight} />
          <Source id={BBOX_SOURCE} type="geojson" data={bbox} />
          {coverageLayers(open, selected, hoveredId).map((spec) => (
            <Layer key={spec.id} {...spec} />
          ))}

          {/* Imagery for selected layers. react-map-gl adds a <Layer> on top of the stack
              when it mounts, whatever its place here — beforeId keeps it below the borders. */}
          {selectedLayers.map((layer) => (
            <Fragment key={layer.id}>
              <Source id={`eli-raster-${layer.id}`} {...getRasterSourceSpec(layer)} />
              <Layer
                {...getRasterLayerSpec(layer, {
                  id: `eli-raster-${layer.id}`,
                  source: `eli-raster-${layer.id}`,
                  paint: { 'raster-opacity': 0.9 },
                })}
                beforeId={FIRST_COVERAGE_LAYER}
              />
            </Fragment>
          ))}
        </Map>

        <EdgeIndicator map={map} area={area} />
        {loading && (
          <div className="map-spinner" role="status">
            <span className="spinner" />
            Loading imagery…
          </div>
        )}
      </div>
    </>
  )
}
