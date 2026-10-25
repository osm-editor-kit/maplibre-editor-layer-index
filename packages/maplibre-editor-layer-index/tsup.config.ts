import { readFile } from 'node:fs/promises'
import { defineConfig, type Options } from 'tsup'

type Plugin = NonNullable<Options['esbuildPlugins']>[number]

/**
 * Emit JSON data as a compact `JSON.parse('…')` string instead of esbuild's
 * pretty-printed object literal: about half the bytes, and engines parse JSON
 * much faster than the equivalent JS literal for multi-megabyte shards.
 */
const compactJson: Plugin = {
  name: 'compact-json',
  setup(build) {
    build.onLoad({ filter: /\.json$/ }, async ({ path }) => {
      const compact = JSON.stringify(JSON.parse(await readFile(path, 'utf8')))
      return { contents: `export default JSON.parse(${JSON.stringify(compact)})`, loader: 'js' }
    })
  },
}

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'react/index': 'src/react/index.ts',
    'maplibre/index': 'src/maplibre/index.ts',
    'oam/index': 'src/oam/index.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  treeshake: true,
  splitting: true,
  // No source maps in the published tarball — this is a data package, and maps for
  // continent geometry shards would dwarf the code.
  sourcemap: false,
  // Keep consumer-provided libs out of the bundle. The slim locator is bundled into
  // the entry chunks; details/<continent>.json and geometries/<continent>.json are
  // reached via dynamic import() so bundlers code-split and load by map region.
  external: ['react', 'react-map-gl', 'maplibre-gl'],
  esbuildPlugins: [compactJson],
})
