import { viewportBoxes, type ViewportBounds } from '../core/bounds'
import { oamStacRoot, toOamLayer, type OamUrls } from './layer'
import { OAM_COLLECTION, type OamLayer, type StacItemCollection } from './types'

type Fetch = (
  input: string,
  init?: { signal?: AbortSignal; headers?: Record<string, string> },
) => Promise<{
  ok: boolean
  status: number
  json(): Promise<unknown>
}>

export type OamRequestOptions = OamUrls & {
  /** Aborts the request, e.g. when the map moves on */
  signal?: AbortSignal
  /** Defaults to `globalThis.fetch`; inject one for tests or for an app's own fetch */
  fetch?: Fetch
}

export type OamSearchOptions = OamRequestOptions & {
  /** Most images to return, newest first. Default 50, at most 250 (HOT's page limit is not documented, so stay modest). */
  limit?: number
  /** Collections to search. Default `['openaerialmap']` */
  collections?: string[]
  /** A STAC `datetime`: one date-time or an interval like `2024-01-01T00:00:00Z/..` */
  datetime?: string
}

export type OamSearchResult = {
  /** Images that can be drawn, newest first; items without an image asset are left out */
  layers: OamLayer[]
  /**
   * How many items the API matched in all, when it says. An image across the
   * antimeridian is counted once; an image beyond the page limit on both sides can
   * still count twice.
   */
  matched?: number
}

/** The API answered with an error status; `status` is the HTTP status */
export class OamRequestError extends Error {
  readonly status: number
  constructor(status: number, url: string) {
    super(`OpenAerialMap request failed with ${status}: ${url}`)
    this.name = 'OamRequestError'
    this.status = status
  }
}

const DEFAULT_LIMIT = 50
const MAX_LIMIT = 250

function fetchOf(options: OamRequestOptions): Fetch {
  const fetch = options.fetch ?? (globalThis.fetch as unknown as Fetch | undefined)
  if (!fetch) throw new Error('No fetch available: pass options.fetch')
  return fetch
}

/** Most images per request: NaN or non-finite falls back to the default */
function clampLimit(limit: number | undefined): number {
  if (limit === undefined || !Number.isFinite(limit)) return DEFAULT_LIMIT
  return Math.min(MAX_LIMIT, Math.max(1, Math.trunc(limit)))
}

async function getJson(url: string, options: OamRequestOptions): Promise<unknown> {
  const response = await fetchOf(options)(url, {
    headers: { Accept: 'application/geo+json, application/json' },
    ...(options.signal ? { signal: options.signal } : {}),
  })
  if (!response.ok) throw new OamRequestError(response.status, url)
  return response.json()
}

/** Rounds to 6 decimals (about 0.1 m), so the URL stays short and cacheable */
function coordinate(value: number): string {
  return String(Math.round(value * 1e6) / 1e6)
}

/** The search URL for one box within ±180° */
export function oamSearchUrl(
  bbox: [number, number, number, number],
  options: OamSearchOptions = {},
): string {
  const params = new URLSearchParams()
  params.set('collections', (options.collections ?? [OAM_COLLECTION]).join(','))
  params.set('bbox', bbox.map(coordinate).join(','))
  params.set('limit', String(clampLimit(options.limit)))
  params.set('sortby', '-properties.datetime')
  if (options.datetime) params.set('datetime', options.datetime)
  return `${oamStacRoot(options)}/search?${params.toString()}`
}

function sortKey(layer: OamLayer): string {
  return layer.oam.datetime ?? ''
}

/**
 * The OpenAerialMap images in a view, newest first, live from HOT's STAC API.
 * Nothing is bundled: each call is one request (two when the view crosses the
 * antimeridian). The tiles of a chosen image come from HOT's TiTiler.
 *
 * ```ts
 * const { layers } = await searchOam(map.getBounds(), { signal })
 * ```
 */
export async function searchOam(
  bounds: ViewportBounds,
  options: OamSearchOptions = {},
): Promise<OamSearchResult> {
  const boxes = viewportBoxes(bounds)
  const pages = await Promise.all(
    boxes.map(
      async (box) => (await getJson(oamSearchUrl(box, options), options)) as StacItemCollection,
    ),
  )
  const byId = new Map<string, OamLayer>()
  let matched: number | undefined = 0
  for (const page of pages) {
    const count = page.numberMatched ?? page.context?.matched
    matched = matched === undefined || count === undefined ? undefined : matched + count
    for (const feature of Array.isArray(page.features) ? page.features : []) {
      const layer = toOamLayer(feature, options)
      if (!layer) continue
      if (byId.has(layer.id)) {
        // the same image on both sides of the antimeridian was counted twice
        if (matched !== undefined) matched -= 1
        continue
      }
      byId.set(layer.id, layer)
    }
  }
  const layers = [...byId.values()]
    .sort((a, b) => sortKey(b).localeCompare(sortKey(a)))
    .slice(0, clampLimit(options.limit))
  return matched === undefined ? { layers } : { layers, matched }
}

/**
 * One image by its STAC item id, for a shared link. `undefined` when the API does
 * not know it or it cannot be drawn.
 */
export async function getOamItem(
  itemId: string,
  options: OamRequestOptions & { collection?: string } = {},
): Promise<OamLayer | undefined> {
  const collection = options.collection ?? OAM_COLLECTION
  const url = `${oamStacRoot(options)}/collections/${encodeURIComponent(collection)}/items/${encodeURIComponent(itemId)}`
  try {
    return toOamLayer(await getJson(url, options), options)
  } catch (error) {
    if (error instanceof OamRequestError && error.status === 404) return undefined
    throw error
  }
}
