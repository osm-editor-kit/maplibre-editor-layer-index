import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { DEFAULT_VIEW } from '../mapSearch'

export const Route = createRootRoute({
  component: RootLayout,
})

function formatBuiltAt(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
    timeZoneName: 'short',
  }).format(date)
}

function RootLayout() {
  return (
    <div className="app">
      <header className="header">
        <h1>
          <a
            className="package-link"
            href="https://npmx.dev/package/@osm-editor-kit/maplibre-editor-layer-index"
          >
            @osm-editor-kit/maplibre-editor-layer-index
          </a>
        </h1>
        <p className="build-meta" title={`Built at ${__BUILT_AT__}`}>
          <span>v{__PACKAGE_VERSION__}</span>
          <span aria-hidden="true">·</span>
          <span>updated {formatBuiltAt(__BUILT_AT__)}</span>
        </p>
        <nav>
          <Link
            to="/react-map-gl"
            // Keep position, open categories and selection when switching demos.
            search={(prev) => ({ ...DEFAULT_VIEW, ...prev })}
            activeProps={{ className: 'active' }}
            activeOptions={{ includeSearch: false }}
          >
            react-map-gl
          </Link>
          <Link
            to="/maplibre"
            search={(prev) => ({ ...DEFAULT_VIEW, ...prev })}
            activeProps={{ className: 'active' }}
            activeOptions={{ includeSearch: false }}
          >
            raw maplibre-gl
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}
