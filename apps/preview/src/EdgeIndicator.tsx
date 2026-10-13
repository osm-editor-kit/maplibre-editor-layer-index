import type { Geometry } from 'geojson'
import type { Map as MaplibreMap } from 'maplibre-gl'
import { useEffect, useState } from 'react'
import { pointInGeometry } from './demo'

type Side = 'top' | 'right' | 'bottom' | 'left'
/** A stretch of one screen edge, as fractions (0–1) along that edge. */
type Run = { side: Side; from: number; to: number }

const SIDES: Side[] = ['top', 'right', 'bottom', 'left']
const SAMPLES = 40

/** Where along the map's edges the area carries on past the visible part. */
function edgeRuns(map: MaplibreMap, area: Geometry | 'world'): Run[] {
  if (area === 'world') return SIDES.map((side) => ({ side, from: 0, to: 1 }))
  const { clientWidth: width, clientHeight: height } = map.getContainer()
  const runs: Run[] = []
  for (const side of SIDES) {
    let start: number | null = null
    for (let i = 0; i <= SAMPLES; i++) {
      const t = (i + 0.5) / SAMPLES
      const x = side === 'left' ? 0 : side === 'right' ? width : t * width
      const y = side === 'top' ? 0 : side === 'bottom' ? height : t * height
      const { lng, lat } = map.unproject([x, y])
      const inside = i < SAMPLES && pointInGeometry(lng, lat, area)
      if (inside && start === null) start = i
      if (!inside && start !== null) {
        runs.push({ side, from: start / SAMPLES, to: i / SAMPLES })
        start = null
      }
    }
  }
  return runs
}

/**
 * Marks the edges of the map where the hovered layer's coverage continues beyond
 * the view — otherwise an area larger than the screen gives no hover feedback at
 * all, because its outline is nowhere in sight.
 */
export function EdgeIndicator({
  map,
  area,
}: {
  map: MaplibreMap | null
  /** Coverage of the hovered layer; `'world'` for layers without a polygon. */
  area: Geometry | 'world' | null
}) {
  const [runs, setRuns] = useState<Run[]>([])

  useEffect(() => {
    if (!map || !area) {
      setRuns([])
      return
    }
    const update = () => setRuns(edgeRuns(map, area))
    update()
    map.on('move', update)
    return () => {
      map.off('move', update)
    }
  }, [map, area])

  if (runs.length === 0) return null
  return (
    <div className="edge-indicator" aria-hidden="true">
      {runs.map((run) => {
        const horizontal = run.side === 'top' || run.side === 'bottom'
        const start = `${run.from * 100}%`
        const length = `${(run.to - run.from) * 100}%`
        return (
          <span
            key={`${run.side}-${run.from}`}
            className={`edge ${run.side}`}
            style={horizontal ? { left: start, width: length } : { top: start, height: length }}
          />
        )
      })}
      <span className="edge-note">
        {area === 'world' ? 'Covers the whole world' : 'Coverage continues beyond this view'}
      </span>
    </div>
  )
}
