# @osm-editor-kit/maplibre-editor-layer-index

Use the OSM [Editor Layer Index](https://github.com/osmlab/editor-layer-index) (ELI) as background /
imagery layers in **[react-map-gl](https://visgl.github.io/react-map-gl/)** (primary) and
**[maplibre-gl-js](https://maplibre.org/)** (raw JS). The package gives you the **layer list** and
**viewport filtering**; you keep full control of styling.

Part of the [`osm-editor-kit`](https://github.com/osm-editor-kit) GitHub org (same family as
[Street Space Editor](https://github.com/osmberlin/street-space-editor)).

**Package:** [`@osm-editor-kit/maplibre-editor-layer-index`](https://npmx.dev/package/@osm-editor-kit/maplibre-editor-layer-index)
· **Live preview:** [osm-editor-kit.github.io/maplibre-editor-layer-index](https://osm-editor-kit.github.io/maplibre-editor-layer-index/)
(redeployed on every release; header shows package version + build time).

This is a Bun-workspaces monorepo:

| Path                                                                           | What                                                                                                                 |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| [`packages/maplibre-editor-layer-index`](packages/maplibre-editor-layer-index) | The published package (ESM-only) — see [npmx](https://npmx.dev/package/@osm-editor-kit/maplibre-editor-layer-index). |
| [`apps/preview`](apps/preview)                                                 | A TanStack Router + Vite SPA demo showcasing both react-map-gl and raw maplibre usage.                               |

## Why it's small (at runtime)

Data is generated at release time into three tiers:

- **`locator.json` (~550 KB shipped, ~75 KB gzipped)** — always loaded. Filter fields only (`bboxes`, `countryCodes`,
  `continents`, zooms, …). No tile URLs, attribution, or polygon coordinates. Enough for
  sync `layersInViewport()`.
- **`details/<continent>.json`** — lazy. Tile URLs, `urlTemplate`, attribution, icons. Loaded for
  the continents of the layers in view.
- **`geometries/<continent>.json`** — lazy. Deduplicated coverage polygons. Only loaded when you
  draw coverage outlines.

The npm package still ships **all** shards (install size is not per-region). Source maps are not
published. JSON is inlined into ESM chunks by the build — not duplicated under `dist/data/`.

Filtering is pure-arithmetic **box overlap** — zero runtime geo dependencies. Each layer has one
coverage box, or one per area when its parts lie far apart or on both sides of the antimeridian
(Alaska, France with its overseas regions, New Zealand), so no box spans the globe by accident.
World copies and views across ±180° work too.
`@rapideditor/country-coder` and `zod` are **build time only**.

## Other consumers (iD / Rapid / Leaflet)

ELI has no npm release, so editors like [iD](https://github.com/openstreetmap/iD) vendor it as a
pinned `gh-pages` commit. This package is still the MapLibre-branded npm release, but non-MapLibre
renderers use the **root entry** (`@osm-editor-kit/maplibre-editor-layer-index`, not `/maplibre` or
`/react`) and
each layer's raw **`urlTemplate`** (not MapLibre `tiles`) after hydrating details. See
[docs/iD-integration.md](docs/iD-integration.md) for the iD adapter sketch.

## Develop

```bash
bun install
bun run eli:build      # fetch + validate + transform ELI → packages/maplibre-editor-layer-index/src/data
bun run build          # build the package (tsup, ESM + d.ts)
bun run test           # vitest
bun run check-exports  # attw; ignores three CJS/resolution rules that don't apply to an ESM-only package
bun run dev            # preview app
```

## Release

Versioning via [changesets](https://github.com/changesets/changesets). One GitHub Actions workflow
(`.github/workflows/release.yml`) handles everything — no release PR:

- **Weekly cron** — refreshes ELI data; when layers (or upstream commit) changed, writes a
  changeset that lists added/updated/removed layers with links to ELI commits/PRs/source files,
  then patch-bumps, commits, and publishes
- **Push to `main`** — if your merge includes a `.changeset/*.md`, versions and publishes directly
- **Manual** — Actions → Release → Run workflow (optional ELI refresh + forced patch/minor/major bump)

Publishes via npm **trusted publishing** (OIDC) from `release.yml` — no long-lived `NPM_TOKEN`.
After a successful publish, the same workflow builds `apps/preview` and deploys it to
**GitHub Pages** as a secondary job (`deploy-preview`).

See [`.github/workflows`](.github/workflows).

**One-time Pages setup** (repo Settings → Pages): set Source to **GitHub Actions**. The first
successful release after that publishes the preview site.
