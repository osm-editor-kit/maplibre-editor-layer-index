import {
  getLayerHydrated,
  loadLayersInViewport,
  type EliLayer,
} from '@osm-editor-kit/maplibre-editor-layer-index'
import {
  addEditorLayer,
  removeEditorLayer,
} from '@osm-editor-kit/maplibre-editor-layer-index/maplibre'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import type { FeatureCollection } from 'geojson'
import maplibregl, { type GeoJSONSource } from 'maplibre-gl'
import { useEffect, useRef, useState } from 'react'
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
} from '../demo'
import { EdgeIndicator } from '../EdgeIndicator'
import { LayerSidebar } from '../LayerSidebar'
import { LocationBanner } from '../LocationBanner'
import { mapSearchSchema } from '../mapSearch'

export const Route = createFileRoute('/maplibre')({
  validateSearch: mapSearchSchema,
  component: RawMaplibreDemo,
})

function RawMaplibreDemo() {
  const search = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const { persistView, toggleOpen, toggleSelect } = useDemoSearch(search, (next) =>
    navigate({ search: next, replace: true }),
  )
  const { open, selected } = search

  const container = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<maplibregl.Map | null>(null)
  // Sources and layers can only be added once the style has loaded; listing layers
  // for the viewport does not have to wait for that.
  const [styleReady, setStyleReady] = useState(false)
  const [layers, setLayers] = useState<EliLayer[]>([])
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const countryCodes = useCountriesInView(map)
  const coverage = useCoverage(layers)
  const loading = useTilesLoading(map, selected.length > 0)

  // Create the raw maplibre-gl map once, with empty sources for the coverage borders.
  useEffect(() => {
    if (!container.current) return
    const instance = new maplibregl.Map({
      container: container.current,
      style: BASE_STYLE,
      center: [search.lng, search.lat],
      zoom: search.zoom,
    })
    instance.on('load', () => {
      for (const id of [COVERAGE_SOURCE, HIGHLIGHT_SOURCE, BBOX_SOURCE]) {
        instance.addSource(id, { type: 'geojson', data: EMPTY_FC })
      }
      for (const spec of coverageLayers([], [], null)) instance.addLayer(spec)
      setStyleReady(true)
    })
    setMap(instance)
    instance.on('moveend', () => persistView(instance))
    instance.on('mousemove', FIRST_COVERAGE_LAYER, (e) => {
      const id = e.features?.[0]?.properties?.id
      setHoveredId(id != null ? String(id) : null)
    })
    instance.on('mouseleave', FIRST_COVERAGE_LAYER, () => setHoveredId(null))
    return () => {
      setMap(null)
      setStyleReady(false)
      instance.remove()
    }
    // Run once on mount; search is only used for the initial view.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // List the layers for the viewport — the raw-JS counterpart of useEditorLayerIndex().
  const countryKey = countryCodes.join(',')
  useEffect(() => {
    if (!map) return
    let latest = 0
    const refresh = () => {
      const run = ++latest
      const filter = countryCodes.length > 0 ? { countryCodes } : undefined
      void loadLayersInViewport(map.getBounds(), filter).then((result) => {
        if (run === latest) setLayers(result)
      })
    }
    refresh()
    map.on('moveend', refresh)
    return () => {
      latest = -1
      map.off('moveend', refresh)
    }
    // `countryKey` stands in for the code list's content.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, countryKey])

  // Coverage borders: push data and filters into the layers added on load.
  useEffect(() => {
    if (!map || !styleReady) return
    const setData = (id: string, data: FeatureCollection) =>
      map.getSource<GeoJSONSource>(id)?.setData(data)
    setData(COVERAGE_SOURCE, coverage ?? EMPTY_FC)
    setData(HIGHLIGHT_SOURCE, highlightData(coverage, hoveredId))
    setData(BBOX_SOURCE, bboxData(hoveredId))
    for (const spec of coverageLayers(open, selected, hoveredId)) {
      if ('filter' in spec) map.setFilter(spec.id, spec.filter)
    }
  }, [map, styleReady, coverage, hoveredId, open, selected])

  // Imagery: addEditorLayer() adds a raster source + layer, below the borders.
  const selectedKey = selected.join(',')
  useEffect(() => {
    if (!map || !styleReady) return
    let cancelled = false
    void Promise.all(selected.map((id) => getLayerHydrated(id))).then((results) => {
      if (cancelled) return
      for (const layer of results) {
        if (!layer) continue
        addEditorLayer(map, layer, {
          beforeId: FIRST_COVERAGE_LAYER,
          paint: { 'raster-opacity': 0.9 },
        })
      }
    })
    return () => {
      cancelled = true
      for (const id of selected) removeEditorLayer(map, `eli-${id}`)
    }
    // `selectedKey` stands in for the id list's content.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, styleReady, selectedKey])

  return (
    <>
      <LocationBanner codes={countryCodes} />
      <LayerSidebar
        intro={
          <>
            Raw <code>maplibre-gl</code>: <code>loadLayersInViewport()</code> lists the layers,{' '}
            <code>addEditorLayer()</code> puts one on the map.
          </>
        }
        layers={layers}
        open={open}
        selected={selected}
        hoveredId={hoveredId}
        onToggleOpen={toggleOpen}
        onToggleSelect={toggleSelect}
        onHover={setHoveredId}
      />
      <div className="map">
        <div ref={container} style={{ width: '100%', height: '100%' }} />
        <EdgeIndicator map={map} area={hoveredArea(coverage, hoveredId)} />
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
