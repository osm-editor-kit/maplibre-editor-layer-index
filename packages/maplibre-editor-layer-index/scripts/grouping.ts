import type { BBox, EliCategory, EliLayer } from '../src/core/types'

/**
 * Time-series grouping: layers that show the same area and differ only by capture
 * date ("Berlin/Geoportal DOP20RGB (2024)", "… (2025)", "… (2025) Sommer") are
 * tagged with a shared {@link EliLayer.group} so UIs can list the series once and
 * offer the dates as a picker.
 *
 * ELI has no such field, so membership is derived:
 *   1. the name minus its date part must be equal,
 *   2. the coverage must be near-identical (bbox overlap, see {@link MIN_BBOX_IOU}),
 *   3. the remaining date parts must tell the members apart.
 */

/** Minimum bbox intersection-over-union for two layers to count as "the same area". */
export const MIN_BBOX_IOU = 0.8

const MONTHS: Record<string, number> = {
  jan: 1,
  feb: 2,
  mar: 3,
  apr: 4,
  may: 5,
  jun: 6,
  jul: 7,
  aug: 8,
  sep: 9,
  oct: 10,
  nov: 11,
  dec: 12,
}

/** Season → month used for ordering only. A winter flight opens the year it is named after. */
const SEASONS: Record<string, number> = {
  winter: 1,
  spring: 4,
  frühjahr: 4,
  frühling: 4,
  summer: 7,
  sommer: 7,
  autumn: 10,
  fall: 10,
  herbst: 10,
}

const MONTH_PATTERN =
  'jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?'
const SEASON_PATTERN = Object.keys(SEASONS).join('|')
// A year, optionally continued as a range or partial date: 2014/15, 2012-2014, 2022-03.
const YEAR_PATTERN = '(?:1[89]|20)\\d{2}(?:\\s?[-–/.]\\s?\\d{1,4})*'

const NOT_INSIDE_WORD_BEFORE = '(?<![\\p{L}\\p{N}:])'
const NOT_INSIDE_WORD_AFTER = '(?![\\p{L}\\p{N}])'
const TOKEN_REGEX = new RegExp(
  `${NOT_INSIDE_WORD_BEFORE}(?:(?<year>${YEAR_PATTERN})|(?<word>${MONTH_PATTERN}|${SEASON_PATTERN})\\.?)${NOT_INSIDE_WORD_AFTER}`,
  'giu',
)

export type ParsedName = {
  /** Name with the date part removed, e.g. `Berlin/Geoportal DOP20RGB`. */
  name: string
  /** The removed date part, e.g. `2025 Sommer`. */
  label: string
  /** Sortable `[year, month]` read from the label (month 0 when the label has none). */
  sort: [number, number]
}

/** Tidy up what is left of a name once the date tokens are cut out. */
function cleanName(name: string): string {
  return name
    .replace(/\(\s*\)|\[\s*\]/g, ' ')
    .replace(/\(\s*[,;:–-]?\s*/g, '(')
    .replace(/\s*[,;:–-]?\s*\)/g, ')')
    .replace(/\s+/g, ' ')
    .replace(/(\s[–-])+(?=\s[–-]\s)/g, '')
    .replace(/\s+,/g, ',')
    .replace(/,(\s*,)+/g, ',')
    .replace(/^[\s,;:–\-/]+|[\s,;:–\-/]+$/g, '')
}

/**
 * Split a layer name into its series name and date label. Returns `undefined`
 * when the name carries no year — months and seasons alone are too ambiguous
 * ("May", "Fall") to treat as a date.
 */
export function parseLayerName(name: string): ParsedName | undefined {
  const tokens: string[] = []
  let year: number | undefined
  let month = 0
  const rest = name.replace(TOKEN_REGEX, (match, ...args) => {
    const groups = args.at(-1) as { year?: string; word?: string }
    if (groups.year) {
      year ??= Number(groups.year.slice(0, 4))
    } else if (groups.word) {
      const word = groups.word.toLowerCase()
      month ||= SEASONS[word] ?? MONTHS[word.slice(0, 3)] ?? 0
    }
    tokens.push(match.replace(/\.$/, ''))
    return ' '
  })
  if (year === undefined) return undefined
  const cleaned = cleanName(rest)
  if (!cleaned) return undefined
  return { name: cleaned, label: tokens.join(' '), sort: [year, month] }
}

function bboxIou(a: BBox, b: BBox): number {
  const width = Math.min(a[2], b[2]) - Math.max(a[0], b[0])
  const height = Math.min(a[3], b[3]) - Math.max(a[1], b[1])
  if (width <= 0 || height <= 0) return 0
  const area = (box: BBox) => (box[2] - box[0]) * (box[3] - box[1])
  const intersection = width * height
  return intersection / (area(a) + area(b) - intersection)
}

/** Near-identical coverage: as many boxes, each overlapping its counterpart (both sorted). */
function sameBoxes(a: BBox[], b: BBox[]): boolean {
  return a.length === b.length && a.every((box, i) => bboxIou(box, b[i]!) >= MIN_BBOX_IOU)
}

/** Current and historic flavours of a category belong to the same series. */
function categoryClass(category: EliCategory | undefined): string {
  if (category === 'historicphoto') return 'photo'
  if (category === 'historicmap') return 'map'
  return category ?? 'other'
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '')
}

type Candidate = { layer: EliLayer; parsed: ParsedName }

/** Single-linkage clusters of candidates whose bboxes are near-identical. */
function clusterByArea(candidates: Candidate[]): Candidate[][] {
  const parent = candidates.map((_, i) => i)
  const find = (i: number): number => {
    while (parent[i] !== i) i = parent[i] = parent[parent[i]!]!
    return i
  }
  for (let i = 0; i < candidates.length; i++) {
    for (let j = i + 1; j < candidates.length; j++) {
      const a = candidates[i]!.layer
      const b = candidates[j]!.layer
      if (a.geometryId === b.geometryId || sameBoxes(a.bboxes, b.bboxes)) {
        parent[find(i)] = find(j)
      }
    }
  }
  const clusters = new Map<number, Candidate[]>()
  candidates.forEach((candidate, i) => {
    const root = find(i)
    const cluster = clusters.get(root)
    if (cluster) cluster.push(candidate)
    else clusters.set(root, [candidate])
  })
  return [...clusters.values()]
}

function byDate(a: Candidate, b: Candidate): number {
  return (
    a.parsed.sort[0] - b.parsed.sort[0] ||
    a.parsed.sort[1] - b.parsed.sort[1] ||
    (a.layer.startDate ?? '').localeCompare(b.layer.startDate ?? '') ||
    a.layer.id.localeCompare(b.layer.id)
  )
}

/** Tag time-series members with `layer.group` (mutates the given layers). */
export function assignGroups(layers: EliLayer[]): void {
  const buckets = new Map<string, Candidate[]>()
  for (const layer of layers) {
    const parsed = parseLayerName(layer.name)
    if (!parsed) continue
    const key = [slugify(parsed.name), layer.overlay, categoryClass(layer.category)].join('|')
    const bucket = buckets.get(key)
    if (bucket) bucket.push({ layer, parsed })
    else buckets.set(key, [{ layer, parsed }])
  }

  const series: Candidate[][] = []
  for (const bucket of buckets.values()) {
    for (const cluster of clusterByArea(bucket)) {
      if (cluster.length < 2) continue
      // Same label twice means the members differ by something other than time.
      if (new Set(cluster.map((c) => c.parsed.label)).size < cluster.length) continue
      series.push(cluster.sort(byDate))
    }
  }

  const slugCounts = new Map<string, number>()
  for (const members of series) {
    const slug = slugify(members.at(-1)!.parsed.name)
    slugCounts.set(slug, (slugCounts.get(slug) ?? 0) + 1)
  }

  for (const members of series) {
    const name = members.at(-1)!.parsed.name
    const slug = slugify(name)
    // Same series name for two different areas: the oldest member rarely changes,
    // so it keeps the id stable when newer years are added upstream.
    const id = slugCounts.get(slug)! > 1 ? `${slug}--${members[0]!.layer.id}` : slug
    members.forEach(({ layer, parsed }, order) => {
      layer.group = { id, name, label: parsed.label, order }
    })
  }
}
