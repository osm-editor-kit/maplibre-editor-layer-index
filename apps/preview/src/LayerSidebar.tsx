import {
  getLayer,
  groupLayers,
  type EliCategory,
  type EliLayer,
} from '@osm-editor-kit/maplibre-editor-layer-index'
import type { ReactNode } from 'react'
import { layerScope, type ListStatus } from './demo'
import { CATEGORY_GROUPS, groupOf } from './mapSearch'

const BEST_TITLE = 'Best imagery for this area (ELI “best”)'

/** Tooltip for ELI's historic categories; `undefined` for current imagery and maps. */
function historicLabel(category: EliCategory | undefined): string | undefined {
  if (category === 'historicphoto') return 'Historic imagery'
  if (category === 'historicmap') return 'Historic map'
  return undefined
}

/** Star marking ELI's `best` layer; the tooltip says what it means. */
function BestMark({ className }: { className: string }) {
  return (
    <span className={className} role="img" title={BEST_TITLE} aria-label={BEST_TITLE}>
      ★
    </span>
  )
}

/** Clock glyph for historic imagery and maps; renders nothing for other categories. */
function HistoricMark({
  category,
  className,
}: {
  category: EliCategory | undefined
  className: string
}) {
  const label = historicLabel(category)
  if (!label) return null
  return (
    <span className={className} role="img" title={label} aria-label={label}>
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="6" />
        <path d="M8 4.5V8l2.5 2" />
      </svg>
    </span>
  )
}

type Props = {
  /** One line on how this demo talks to the map. */
  intro: ReactNode
  layers: EliLayer[]
  status: ListStatus
  open: EliCategory[]
  selected: string[]
  hoveredId: string | null
  onToggleOpen: (category: EliCategory) => void
  /** Toggle a layer; `siblingIds` are the dates of its time series (itself included). */
  onToggleSelect: (id: string, siblingIds: string[]) => void
  onHover: (id: string | null) => void
}

/** The layer list both demos share: categories → layers, time series as date chips. */
export function LayerSidebar({
  intro,
  layers,
  status,
  open,
  selected,
  hoveredId,
  onToggleOpen,
  onToggleSelect,
  onHover,
}: Props) {
  // One row per time series, filed under the category of its newest date.
  const entries = groupLayers(layers)
  const groups = CATEGORY_GROUPS.map((g) => ({
    ...g,
    items: entries.filter((e) => groupOf(e.variants[0]!.category) === g.key),
  })).filter((g) => g.items.length > 0)

  return (
    <aside className="sidebar">
      <p className="meta">{intro}</p>
      <ol className="howto">
        <li>
          {status === 'loading' && layers.length === 0 ? (
            <strong>Loading layers…</strong>
          ) : (
            <>
              <strong>{layers.length} layers</strong> cover the countries in this view.
            </>
          )}{' '}
          Move the map and the list follows.
        </li>
        <li>
          <strong>Open a category</strong> to draw where each of its layers has imagery (blue
          borders, shaded on the inside).
        </li>
        <li>
          <strong>Hover</strong> a layer to highlight its area in orange, <strong>click</strong> it
          to load its imagery. Layers that only differ by date share one row — pick the date below
          it. While imagery is on the map, only its outline is drawn (red line), so you can check
          its seams.
        </li>
      </ol>
      {status === 'error' && (
        <p className="notice error" role="alert">
          Layer details could not be loaded. Move the map to try again.
        </p>
      )}
      {selected.length > 0 && (
        // Always reachable, also when the map has moved away from a layer's coverage
        // and its row is no longer in the list below.
        <div className="active-layers">
          <span className="active-title">On the map</span>
          {selected.map((id) => (
            <button
              key={id}
              type="button"
              className="active-layer"
              title="Remove from the map"
              onMouseEnter={() => onHover(id)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onToggleSelect(id, [id])}
            >
              <span className="name">{getLayer(id)?.name ?? id}</span>
              <span aria-hidden="true">×</span>
            </button>
          ))}
        </div>
      )}
      {groups.map((group) => {
        const isOpen = open.includes(group.key)
        const activeCount = group.items.filter((e) =>
          e.variants.some((v) => selected.includes(v.id)),
        ).length
        return (
          <div className="group" key={group.key}>
            <button
              className={`group-header${isOpen ? ' open' : ''}`}
              onClick={() => onToggleOpen(group.key)}
            >
              <span className="caret">{isOpen ? '▾' : '▸'}</span>
              <span className="group-title">{group.label}</span>
              {activeCount > 0 && (
                <span className="group-count active" title={`${activeCount} active`}>
                  {activeCount}
                </span>
              )}
              <span className="group-count" title={`${group.items.length} in this view`}>
                {group.items.length}
              </span>
            </button>
            {isOpen && (
              <div className="group-items">
                {group.items.map((entry) => {
                  const variantIds = entry.variants.map((v) => v.id)
                  const active = entry.variants.find((v) => selected.includes(v.id))
                  const layer = active ?? entry.defaultVariant
                  const hovered = hoveredId !== null && variantIds.includes(hoveredId)
                  const scope = layerScope(layer)
                  return (
                    <div
                      key={entry.id}
                      className={`entry${active ? ' selected' : ''}${hovered ? ' hovered' : ''}`}
                    >
                      <button
                        type="button"
                        className="layer"
                        aria-pressed={Boolean(active)}
                        onMouseEnter={() => onHover(layer.id)}
                        onMouseLeave={() => onHover(null)}
                        onFocus={() => onHover(layer.id)}
                        onBlur={() => onHover(null)}
                        onClick={() => onToggleSelect(layer.id, variantIds)}
                      >
                        <span className="name" title={layer.name}>
                          {entry.name}
                        </span>
                        {scope && <span className={`badge scope ${scope}`}>{scope}</span>}
                        {!entry.grouped && layer.best && <BestMark className="badge best" />}
                        <HistoricMark category={layer.category} className="badge historic" />
                        <span className="badge type">{layer.type}</span>
                      </button>
                      {entry.grouped && (
                        <div className="variants" role="group" aria-label={`${entry.name} dates`}>
                          {entry.variants.map((variant) => (
                            <button
                              key={variant.id}
                              type="button"
                              className={`variant${variant === active ? ' active' : ''}`}
                              aria-pressed={variant === active}
                              title={variant.name}
                              onMouseEnter={() => onHover(variant.id)}
                              onMouseLeave={() => onHover(null)}
                              onClick={() => onToggleSelect(variant.id, variantIds)}
                            >
                              {variant.group!.label}
                              <HistoricMark category={variant.category} className="historic" />
                              {variant.best && <BestMark className="best" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </aside>
  )
}
