---
'@osm-editor-kit/maplibre-editor-layer-index': patch
---

Remove `sourceUrl` from the layer details again (added in 0.3.0). Apps using the package have no need for a link to the ELI source file, so it no longer ships in the data. Only the preview app keeps those links, in a file of its own.
