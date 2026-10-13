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
import { Map as MaplibreMap, type GeoJSONSource } from 'maplibre-gl'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  BASE_STYLE,
  BBOX_SOURCE,
  bboxData,
  COVERAGE_SOURCE,
  countriesInView,
  coverageLayers,
  EMPTY_FC,
  FIRST_COVERAGE_LAYER,
  HIGHLIGHT_SOURCE,
  highlightData,
  hoveredArea,
  useCoverage,
  useDemoSearch,
  useTilesLoading,
  type ListStatus,
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
  const [map, setMap] = useState<MaplibreMap | null>(null)
  // Sources and layers can only be added once the style has loaded; listing layers
  // for the viewport does not have to wait for that.
  const [styleReady, setStyleReady] = useState(false)
  const [layers, setLayers] = useState<EliLayer[]>([])
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const [countryCodes, setCountryCodes] = useState<string[]>([])
  const [status, setStatus] = useState<ListStatus>('loading')
  const coverage = useCoverage(layers)
  const loading = useTilesLoading(map, selected.length > 0)
  const area = useMemo(() => hoveredArea(coverage, hoveredId), [coverage, hoveredId])
  // Ids of the raster layers currently on the map (see the imagery effect).
  const shown = useRef(new Set<string>())

  // Create the raw maplibre-gl map once, with empty sources for the coverage borders.
  useEffect(() => {
    if (!container.current) return
    const shownIds = shown.current
    const instance = new MaplibreMap({
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
      shownIds.clear()
      instance.remove()
    }
    // Run once on mount; search is only used for the initial view.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // List the layers for the viewport — the raw-JS counterpart of useEditorLayerIndex().
  // The countries in view narrow the bounding-box matches down (see LocationBanner).
  useEffect(() => {
    if (!map) return
    let latest = 0
    const refresh = () => {
      const run = ++latest
      const codes = countriesInView(map)
      setCountryCodes((cur) => (cur.join() === codes.join() ? cur : codes))
      setStatus('loading')
      const filter = codes.length > 0 ? { countryCodes: codes } : undefined
      loadLayersInViewport(map.getBounds(), filter).then(
        (result) => {
          if (run !== latest) return
          setLayers(result)
          setStatus('ready')
        },
        () => {
          if (run === latest) setStatus('error')
        },
      )
    }
    refresh()
    map.on('moveend', refresh)
    map.on('resize', refresh)
    return () => {
      latest = -1
      map.off('moveend', refresh)
      map.off('resize', refresh)
    }
  }, [map])

  // Coverage borders live in sources and layers added on load. Each effect pushes
  // only what changed — re-setting the big coverage source on every hover is slow.
  useEffect(() => {
    if (!map || !styleReady) return
    map.getSource<GeoJSONSource>(COVERAGE_SOURCE)?.setData(coverage ?? EMPTY_FC)
  }, [map, styleReady, coverage])

  useEffect(() => {
    if (!map || !styleReady) return
    map.getSource<GeoJSONSource>(HIGHLIGHT_SOURCE)?.setData(highlightData(coverage, hoveredId))
    map.getSource<GeoJSONSource>(BBOX_SOURCE)?.setData(bboxData(hoveredId))
  }, [map, styleReady, coverage, hoveredId])

  useEffect(() => {
    if (!map || !styleReady) return
    for (const spec of coverageLayers(open, selected, hoveredId)) {
      if ('filter' in spec) map.setFilter(spec.id, spec.filter)
    }
  }, [map, styleReady, open, selected, hoveredId])

  // Imagery: addEditorLayer() adds a raster source + layer, below the borders.
  // Only the difference is applied, so layers that stay selected keep their tiles.
  const selectedKey = selected.join(',')
  useEffect(() => {
    if (!map || !styleReady) return
    let cancelled = false
    for (const id of shown.current) {
      if (selected.includes(id)) continue
      removeEditorLayer(map, `eli-${id}`)
      shown.current.delete(id)
    }
    for (const id of selected) {
      if (shown.current.has(id)) continue
      void getLayerHydrated(id).then((layer) => {
        if (cancelled || !layer || shown.current.has(id)) return
        addEditorLayer(map, layer, {
          beforeId: FIRST_COVERAGE_LAYER,
          paint: { 'raster-opacity': 0.9 },
        })
        shown.current.add(id)
      })
    }
    return () => {
      cancelled = true
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
        status={status}
        open={open}
        selected={selected}
        hoveredId={hoveredId}
        onToggleOpen={toggleOpen}
        onToggleSelect={toggleSelect}
        onHover={setHoveredId}
      />
      <div className="map">
        <div ref={container} style={{ width: '100%', height: '100%' }} />
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
