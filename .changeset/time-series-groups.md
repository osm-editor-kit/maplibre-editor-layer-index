---
'@osm-editor-kit/maplibre-editor-layer-index': minor
---

Group imagery that only differs by capture date. Layers of one time series (e.g. the eleven
`Berlin/Geoportal DOP20RGB` years) now carry a `group` with a shared id, the series name, a date
label (`2025`, `Mar 2026`, `2025 Sommer`) and a sort order. The new `groupLayers()` helper turns a
layer list into entries with date variants, so a UI can list a series once and offer its dates as a
one-click picker.
