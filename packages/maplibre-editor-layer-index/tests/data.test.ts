import { describe, expect, it } from 'vitest'
import {
  ensureDetailsForViewport,
  getGeometry,
  getLayer,
  getLayerHydrated,
  getLayers,
  getManifest,
  hydrateLayer,
  loadCoverageFeatures,
  loadGeometries,
} from '../src/core/data'
import { layersForCountry, layersInViewport, loadLayersInViewport } from '../src/core/filter'

// Smoke tests against the real, committed src/data/*.json.
describe('bundled data', () => {
  const layers = getLayers()

  it('exposes a non-empty locator index with the expected shape (no tile URLs)', () => {
    expect(layers.length).toBeGreaterThan(1000)
    for (const layer of layers.slice(0, 50)) {
      expect(typeof layer.id).toBe('string')
      expect(layer.bboxes.length).toBeGreaterThan(0)
      expect(Array.isArray(layer.countryCodes)).toBe(true)
      expect(Array.isArray(layer.requiresKeys)).toBe(true)
      expect(Array.isArray(layer.continents)).toBe(true)
      expect(layer.continents.length).toBeGreaterThan(0)
      expect(layer).not.toHaveProperty('tiles')
      expect(layer).not.toHaveProperty('coordinates')
    }
  })

  it('getLayer resolves locator rows by id', () => {
    const first = layers[0]!
    expect(getLayer(first.id)?.id).toBe(first.id)
    expect(getLayer('definitely-not-a-real-id')).toBeUndefined()
  })

  it('hydrates layer details on demand', async () => {
    const first = layers[0]!
    expect(hydrateLayer(first)).toBeUndefined()
    const hydrated = await getLayerHydrated(first.id)
    expect(hydrated?.tiles.length).toBeGreaterThan(0)
    expect(typeof hydrated?.urlTemplate).toBe('string')
    expect(hydrated?.urlTemplate.length).toBeGreaterThan(0)
  })

  it('manifest reports sane counts', () => {
    const manifest = getManifest()
    expect(manifest.counts.published).toBe(layers.length)
    expect(manifest.counts.geometries).toBeLessThan(manifest.counts.published)
    expect(manifest.source).toContain('imagery.geojson')
  })

  it('lazily resolves geometries for region layers and skips worldwide', async () => {
    const geometries = await loadGeometries()
    expect(Object.keys(geometries).length).toBeGreaterThan(100)

    const region = layers.find((l) => l.geometryId !== 'world')!
    expect(await getGeometry(region)).toMatchObject({ type: expect.any(String) })

    const worldwide = layers.find((l) => l.geometryId === 'world')
    if (worldwide) expect(await getGeometry(worldwide)).toBeUndefined()
  })

  it('builds coverage features with the layer id as feature id', async () => {
    const region = layers.find((l) => l.geometryId !== 'world')!
    const hydrated = await getLayerHydrated(region.id)
    expect(hydrated).toBeDefined()
    const fc = await loadCoverageFeatures([hydrated!])
    expect(fc.type).toBe('FeatureCollection')
    expect(fc.features[0]?.id).toBe(region.id)
    expect(fc.features[0]?.properties?.id).toBe(region.id)
  })

  it('loadLayersInViewport returns hydrated layers for Berlin', async () => {
    const berlinViewport = { west: 13.2, south: 52.4, east: 13.6, north: 52.6 }
    await ensureDetailsForViewport(berlinViewport)
    const inViewport = await loadLayersInViewport(berlinViewport)
    expect(inViewport.length).toBeGreaterThan(0)
    expect(inViewport.every((l) => l.tiles.length > 0)).toBe(true)
  })

  it('layersForCountry returns locator rows for DE plus worldwide', async () => {
    const de = await layersForCountry('DE')
    expect(de.length).toBeGreaterThan(0)
    expect(de.some((l) => l.countryCodes.includes('DE'))).toBe(true)
    expect(de.some((l) => l.geometryId === 'world')).toBe(true)
    expect(de.every((l) => !('tiles' in l))).toBe(true)

    const deOnly = await layersForCountry('DE', { includeWorldwide: false })
    expect(deOnly.every((l) => l.geometryId !== 'world')).toBe(true)
    expect(deOnly.length).toBeLessThan(de.length)
  })

  // The map-center continent guess says "asia" for Guam, but its layers are filed
  // under "north-america" (US) — hydration has to follow the layers, not the guess.
  it('hydrates every viewport match, also where the center guess is wrong', async () => {
    const guam = { west: 144.6, south: 13.2, east: 145.0, north: 13.7 }
    const matched = layersInViewport(guam)
    expect(matched.map((l) => l.id)).toContain('NRCS_Guam_2022')
    const hydrated = await loadLayersInViewport(guam)
    expect(hydrated.map((l) => l.id)).toEqual(matched.map((l) => l.id))
  })
})

// Antimeridian regressions against the real data (NRCS Alaska showed up in Berlin).
describe('bundled data across the antimeridian', () => {
  const layers = getLayers()
  const regional = layers.filter((layer) => layer.geometryId !== 'world')

  it('keeps every coverage box within ±180° with west ≤ east', () => {
    for (const layer of layers) {
      for (const [west, south, east, north] of layer.bboxes) {
        expect(west).toBeGreaterThanOrEqual(-180)
        expect(east).toBeLessThanOrEqual(180)
        expect(west).toBeLessThanOrEqual(east)
        expect(south).toBeLessThanOrEqual(north)
      }
    }
  })

  it('only lets coverage that really circles the globe have a box wider than 180°', () => {
    const wide = regional.filter((layer) => layer.bboxes.some(([w, , e]) => e - w > 180))
    // The USGS Antarctica maps are one ring around the pole.
    expect(wide.every((layer) => layer.countryCodes.join() === 'AQ')).toBe(true)
  })

  it('finds countries for every layer with its own coverage (no false "worldwide")', () => {
    const missing = regional.filter((layer) => layer.countryCodes.length === 0)
    expect(missing.map((layer) => layer.id)).toEqual([])
    expect(getLayer('LINZ_NZ_Topo50_Gridless_Maps')?.continents).toEqual(['oceania'])
  })

  it('shows only layers that cover Germany in a Berlin view, without a country filter', () => {
    const foreign = layersInViewport([13.0, 52.3, 13.8, 52.7])
      .filter((layer) => layer.geometryId !== 'world' && !layer.countryCodes.includes('DE'))
      .map((layer) => layer.id)
    expect(foreign).toEqual([])
  })

  it('finds NRCS Alaska on the mainland and on the western Aleutians, not in Berlin', () => {
    const inView = (bounds: [number, number, number, number]) =>
      layersInViewport(bounds).some((layer) => layer.id === 'NRCS_Alaska_2023')
    expect(inView([-150, 61, -149, 62])).toBe(true)
    expect(inView([173, 52.5, 174, 53])).toBe(true)
    expect(inView([13.0, 52.3, 13.8, 52.7])).toBe(false)
  })

  it('gives a world-copy view the same layers as the original', () => {
    const ids = (bounds: [number, number, number, number]) =>
      layersInViewport(bounds).map((layer) => layer.id)
    expect(ids([13.0 - 360, 52.3, 13.8 - 360, 52.7])).toEqual(ids([13.0, 52.3, 13.8, 52.7]))
  })

  it('files French imagery under Europe only, despite its overseas regions', () => {
    expect(getLayer('fr.ign.bdortho')?.continents).toEqual(['europe'])
  })
})
