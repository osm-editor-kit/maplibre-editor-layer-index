#!/usr/bin/env bun
/**
 * Ask HOT's OpenAerialMap API once, the way a browser on another site would, and
 * report what `/oam` needs: the CORS header of the search and of a tile, how many
 * items parse into layers, and the asset names seen. A person runs it; tests never
 * call the network.
 *
 *   bun run oam:probe [west,south,east,north]
 *
 * Writes `.cache/oam-probe.json` (git-ignored) and prints the path.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { oamSearchUrl, toOamLayer } from '../src/oam/index'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const ORIGIN = 'https://osm-editor-kit.github.io'
// Mont Sainte-Odile, where item 1e7cb303 lies, unless a box is given
const box = (process.argv[2] ?? '7.39,48.43,7.42,48.445').split(',').map(Number) as [
  number,
  number,
  number,
  number,
]

const searchUrl = oamSearchUrl(box, { limit: 50 })
const search = await fetch(searchUrl, {
  headers: { Origin: ORIGIN, Accept: 'application/geo+json' },
})
const body = (await search.json()) as { features?: unknown[]; numberMatched?: number }
const features = body.features ?? []
const layers = features.map((f) => toOamLayer(f)).filter((l) => l !== undefined)

let tile: { url: string; status: number; cors: string | null; type: string | null } | undefined
const first = layers[0]
if (first) {
  // a tile in the middle of the first image, at its native zoom (or 18)
  const z = first.maxzoom ?? 18
  const lon = (first.bbox[0] + first.bbox[2]) / 2
  const lat = (first.bbox[1] + first.bbox[3]) / 2
  const n = 2 ** z
  const x = Math.floor(((lon + 180) / 360) * n)
  const rad = (lat * Math.PI) / 180
  const y = Math.floor(((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) * n)
  const url = first.tiles[0]!.replace('{z}', String(z))
    .replace('{x}', String(x))
    .replace('{y}', String(y))
  const response = await fetch(url, { headers: { Origin: ORIGIN } })
  tile = {
    url,
    status: response.status,
    cors: response.headers.get('access-control-allow-origin'),
    type: response.headers.get('content-type'),
  }
}

const report = {
  at: new Date().toISOString(),
  origin: ORIGIN,
  search: {
    url: searchUrl,
    status: search.status,
    cors: search.headers.get('access-control-allow-origin'),
    features: features.length,
    numberMatched: body.numberMatched ?? null,
    layers: layers.length,
    assets: [...new Set(layers.map((l) => l.oam.asset))],
  },
  tile: tile ?? null,
  first: first
    ? { id: first.id, name: first.name, date: first.startDate, maxzoom: first.maxzoom }
    : null,
}
const out = join(ROOT, '.cache', 'oam-probe.json')
await mkdir(dirname(out), { recursive: true })
await writeFile(out, `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify(report, null, 2))
console.log(`wrote ${out}`)
const ok =
  search.ok && report.search.cors !== null && (!tile || (tile.status === 200 && tile.cors !== null))
process.exit(ok ? 0 : 1)
