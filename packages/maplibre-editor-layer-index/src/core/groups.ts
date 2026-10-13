import type { EliLayer } from './types'

type Groupable = Pick<EliLayer, 'id' | 'name' | 'best' | 'group'>

/** One row of a layer list: a standalone layer, or a time series with its dates. */
export type EliLayerEntry<T extends Groupable = EliLayer> = {
  /** Group id for a series, layer id for a standalone layer. */
  id: string
  /** Series name without the date part, or the layer name. */
  name: string
  /** True when the variants are dates of one series (label them with `group.label`). */
  grouped: boolean
  /** Newest first. Exactly one for a standalone layer. */
  variants: T[]
  /** What to show when the entry is picked without a date: ELI's `best`, else the newest. */
  defaultVariant: T
}

/**
 * Collapse time series into one entry each, so a list shows "Berlin/Geoportal
 * DOP20RGB" once with its years as variants. Only the layers passed in become
 * variants — filter by viewport first and a series offers just the dates that
 * cover it. Entries keep the input order (a series sits where its first member was).
 *
 * Needs hydrated layers: `group` lives in the lazy detail shards.
 */
export function groupLayers<T extends Groupable>(layers: T[]): EliLayerEntry<T>[] {
  const entries: EliLayerEntry<T>[] = []
  const byGroup = new Map<string, EliLayerEntry<T>>()
  for (const layer of layers) {
    const { group } = layer
    if (!group) {
      entries.push({
        id: layer.id,
        name: layer.name,
        grouped: false,
        variants: [layer],
        defaultVariant: layer,
      })
      continue
    }
    const entry = byGroup.get(group.id)
    if (entry) {
      entry.variants.push(layer)
      continue
    }
    const created: EliLayerEntry<T> = {
      id: group.id,
      name: group.name,
      grouped: true,
      variants: [layer],
      defaultVariant: layer,
    }
    byGroup.set(group.id, created)
    entries.push(created)
  }
  for (const entry of byGroup.values()) {
    entry.variants.sort((a, b) => b.group!.order - a.group!.order)
    entry.defaultVariant = entry.variants.find((v) => v.best) ?? entry.variants[0]!
  }
  return entries
}
