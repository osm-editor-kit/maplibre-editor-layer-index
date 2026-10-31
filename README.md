# @osm-editor-kit/maplibre-editor-layer-index

Use the OSM [Editor Layer Index](https://github.com/osmlab/editor-layer-index) (ELI) as background /
imagery layers in **[react-map-gl](https://visgl.github.io/react-map-gl/)** (primary) and
**[maplibre-gl-js](https://maplibre.org/)** (raw JS). The package gives you the **layer list** and
**viewport filtering**; you keep full control of styling.

> [!NOTE]
> Claude Opus 5.5 wrote and reviewed the code of this package. [@tordans](https://github.com/tordans) specified what it should do and tested and verified its user-facing behavior.

## Develop

The package is on [npm](https://npmx.dev/package/@osm-editor-kit/maplibre-editor-layer-index). Its
[live preview](https://osm-editor-kit.github.io/maplibre-editor-layer-index/) is redeployed on every
push to `main`; the header shows the package version and build time.

This is a Bun-workspaces monorepo:

| Path                                                                           | What                                                                                                                 |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| [`packages/maplibre-editor-layer-index`](packages/maplibre-editor-layer-index) | The published package (ESM-only) — see [npmx](https://npmx.dev/package/@osm-editor-kit/maplibre-editor-layer-index). |
| [`apps/preview`](apps/preview)                                                 | A TanStack Router + Vite SPA demo showcasing both react-map-gl and raw maplibre usage.                               |

```bash
bun install
bun run eli:build      # fetch + validate + transform ELI → packages/maplibre-editor-layer-index/src/data
bun run build          # build the package (tsup, ESM + d.ts)
bun run test-run       # vitest
bun run check-exports  # attw; ignores three CJS/resolution rules that don't apply to an ESM-only package
bun run check          # what CI runs: lint, format, build, types, size budget, tests and exports
bun run dev            # preview app
```

## Release

Versions and changelogs use [changesets](https://github.com/changesets/changesets), see
[`.changeset/README.md`](.changeset/README.md). The workflow
[`.github/workflows/release.yml`](.github/workflows/release.yml) runs the releases, without a
release PR:

- **Weekly cron** refreshes the ELI data. When layers or the upstream commit changed, it writes a
  changeset that lists the added, updated and removed layers, then versions, commits and publishes.
- **Push to `main`** with a `.changeset/*.md` versions and publishes it.
- **Manual**: Actions → Release → Run workflow, with an optional ELI refresh and a forced patch,
  minor or major bump.

Publishing uses npm trusted publishing (OIDC), so no `NPM_TOKEN` is stored. Every push to `main`
also builds `apps/preview` and deploys it to GitHub Pages.

**One-time Pages setup** (repo Settings → Pages): set Source to **GitHub Actions**.

## License

[MIT](LICENSE). ELI imagery metadata is © its respective providers; see each layer's
`attributionHtml` and `licenseUrl`.
