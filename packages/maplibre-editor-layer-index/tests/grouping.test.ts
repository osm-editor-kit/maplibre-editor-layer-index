import { describe, expect, it } from 'vitest'
import { assignGroups, parseLayerName } from '../scripts/grouping'
import { groupLayers } from '../src/core/groups'
import type { BBox, EliLayer } from '../src/core/types'

const BERLIN: BBox = [13.0, 52.3, 13.8, 52.7]
/** A small far-off piece, like a remote island that only one year of the series covers. */
const FAR_OFF: BBox = [-150, 61, -149.5, 61.5]

function layer(id: string, name: string, extra: Partial<EliLayer> = {}): EliLayer {
  return {
    id,
    name,
    type: 'wms',
    category: 'photo',
    best: false,
    overlay: false,
    tileSize: 256,
    geometryId: id,
    bboxes: [BERLIN],
    countryCodes: ['DE'],
    requiresKeys: [],
    continents: ['europe'],
    tiles: [],
    urlTemplate: '',
    ...extra,
  }
}

function grouped(layers: EliLayer[]): EliLayer[] {
  assignGroups(layers)
  return layers
}

describe('parseLayerName', () => {
  it.each([
    ['Berlin/Geoportal DOP20RGB (2025) Sommer', 'Berlin/Geoportal DOP20RGB', '2025 Sommer'],
    ['ACTmapi Imagery Mar 2026', 'ACTmapi Imagery', 'Mar 2026'],
    ['Kanton Aargau 25cm (AGIS 2014)', 'Kanton Aargau 25cm (AGIS)', '2014'],
    ['Nancy - Orthophoto - 1994', 'Nancy - Orthophoto', '1994'],
    ['Orthophoto (2010-2011), 1:5000, Latvia', 'Orthophoto, 1:5000, Latvia', '2010-2011'],
    [
      'Kanton Zurich, Orthofoto ZH Frühjahr 2015/16 RGB 10cm',
      'Kanton Zurich, Orthofoto ZH RGB 10cm',
      'Frühjahr 2015/16',
    ],
    ['Rhode Island Aerial Photo (Fall 2021)', 'Rhode Island Aerial Photo', 'Fall 2021'],
  ])('%s', (name, series, label) => {
    expect(parseLayerName(name)).toMatchObject({ name: series, label })
  })

  it('ignores names without a year, and numbers that are not years', () => {
    expect(parseLayerName('Waymarked Trails: Winter Sports')).toBeUndefined()
    expect(parseLayerName('Berlin/Geoportal DOP20RGB')).toBeUndefined()
    expect(parseLayerName('Topo 1:2000')).toBeUndefined()
  })
})

describe('assignGroups', () => {
  it('groups a series across photo/historicphoto and orders it by date', () => {
    const layers = grouped([
      layer('b-2025s', 'Berlin DOP (2025) Sommer'),
      layer('b-2026', 'Berlin DOP (2026)', { best: true }),
      layer('b-2017', 'Berlin DOP (2017)', { category: 'historicphoto' }),
      layer('b-2025', 'Berlin DOP (2025)'),
      layer('other', 'Berlin ALKIS'),
    ])
    const byId = Object.fromEntries(layers.map((l) => [l.id, l.group]))
    expect(byId.other).toBeUndefined()
    expect(byId['b-2017']).toEqual({
      id: 'berlin-dop',
      name: 'Berlin DOP',
      label: '2017',
      order: 0,
    })
    expect(byId['b-2025']).toMatchObject({ label: '2025', order: 1 })
    expect(byId['b-2025s']).toMatchObject({ label: '2025 Sommer', order: 2 })
    expect(byId['b-2026']).toMatchObject({ label: '2026', order: 3 })
  })

  it('orders a winter flight before spring of the same year', () => {
    const layers = grouped([
      layer('s', 'County Orthoimagery (Spring 2024)'),
      layer('w', 'County Orthoimagery (Winter 2024)'),
    ])
    expect(layers.map((l) => l.group?.order)).toEqual([1, 0])
  })

  it('tolerates small coverage differences but keeps different areas apart', () => {
    const layers = grouped([
      layer('a', 'DOP 2019'),
      layer('b', 'DOP 2020', { bboxes: [[13.0, 52.3, 13.85, 52.7]] }),
      layer('c', 'DOP 2021', { bboxes: [[14.0, 52.3, 14.8, 52.7]] }),
      layer('d', 'DOP 2022', { bboxes: [[14.0, 52.3, 14.8, 52.7]] }),
    ])
    const ids = layers.map((l) => l.group?.id)
    expect(ids[0]).toBe(ids[1])
    expect(ids[2]).toBe(ids[3])
    expect(ids[0]).not.toBe(ids[2])
    // Same series name twice → ids disambiguated by the oldest member.
    expect(ids[0]).toBe('dop--a')
    expect(ids[2]).toBe('dop--c')
  })

  it('groups a series when one member has an extra far-off box', () => {
    const layers = grouped([
      layer('a', 'DOP 2019'),
      layer('b', 'DOP 2020', { bboxes: [BERLIN, FAR_OFF] }),
    ])
    expect(layers.map((l) => l.group?.id)).toEqual(['dop', 'dop'])
  })

  it('keeps same-named layers apart when their main areas differ', () => {
    const layers = grouped([
      layer('a', 'DOP 2019'),
      layer('b', 'DOP 2020', { bboxes: [[14.0, 52.3, 14.8, 52.7]] }),
    ])
    expect(layers.every((l) => l.group === undefined)).toBe(true)
  })

  it('does not group overlays with base layers, or members a date cannot tell apart', () => {
    const layers = grouped([
      layer('a', 'Roads 2020', { overlay: true }),
      layer('b', 'Roads 2021'),
      layer('c', 'Ortho 2020', { type: 'tms' }),
      layer('d', 'Ortho 2020'),
    ])
    expect(layers.every((l) => l.group === undefined)).toBe(true)
  })
})

describe('groupLayers', () => {
  it('collapses a series into one entry, newest first, defaulting to best', () => {
    const layers = grouped([
      layer('x', 'Standalone'),
      layer('b-2024', 'Berlin DOP (2024)', { best: true }),
      layer('b-2026', 'Berlin DOP (2026)'),
      layer('b-2025', 'Berlin DOP (2025)'),
    ])
    const entries = groupLayers(layers)
    expect(entries.map((e) => [e.id, e.grouped])).toEqual([
      ['x', false],
      ['berlin-dop', true],
    ])
    expect(entries[1]!.name).toBe('Berlin DOP')
    expect(entries[1]!.variants.map((v) => v.id)).toEqual(['b-2026', 'b-2025', 'b-2024'])
    expect(entries[1]!.defaultVariant.id).toBe('b-2024')
  })

  it('defaults to the newest variant when none is marked best', () => {
    const layers = grouped([layer('a', 'DOP 2019'), layer('b', 'DOP 2020')])
    expect(groupLayers(layers)[0]!.defaultVariant.id).toBe('b')
  })
})
