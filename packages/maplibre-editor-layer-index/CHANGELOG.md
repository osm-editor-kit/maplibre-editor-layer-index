# @osm-editor-kit/maplibre-editor-layer-index

## 1.0.1

### Patch Changes

- Update Editor Layer Index data ([`7deb4c0`](https://github.com/osmlab/editor-layer-index/commit/7deb4c025525bced24f9989ae0127e9f16d6b8ad) → [`a13161d`](https://github.com/osmlab/editor-layer-index/commit/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53), [compare](https://github.com/osmlab/editor-layer-index/compare/7deb4c025525bced24f9989ae0127e9f16d6b8ad...a13161d8f6dbbcb0a892ba0a83853ef9fce16b53)).

  Upstream commits:
  - [`5d97f56`](https://github.com/osmlab/editor-layer-index/commit/5d97f564a1e1334e16de8e472f801a3678973b46) update Luxembourg Geoportail latest ortho data to summer 2025, add new 2025 winter imagery source ([#3076](https://github.com/osmlab/editor-layer-index/pull/3076))
  - [`21b478f`](https://github.com/osmlab/editor-layer-index/commit/21b478f169e9e6387ed22cf64f26cefbc4707ba1) Fix the generated link to test the layers in iD ([#2985](https://github.com/osmlab/editor-layer-index/pull/2985))
  - [`a823777`](https://github.com/osmlab/editor-layer-index/commit/a823777af29c61138d0128e8db69b4c2aa250d54) More layers for Rheinland-Pfalz ([#2810](https://github.com/osmlab/editor-layer-index/pull/2810))
  - [`6339c41`](https://github.com/osmlab/editor-layer-index/commit/6339c414c2e661fefb3a16f6b133524a46f1fb2e) Bump certifi from 2026.7.22 to 2026.10.18 ([#3087](https://github.com/osmlab/editor-layer-index/pull/3087))
  - [`5768792`](https://github.com/osmlab/editor-layer-index/commit/5768792f86399191902527bbf65b807638984a5f) Fix Niedersachsen geometries and reject non-2D coordinates in checks ([#3086](https://github.com/osmlab/editor-layer-index/pull/3086))
  - [`cc09312`](https://github.com/osmlab/editor-layer-index/commit/cc093125f3131110d7cc0130961f2b5a88ff7d94) update FAQ in regards to waivers per comments in #2598 ([#2598](https://github.com/osmlab/editor-layer-index/pull/2598)) ([#2600](https://github.com/osmlab/editor-layer-index/pull/2600))
  - [`4c581d8`](https://github.com/osmlab/editor-layer-index/commit/4c581d8dc4e47e15864099ce00d4c841ceb4b7e1) give proper error message if `properties` is missing ([#2830](https://github.com/osmlab/editor-layer-index/pull/2830))
  - [`34abde1`](https://github.com/osmlab/editor-layer-index/commit/34abde12a2cdedd1e8b21a51b2254d68be597501) Add Bologna-Ortophoto-2026 ([#3067](https://github.com/osmlab/editor-layer-index/pull/3067))
  - [`9d2e369`](https://github.com/osmlab/editor-layer-index/commit/9d2e36929fca6e39be8f7809d232cce95d4b1bda) Create Satellite_Orthophoto_2026_Moldova.geojson ([#3071](https://github.com/osmlab/editor-layer-index/pull/3071))
  - [`76d80e5`](https://github.com/osmlab/editor-layer-index/commit/76d80e5668d51db464a6f5fe8ef3088ad1b5ec0a) Bump certifi from 2026.10.18 to 2026.10.23 ([#3088](https://github.com/osmlab/editor-layer-index/pull/3088))
  - [`f1742c6`](https://github.com/osmlab/editor-layer-index/commit/f1742c664b627f1ffde457d681a4a8ace38e173c) Add Georgian Orthophoto plans ([#2819](https://github.com/osmlab/editor-layer-index/pull/2819))
  - [`42a6b0a`](https://github.com/osmlab/editor-layer-index/commit/42a6b0ada772eb0e08e4c9a4f34484f39fba6c2e) Add IGN forest maps in France ([#3072](https://github.com/osmlab/editor-layer-index/pull/3072))
  - [`021a07a`](https://github.com/osmlab/editor-layer-index/commit/021a07a1e89513d34fa052f9b2b25954293431ff) Add latest Geneva orthophoto (2024) (4cm) ([#2905](https://github.com/osmlab/editor-layer-index/pull/2905))
  - [`8d3b550`](https://github.com/osmlab/editor-layer-index/commit/8d3b550e9fac5bd878a548c614ac2179737d10da) Fix Solothurn 2019 DSM/DTM geometries ([#3091](https://github.com/osmlab/editor-layer-index/pull/3091))
  - [`3217f57`](https://github.com/osmlab/editor-layer-index/commit/3217f57161609930b92820d6f7b2f4060caddcae) Simplified Maryland 3" geometry ([#3092](https://github.com/osmlab/editor-layer-index/pull/3092))
  - [`1187b1b`](https://github.com/osmlab/editor-layer-index/commit/1187b1b980793aadae6c6f4012d824cc4c7e2e86) Standardize GRAFCAN files, and add topographic layer ([#2907](https://github.com/osmlab/editor-layer-index/pull/2907))
  - [`fcc87b2`](https://github.com/osmlab/editor-layer-index/commit/fcc87b26a027840ecbfe3d2be8b42e5c5221fbea) Add topographic map of Barcelona + fixes in URLs in Spanish layers ([#3070](https://github.com/osmlab/editor-layer-index/pull/3070))
  - [`d565744`](https://github.com/osmlab/editor-layer-index/commit/d56574481d062d2a6be4dc418b8cd38b6a149a0e) Strict imagery checks: Add HTTP timeouts, catch exceptions ([#3094](https://github.com/osmlab/editor-layer-index/pull/3094))
  - [`fae926d`](https://github.com/osmlab/editor-layer-index/commit/fae926d25a3593993cf9efe233e59b0a1b10a270) Fix: strict check on null geometry (bing...) ([#3095](https://github.com/osmlab/editor-layer-index/pull/3095))
  - [`3352232`](https://github.com/osmlab/editor-layer-index/commit/33522322ef59bbb737da203f2a7b79a9a2c60e5f) Cut coasts on Cape Town polygons and add privacy policy
  - [`dad2687`](https://github.com/osmlab/editor-layer-index/commit/dad2687da67720347f31c391d3cea0543ee950f9) Fix straightforward discrepancies identified by JOSM ImageryCompare ([#3093](https://github.com/osmlab/editor-layer-index/pull/3093))
  - [`aa004f6`](https://github.com/osmlab/editor-layer-index/commit/aa004f6f8dc21068cfbc9498ce743ef34e663ecb) updated zürich orthophoto urls ([#3100](https://github.com/osmlab/editor-layer-index/pull/3100))
  - [`369f873`](https://github.com/osmlab/editor-layer-index/commit/369f8733673c50a615eab2a10c565dbc9b7fe327) Add BDOT500 for Poland ([#3101](https://github.com/osmlab/editor-layer-index/pull/3101))
  - [`fa7ce12`](https://github.com/osmlab/editor-layer-index/commit/fa7ce1291db74d70cce2a5bab4cc55e74eedc97f) Sync WMS sources [skip travis] ([#3102](https://github.com/osmlab/editor-layer-index/pull/3102))
  - [`7c4f9e6`](https://github.com/osmlab/editor-layer-index/commit/7c4f9e637fe4a4046ee4bb0b88874380590a1145) Update WMS URL Geoportal2Nazwyulic ([#3098](https://github.com/osmlab/editor-layer-index/pull/3098))
  - [`a632ccc`](https://github.com/osmlab/editor-layer-index/commit/a632ccc1df439d00f5a2ce6362b18455ab514ee2) Update WMS URL for Geoportal 2 service
  - [`a13161d`](https://github.com/osmlab/editor-layer-index/commit/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53) au/act 202605 ([#3103](https://github.com/osmlab/editor-layer-index/pull/3103))

  ### Added (27)
  - **ACTmapi Imagery Mar 2026** (`ACT202605`)
  - **Bologna ortofoto 2026** (`Bologna-Orthophoto-2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/it/Bologna-Orthophoto-2026.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/it/Bologna-Orthophoto-2026.geojson)
  - **Canton de Génève, Orthophoto 2024 (4cm) (SITG)** (`Geneve-orthophoto-2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ch/Canton_de_Geneve_orthophoto2024_4cm.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ch/Canton_de_Geneve_orthophoto2024_4cm.geojson)
  - **Geoportal 2: BDOT500** (`Geoportal2-PL-BDOT500_WMS`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/pl/Geoportal2-PL-BDOT500_WMS.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/pl/Geoportal2-PL-BDOT500_WMS.geojson)
  - **Georgia Orthophoto Plans** (`Georgia-Orthophoto-plans`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ge/Georgia-Orthophoto.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ge/Georgia-Orthophoto.geojson)
  - **GRAFCAN Mapa Topográfico Integrado** (`GRAFCAN-Topografico`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/es/GRAFCAN-Topografico.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/es/GRAFCAN-Topografico.geojson)
  - **GRAFCAN Ortofoto Territorial** (`GRAFCAN-Territorial`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/es/GRAFCAN-Territorial.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/es/GRAFCAN-Territorial.geojson)
  - **GRAFCAN Ortofoto Urbana de alta resolución** (`GRAFCAN-Urbana`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/es/GRAFCAN-Urbana.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/es/GRAFCAN-Urbana.geojson)
  - **Kanton Zurich, Oberflächenschummerung 2014** (`OGDLidarZH-DOM-2014`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ch/Kanton_Zurich_dom_hillshade_2014_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ch/Kanton_Zurich_dom_hillshade_2014_wms.geojson)
  - **Kanton Zurich, Oberflächenschummerung 2021/22** (`OGDLidarZH-DOM-2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ch/Kanton_Zurich_dom_hillshade_2022_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ch/Kanton_Zurich_dom_hillshade_2022_wms.geojson)
  - **Kanton Zurich, Terrainschummerung 2014** (`OGDLidarZH-DTM-2014`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ch/Kanton_Zurich_dtm_hillshade_2014_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ch/Kanton_Zurich_dtm_hillshade_2014_wms.geojson)
  - **Kanton Zurich, Terrainschummerung 2021/22** (`OGDLidarZH-DTM-2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ch/Kanton_Zurich_dtm_hillshade_2022_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/ch/Kanton_Zurich_dtm_hillshade_2022_wms.geojson)
  - **Latest available ortho geoportail.lu** (`lu.geoportail.opendata.ortho2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/lu/Luxembourg-GeoportailOrthoLatest.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/lu/Luxembourg-GeoportailOrthoLatest.geojson)
  - **Mapa base topogràfic de la ciutat de Barcelona** (`BCN-MTM`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/es/BCN-MTM.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/es/BCN-MTM.geojson)
  - **Moldova Composite Orthophoto (2016+2020+2021)** (`Geodata-Gov-2016-2020-2021_Ortofoto_Moldova`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/md/Orthophoto_2016_Moldova_Extended.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/md/Orthophoto_2016_Moldova_Extended.geojson)
  - **Moldova Satellite Orthophoto (2025-2026)** (`Geodata-Gov-2026_Ortofoto_Moldova_Satellite`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/md/Satellite_Orthophoto_2026_Moldova.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/md/Satellite_Orthophoto_2026_Moldova.geojson)
  - **Ortho 2025 winter geoportail.lu** (`lu.geoportail.opendata.ortho2025winter`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/lu/Luxembourg-GeoportailOrtho2025Winter.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/lu/Luxembourg-GeoportailOrtho2025Winter.geojson)
  - **Rheinland-Pfalz historisches DOP20 2016** (`Rheinland-Pfalz-DOP20-2016`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2016.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2016.geojson)
  - **Rheinland-Pfalz historisches DOP20 2017** (`Rheinland-Pfalz-DOP20-2017`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2017.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2017.geojson)
  - **Rheinland-Pfalz historisches DOP20 2018** (`Rheinland-Pfalz-DOP20-2018`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2018.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2018.geojson)
  - **Rheinland-Pfalz historisches DOP20 2019** (`Rheinland-Pfalz-DOP20-2019`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2019.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2019.geojson)
  - **Rheinland-Pfalz historisches DOP20 2020** (`Rheinland-Pfalz-DOP20-2020`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2020.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2020.geojson)
  - **Rheinland-Pfalz historisches DOP20 2021** (`Rheinland-Pfalz-DOP20-2021`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2021.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2021.geojson)
  - **Rheinland-Pfalz historisches DOP20 2022** (`Rheinland-Pfalz-DOP20-2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2022.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2022.geojson)
  - **Rheinland-Pfalz historisches DOP20 2023** (`Rheinland-Pfalz-DOP20-2023`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2023.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2023.geojson)
  - **Rheinland-Pfalz historisches DOP20 2024** (`Rheinland-Pfalz-DOP20-2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-history-2024.geojson)
  - **Rheinland-Pfalz Schummerung** (`Rheinland-Pfalz-DGM`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-digitalterrainmodel-ground.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/Rheinland-Pfalz-digitalterrainmodel-ground.geojson)

  ### Updated (454)
  - **© GeoBasis-DE/LVermGeo LSA, ALKIS Cadastre parcels** (`LSA-ALKIS-CP`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/SaxonyAnhalt_ALKIS_CP.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/SaxonyAnhalt_ALKIS_CP.geojson)
  - **Aachen Liegenschaftskataster** (`aachen_alkis_wms`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/aachen_alkis.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/aachen_alkis.geojson)
  - **ACTmapi Imagery Dec 2025** (`ACT202512`)
  - **ACTmapi Imagery Feb 2024** (`ACT202402`)
  - **ACTmapi Imagery Mar 2025** (`ACT202503`)
  - **ACTmapi Imagery Mar 2026** (`ACT202603`)
  - **ACTmapi Imagery May 2023** (`ACT202305`)
  - **ACTmapi Imagery May 2025** (`ACT202505`)
  - **ACTmapi Imagery Nov 2023** (`ACT202311`)
  - **ACTmapi Imagery Sep 2023** (`ACT202309`)
  - **ACTmapi Imagery Sep 2024** (`ACT202409`)
  - **Address System Albania (ASIG)** (`AL_DPGJC_ASIG_SistemiAdresave`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/al/address_system_albania.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/al/address_system_albania.geojson)
  - **Aktuelle Luftbilder der Landeshauptstadt München 20cm** (`AktuelleLuftbilderDerLandeshauptstadtMuenchen20cm`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/AktuelleLuftbilderDerLandeshauptstadtMuenchen20cm.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/AktuelleLuftbilderDerLandeshauptstadtMuenchen20cm.geojson)
  - **ALKIS Kreis Viersen** (`viersen_alkis_wms`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/viersen_alkis.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/de/viersen_alkis.geojson)
  - **Alpes-Maritimes 2020 (Storm Alex)** (`fr.dpt.06.2020.storm.alex`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/fr/Alpes-Maritimes-2020-Storm-Alex.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/fr/Alpes-Maritimes-2020-Storm-Alex.geojson)
  - **Arapahoe County Aerials Latest** (`Arapahoe-County-Aerials-Latest`)
  - **Ayuntamiento de Madrid - Ortofoto actualizada** (`madrid-ayto-geoportal`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/es/madrid-ayto-geoportal.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/es/madrid-ayto-geoportal.geojson)
  - **Bassin d Arcachon 2018** (`SIBA_2018`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/fr/Bassin-Arcachon-2018.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/fr/Bassin-Arcachon-2018.geojson)
  - **Bayonne 2016** (`Bayonne_2016`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/fr/Bayonne-2016.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/fr/Bayonne-2016.geojson)
  - **BD Topo** (`fr.ign.bdtopo`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/fr/BD-Topo.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/fr/BD-Topo.geojson)
  - **Belo Horizonte Ortofoto 2015** (`BH_Ortofoto_2015`)
  - **BEV INSPIRE Orthofoto** (`bev-inspire-orthofoto`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/at/BEVinspireOrthofoto.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/at/BEVinspireOrthofoto.geojson)
  - **Bologna ortofoto 2025** (`Bologna-Orthophoto-2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/it/Bologna-Orthophoto-2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/it/Bologna-Orthophoto-2025.geojson)
  - **Brevard County Orthoimagery (2022)** (`Brevard_Ortho_2022`)
  - **Brevard County Orthoimagery (2023)** (`Brevard_Ortho_2023`)
  - **Brevard County Orthoimagery (2024)** (`Brevard_Ortho_2024`)
  - **Brevard County Orthoimagery (2025)** (`Brevard_Ortho_2025`)
  - **Brevard County Orthoimagery (2026)** (`Brevard_Ortho_2026`)
  - **Broward County Orthoimagery (2021)** (`Broward_Ortho_2021`)
  - **Broward County Orthoimagery (2022)** (`Broward_Ortho_2022`)
  - **Broward County Orthoimagery (2023)** (`Broward_Ortho_2023`)
  - **Broward County Orthoimagery (2024)** (`Broward_Ortho_2024`)
  - **Broward County Orthoimagery (2025)** (`Broward_Ortho_2025`)
  - **Broward County Orthoimagery (2026)** (`Broward_Ortho_2026`)
  - **Budapest district XI orthophoto 2015** (`Budapest_XI_2015`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2015.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2015.geojson)
  - **Budapest district XI orthophoto 2017** (`Budapest_XI_2017`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2017.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2017.geojson)
  - **Budapest district XI orthophoto 2019** (`Budapest_XI_2019`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2019.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2019.geojson)
  - **Budapest district XI orthophoto 2021** (`Budapest_XI_2021`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2021.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2021.geojson)
  - **Budapest district XI orthophoto 2023** (`Budapest_XI_2023`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2023.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2023.geojson)
  - **Budapest district XI orthophoto 2025** (`Budapest_XI_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/a13161d8f6dbbcb0a892ba0a83853ef9fce16b53/sources/europe/hu/Budapest-XI-district-ortophoto-2025.geojson)
  - …and 414 more

  ### Removed (8)
  - **GRAFCAN OrtoExpress - Canary Islands** (`GRAFCAN_Express-Canary_Islands`)
  - **GRAFCAN OrtoExpress Urbana - Canary Islands** (`GRAFCAN-Canary_Islands`)
  - **Kanton Zurich, Oberflächenschummerung 2014 50cm** (`OGDLidarZH-DOM`)
  - **Kanton Zurich, Terrainschummerung 2014 50cm** (`OGDLidarZH-DTM`)
  - **Latest available ortho geoportail.lu** (`lu.geoportail.opendata.ortholatest`)
  - **Moldova Extended Orthophoto (2016)** (`Geodata-Gov-2016_Extended_Ortofoto_Moldova`)
  - **Nordic snowmobile overlay** (`kelkkareitit`) — `sources/europe/Nordicsnowmobileoverlay.geojson`
  - **Ortho 2021 geoportail.lu** (`lu.geoportail.opendata.ortho2021`)

## 1.0.0

### Major Changes

- 15f6102: First stable release. The code API now follows semantic versioning; the weekly data updates stay patch releases, so a layer id can disappear (see Versioning in the README).

  Breaking: exports that only described internals are gone.

  - Root: the types `EliIndex`, `EliLocatorIndex` and `EliDetailsShard`.
  - `/oam`: `oamMaxzoom`, `oamRenderParams`, `oamSearchUrl`, `pickOamAsset`, `toOamLayer` and the types `StacAsset`, `StacItem`, `StacItemCollection`. Use `searchOam` and `getOamItem`.

## 0.5.2

### Patch Changes

- 0bb3319: `ensureDetailsForViewport` now also loads the shards of the layers in view, so layers filed under another continent than the map centre hydrate (Gran Canaria, French Guiana, Réunion, Guam, the western Aleutians).

  `/oam`: images across the antimeridian get two `bboxes` and a source without `bounds`, so they draw. A malformed STAC item is skipped instead of failing the whole search, `matched` counts an image on both sides once, and a `NaN` limit falls back to the default.

## 0.5.1

### Patch Changes

- Update Editor Layer Index data ([`ad5e99e`](https://github.com/osmlab/editor-layer-index/commit/ad5e99ea88bdfa6664fe4e8aaf0b2c4ec0699f43) → [`7deb4c0`](https://github.com/osmlab/editor-layer-index/commit/7deb4c025525bced24f9989ae0127e9f16d6b8ad), [compare](https://github.com/osmlab/editor-layer-index/compare/ad5e99ea88bdfa6664fe4e8aaf0b2c4ec0699f43...7deb4c025525bced24f9989ae0127e9f16d6b8ad)).

  Upstream commits:

  - [`14db4db`](https://github.com/osmlab/editor-layer-index/commit/14db4db6018bd7971c4cd8d7ca7944588fb39704) Sync WMS sources [skip travis] ([#3084](https://github.com/osmlab/editor-layer-index/pull/3084))
  - [`049567a`](https://github.com/osmlab/editor-layer-index/commit/049567aa5d4458cd0d14ac9554d2044068dfbaef) Bump brotli from 1.2.0 to 1.2.1 ([#3082](https://github.com/osmlab/editor-layer-index/pull/3082))
  - [`4a74e7b`](https://github.com/osmlab/editor-layer-index/commit/4a74e7b246d69f3ef9fe366fba6a9c3be8f1f22a) Remove DC ortho 2019
  - [`081f093`](https://github.com/osmlab/editor-layer-index/commit/081f0938c22b21c2950b861aabf4f90a05bacfe8) Remove DE ortho 2012
  - [`23924c6`](https://github.com/osmlab/editor-layer-index/commit/23924c66dd39f17470e79da64cff7b07f854b2c5) Remove Brevard FL ortho 2021
  - [`f075a21`](https://github.com/osmlab/editor-layer-index/commit/f075a211068a8f7e52ceece3b972cf91bf2c6118) Remove Mecklenburg NC 2021
  - [`db99ea6`](https://github.com/osmlab/editor-layer-index/commit/db99ea614710e0094a0107d6ad2a10cb3f47dcc7) Remove Bozeman MT 2021
  - [`548f099`](https://github.com/osmlab/editor-layer-index/commit/548f0994676a004d948aedbbd7cecd7b6df9c7b8) Remove Fairfax VA 2022
  - [`14d303b`](https://github.com/osmlab/editor-layer-index/commit/14d303b9691672657f4badf37cb787dac1285c7b) Remove Loudoun VA 2022
  - [`05170a0`](https://github.com/osmlab/editor-layer-index/commit/05170a0954b7a04248312f9cd80e85e00671ca4e) Remove Monongalia WV 2022
  - [`11c566f`](https://github.com/osmlab/editor-layer-index/commit/11c566f54d7b90d5fb338d67237b692fbd7a5e36) Remove Cook IL 2020
  - [`32e1747`](https://github.com/osmlab/editor-layer-index/commit/32e17479fb53584cc3007832ef71f850fc42e4aa) Remove Cook IL 2021
  - [`b16a756`](https://github.com/osmlab/editor-layer-index/commit/b16a7569461ca3b7e23bab6b832dfff558113ba2) Remove RI 21fall
  - [`7deb4c0`](https://github.com/osmlab/editor-layer-index/commit/7deb4c025525bced24f9989ae0127e9f16d6b8ad) Bump aiohttp from 3.14.3 to 3.14.5 ([#3080](https://github.com/osmlab/editor-layer-index/pull/3080))

  ### Updated (39)
  - **Brevard County Orthoimagery (2022)** (`Brevard_Ortho_2022`)
  - **Brevard County Orthoimagery (2023)** (`Brevard_Ortho_2023`)
  - **Brevard County Orthoimagery (2024)** (`Brevard_Ortho_2024`)
  - **Brevard County Orthoimagery (2025)** (`Brevard_Ortho_2025`)
  - **Brevard County Orthoimagery (2026)** (`Brevard_Ortho_2026`)
  - **City of Bozeman Aerial Photography (2023)** (`Bozeman_MT_2023`)
  - **City of Bozeman Aerial Photography (2024)** (`Bozeman_MT_2024`)
  - **City of Bozeman Aerial Photography (2025)** (`Bozeman_MT_2025`)
  - **City of Bozeman Aerial Photography (2026)** (`Bozeman_MT_2026`)
  - **Cook County Orthoimagery 2022** (`Cook_IL_2022`)
  - **Cook County Orthoimagery 2023** (`Cook_IL_2023`)
  - **Cook County Orthoimagery 2024** (`Cook_IL_2024`)
  - **Cook County Orthoimagery 2025** (`Cook_IL_2025`)
  - **DC From Above Orthophoto 2021** (`DC_From_Above_Ortho_2021`)
  - **DC From Above Orthophoto 2023** (`DC_From_Above_Ortho_2023`)
  - **DC From Above Orthophoto 2025** (`DC_From_Above_Ortho_2025`)
  - **Fairfax County Orthoimagery (2023)** (`Fairfax_VA_2023`)
  - **Fairfax County Orthoimagery (2024)** (`Fairfax_VA_2024`)
  - **Fairfax County Orthoimagery (2025)** (`Fairfax_VA_2025`)
  - **Fairfax County Orthoimagery (2026)** (`Fairfax_VA_2026`)
  - **Loudoun County Orthoimagery (2022)** (`Loudoun_VA_2022`)
  - **Loudoun County Orthoimagery (2023)** (`Loudoun_VA_2023`)
  - **Loudoun County Orthoimagery (2024)** (`Loudoun_VA_2024`)
  - **Loudoun County Orthoimagery (2025)** (`Loudoun_VA_2025`)
  - **Loudoun County Orthoimagery (2026)** (`Loudoun_VA_2026`)
  - **Mecklenburg County Orthoimagery (2022)** (`Mecklenburg_NC_2022`)
  - **Mecklenburg County Orthoimagery (2023)** (`Mecklenburg_NC_2023`)
  - **Mecklenburg County Orthoimagery (2024)** (`Mecklenburg_NC_2024`)
  - **Mecklenburg County Orthoimagery (2025)** (`Mecklenburg_NC_2025`)
  - **Monongalia County 2023 Aerial Imagery** (`Monongalia_WV_2023`)
  - **Monongalia County 2024 Aerial Imagery** (`Monongalia_WV_2024`)
  - **Monongalia County 2025 Aerial Imagery** (`Monongalia_WV_2025`)
  - **Monongalia County 2026 Aerial Imagery** (`Monongalia_WV_2026`)
  - **Rhode Island Aerial Photo (Spring 2022)** (`RIGIS_Aerial_Photo_22s`)
  - **Rhode Island Aerial Photo (Spring 2023)** (`RIGIS_Aerial_Photo_23s`)
  - **Rhode Island Aerial Photo (Spring 2024)** (`RIGIS_Aerial_Photo_24s`)
  - **Rhode Island Aerial Photo (Spring 2025)** (`RIGIS_Aerial_Photo_25s`)
  - **Rhode Island Aerial Photo (Spring 2026)** (`RIGIS_Aerial_Photo_26s`)
  - **SPW(allonie) most recent aerial imagery** (`SPW_ORTHO_LAST`) — [source](https://github.com/osmlab/editor-layer-index/blob/7deb4c025525bced24f9989ae0127e9f16d6b8ad/sources/europe/be/SPW_OrthoPhoto.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/7deb4c025525bced24f9989ae0127e9f16d6b8ad/sources/europe/be/SPW_OrthoPhoto.geojson)

  ### Removed (11)
  - **Brevard County Orthoimagery (2021)** (`Brevard_Ortho_2021`) — `sources/north-america/us/fl/Brevard_Ortho_2021.geojson`
  - **City of Bozeman Aerial Photography (2021)** (`Bozeman_MT_2021`) — `sources/north-america/us/mt/Bozeman_MT_2021.geojson`
  - **Cook County Orthoimagery 2020** (`Cook_IL_2020`) — `sources/north-america/us/il/Cook_IL_2020.geojson`
  - **Cook County Orthoimagery 2021** (`Cook_IL_2021`) — `sources/north-america/us/il/Cook_IL_2021.geojson`
  - **DC From Above Orthophoto 2019** (`DC_From_Above_Ortho_2019`) — `sources/north-america/us/dc/DC_From_Above_Ortho_2019.geojson`
  - **Delaware 2012 Orthophotography** (`Delaware2012Orthophotography`) — `sources/north-america/us/de/Delaware2012Orthophotography.geojson`
  - **Fairfax County Orthoimagery (2022)** (`Fairfax_VA_2022`) — `sources/north-america/us/va/Fairfax_VA_2022.geojson`
  - **Loudoun County Orthoimagery (2021)** (`Loudoun_VA_2021`) — `sources/north-america/us/va/Loudoun_VA_2021.geojson`
  - **Mecklenburg County Orthoimagery (2021)** (`Mecklenburg_NC_2021`) — `sources/north-america/us/nc/Mecklenburg_NC_2021.geojson`
  - **Monongalia County 2022 Aerial Imagery** (`Monongalia_WV_2022`) — `sources/north-america/us/wv/Monongalia_WV_2022.geojson`
  - **Rhode Island Aerial Photo (Fall 2021)** (`RIGIS_Aerial_Photo_21f`) — `sources/north-america/us/ri/RIGIS_Aerial_Photo_21f.geojson`

## 0.5.0

### Minor Changes

- 1f7e1ae: New entry point `/oam`: OpenAerialMap images, live from HOT's STAC API (`api.imagery.hotosm.org`).

  - `searchOam(bounds, options)` lists the images in a view, newest first; `getOamItem(id)` reads one for a link.
  - Each image is an `OamLayer`, shaped like an `EliLayer` where the fields mean the same, with the OAM details (provider, platform, resolution, footprint, thumbnail, license) under `oam`.
  - `getOamRasterSourceSpec`, `getOamRasterLayerSpec`, `oamSourceId` and `getOamImageryUsedValue` mirror the ELI helpers. Tiles come from HOT's TiTiler, bounded to the image.
  - No data is bundled and the root entry does not import it, so apps that do not use it are unchanged.
  - `RasterSourceSpec` gains an optional `bounds`.

## 0.4.0

### Minor Changes

- f9950ca: **Breaking:** `EliLocatorLayer.bbox` is replaced by `bboxes: BBox[]`.

  Layers whose coverage lies on both sides of the antimeridian or in far-apart parts had a bounding box around the whole globe, so `layersInViewport()` listed them almost everywhere: NRCS Alaska in Berlin, IGN BD Ortho (France with its overseas regions) across the tropics, LINZ New Zealand around the southern hemisphere.

  - Every layer now has one coverage box, or one per area when its parts lie far apart. Each box lies within ±180° with west ≤ east. Migrate `layer.bbox` to `layer.bboxes` (for a single extent, e.g. `fitBounds`, use the box you need; most layers have exactly one).
  - `layersInViewport()` handles views on MapLibre world copies (longitudes past ±180°, which previously matched nothing) and views across the antimeridian. The new `viewportBoxes()` exposes that normalisation.
  - LINZ NZ Topo50 no longer counts as worldwide: it is filed under `NZ` / `oceania` and gets its coverage outline back.
  - Continent shards hold a layer by the main country of each coverage area, not by border slivers of coarse polygons. Spanish, Canadian, Argentinian and some Greenland and Bulgarian layers left the shards of neighbouring continents, so the Africa, South America and Asia shards got smaller.

## 0.3.1

### Patch Changes

- c849b5d: Remove `sourceUrl` from the layer details again (added in 0.3.0). Apps using the package have no need for a link to the ELI source file, so it no longer ships in the data. Only the preview app keeps those links, in a file of its own.

## 0.3.0

### Minor Changes

- 90243e4: Layers now carry `sourceUrl`, the GitHub page of their source file in the Editor Layer Index (`sources/…/<file>.geojson`). It is part of the lazy layer details, so the locator stays the same size. The preview links every layer row and every “On the map” chip to that file.

## 0.2.1

### Patch Changes

- Update Editor Layer Index data ([`7785898`](https://github.com/osmlab/editor-layer-index/commit/7785898dd4f3e9d1f7432bea0cf441f15548b164) → [`ffddeee`](https://github.com/osmlab/editor-layer-index/commit/ffddeeec23d9c3c0d18aa059bb70fdca7fb049ba), [compare](https://github.com/osmlab/editor-layer-index/compare/7785898dd4f3e9d1f7432bea0cf441f15548b164...ffddeeec23d9c3c0d18aa059bb70fdca7fb049ba)).

  Upstream commits:

  - [`8adc5a9`](https://github.com/osmlab/editor-layer-index/commit/8adc5a945f296c36c2891ac14d39923312032530) Update end_date for MD Six Inch Imagery to 2025
  - [`fb80a35`](https://github.com/osmlab/editor-layer-index/commit/fb80a35b24891190280eacfe3569e15e761b4b66) Sync WMS sources [skip travis] ([#3078](https://github.com/osmlab/editor-layer-index/pull/3078))
  - [`ffddeee`](https://github.com/osmlab/editor-layer-index/commit/ffddeeec23d9c3c0d18aa059bb70fdca7fb049ba) Bump urllib3 from 2.7.0 to 2.8.0 ([#3064](https://github.com/osmlab/editor-layer-index/pull/3064))

  ### Updated (3)
  - **Köln TrueDOP 2024** (`Koeln-TrueDOP-2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/ffddeeec23d9c3c0d18aa059bb70fdca7fb049ba/sources/europe/de/Köln-TrueDOP-2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/ffddeeec23d9c3c0d18aa059bb70fdca7fb049ba/sources/europe/de/Köln-TrueDOP-2024.geojson)
  - **MD Latest 6 Inch Aerial Imagery** (`mdgeodata.md.gov-MD_SixInchImagery`) — [source](https://github.com/osmlab/editor-layer-index/blob/ffddeeec23d9c3c0d18aa059bb70fdca7fb049ba/sources/north-america/us/md/MD_SixInchImagery.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/ffddeeec23d9c3c0d18aa059bb70fdca7fb049ba/sources/north-america/us/md/MD_SixInchImagery.geojson)
  - **SPW(allonie) most recent aerial imagery** (`SPW_ORTHO_LAST`) — [source](https://github.com/osmlab/editor-layer-index/blob/ffddeeec23d9c3c0d18aa059bb70fdca7fb049ba/sources/europe/be/SPW_OrthoPhoto.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/ffddeeec23d9c3c0d18aa059bb70fdca7fb049ba/sources/europe/be/SPW_OrthoPhoto.geojson)

## 0.2.0

### Minor Changes

- 347540f: Group imagery that only differs by capture date. Layers of one time series (e.g. the eleven
  `Berlin/Geoportal DOP20RGB` years) now carry a `group` with a shared id, the series name, a date
  label (`2025`, `Mar 2026`, `2025 Sommer`) and a sort order. The new `groupLayers()` helper turns a
  layer list into entries with date variants, so a UI can list a series once and offer its dates as a
  one-click picker.

### Patch Changes

- 4f6fda0: Make lazy loading reliable and lighter:

  - Layers no longer go missing along continent borders (Guam, Turkey, Israel, North Africa) or in
    views spanning two continents. Details are now loaded for the layers in view
    (`ensureDetailsForLayers()`) instead of for a continent guessed from the map center.
  - A data chunk that failed to load is retried on the next call instead of failing until reload, and
    `useEditorLayerIndex()` reports `status: 'error'` instead of staying on `'loading'`.
  - Data chunks ship as compact JSON: the published package shrinks from 13.7 MB to 5.6 MB and large
    shards parse faster.
  - The package can now be loaded with `require()` on Node 22+ (`default` export condition).

## 0.1.15

### Patch Changes

- Update Editor Layer Index data ([`077f681`](https://github.com/osmlab/editor-layer-index/commit/077f6811ac2aaf5e6098ed8a452de9ab2e339281) → [`7785898`](https://github.com/osmlab/editor-layer-index/commit/7785898dd4f3e9d1f7432bea0cf441f15548b164), [compare](https://github.com/osmlab/editor-layer-index/compare/077f6811ac2aaf5e6098ed8a452de9ab2e339281...7785898dd4f3e9d1f7432bea0cf441f15548b164)).

  Upstream commits:

  - [`f354476`](https://github.com/osmlab/editor-layer-index/commit/f3544762e767768c1d5390f1c1b3dc84f1e0fdd5) Revert "add Wales greyscale DSM (#2853)" ([#2853](https://github.com/osmlab/editor-layer-index/pull/2853)) ([#3075](https://github.com/osmlab/editor-layer-index/pull/3075))
  - [`e0fdd81`](https://github.com/osmlab/editor-layer-index/commit/e0fdd819341ec4ca84dad57c36446f59e2bf3649) Bump regex from 2026.9.10 to 2026.9.29 ([#3074](https://github.com/osmlab/editor-layer-index/pull/3074))
  - [`7785898`](https://github.com/osmlab/editor-layer-index/commit/7785898dd4f3e9d1f7432bea0cf441f15548b164) Add 'best' property to Brevard_Ortho_2026.geojson ([#3077](https://github.com/osmlab/editor-layer-index/pull/3077))

  ### Updated (1)
  - **Brevard County Orthoimagery (2026)** (`Brevard_Ortho_2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/7785898dd4f3e9d1f7432bea0cf441f15548b164/sources/north-america/us/fl/Brevard_Ortho_2026.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/7785898dd4f3e9d1f7432bea0cf441f15548b164/sources/north-america/us/fl/Brevard_Ortho_2026.geojson)

  ### Removed (1)
  - **Wales LiDAR Digital Surface Model 1m Hillshade (2020-2023)** (`Wales_LIDAR_DSM_1m_2020_2023`) — `sources/europe/gb/Wales-LiDAR-DSM-1m-2020-2023.geojson`

## 0.1.14

### Patch Changes

- Update Editor Layer Index data ([`7232a0b`](https://github.com/osmlab/editor-layer-index/commit/7232a0be41a74e3e31650e9290000a3a3bee7bcc) → [`077f681`](https://github.com/osmlab/editor-layer-index/commit/077f6811ac2aaf5e6098ed8a452de9ab2e339281), [compare](https://github.com/osmlab/editor-layer-index/compare/7232a0be41a74e3e31650e9290000a3a3bee7bcc...077f6811ac2aaf5e6098ed8a452de9ab2e339281)).

  Upstream commits:

  - [`3bf78da`](https://github.com/osmlab/editor-layer-index/commit/3bf78dabd7796684b1bc5a829098be424014673a) Update year for Hamburg DOP20 dataset ([#3065](https://github.com/osmlab/editor-layer-index/pull/3065))
  - [`b672b12`](https://github.com/osmlab/editor-layer-index/commit/b672b12dd8583563c201ad6c0813016df968cd4d) Add Miami-Dade County Orthoimagery 2026 GeoJSON ([#3066](https://github.com/osmlab/editor-layer-index/pull/3066))
  - [`077f681`](https://github.com/osmlab/editor-layer-index/commit/077f6811ac2aaf5e6098ed8a452de9ab2e339281) Sync WMS sources [skip travis] ([#3073](https://github.com/osmlab/editor-layer-index/pull/3073))

  ### Added (1)
  - **Miami-Dade County Orthoimagery (2026)** (`Miami-Dade_Ortho_2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/077f6811ac2aaf5e6098ed8a452de9ab2e339281/sources/north-america/us/fl/Miami-Dade_Ortho_2026.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/077f6811ac2aaf5e6098ed8a452de9ab2e339281/sources/north-america/us/fl/Miami-Dade_Ortho_2026.geojson)

  ### Updated (3)
  - **DVRPC Orthoimagery 2020 - Bucks County (1ft)** (`DVRPC_2020_BucksPA`) — [source](https://github.com/osmlab/editor-layer-index/blob/077f6811ac2aaf5e6098ed8a452de9ab2e339281/sources/north-america/us/pa/DVRPC_2020_BucksPA.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/077f6811ac2aaf5e6098ed8a452de9ab2e339281/sources/north-america/us/pa/DVRPC_2020_BucksPA.geojson)
  - **Hamburg 20cm (HH LGV DOP20 unbelaubt 2026)** (`Hamburg-DOP20-unbelaubt`) — [source](https://github.com/osmlab/editor-layer-index/blob/077f6811ac2aaf5e6098ed8a452de9ab2e339281/sources/europe/de/Hamburg-DOP20-unbelaubt.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/077f6811ac2aaf5e6098ed8a452de9ab2e339281/sources/europe/de/Hamburg-DOP20-unbelaubt.geojson)
  - **Köln TrueDOP 2024** (`Koeln-TrueDOP-2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/077f6811ac2aaf5e6098ed8a452de9ab2e339281/sources/europe/de/Köln-TrueDOP-2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/077f6811ac2aaf5e6098ed8a452de9ab2e339281/sources/europe/de/Köln-TrueDOP-2024.geojson)

## 0.1.13

### Patch Changes

- Update Editor Layer Index data ([`51c4960`](https://github.com/osmlab/editor-layer-index/commit/51c49600ebbf27c8b3aa57f46b444c5d054ede9c) → [`7232a0b`](https://github.com/osmlab/editor-layer-index/commit/7232a0be41a74e3e31650e9290000a3a3bee7bcc), [compare](https://github.com/osmlab/editor-layer-index/compare/51c49600ebbf27c8b3aa57f46b444c5d054ede9c...7232a0be41a74e3e31650e9290000a3a3bee7bcc)).

  Upstream commits:

  - [`7232a0b`](https://github.com/osmlab/editor-layer-index/commit/7232a0be41a74e3e31650e9290000a3a3bee7bcc) Sync WMS sources [skip travis] ([#3068](https://github.com/osmlab/editor-layer-index/pull/3068))

  ### Updated (2)
  - **DVRPC Orthoimagery 2020 - Delaware County (1ft)** (`DVRPC_2020_DelawarePA`) — [source](https://github.com/osmlab/editor-layer-index/blob/7232a0be41a74e3e31650e9290000a3a3bee7bcc/sources/north-america/us/pa/DVRPC_2020_DelawarePA.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/7232a0be41a74e3e31650e9290000a3a3bee7bcc/sources/north-america/us/pa/DVRPC_2020_DelawarePA.geojson)
  - **DVRPC Orthoimagery 2020 - Gloucestor County (1ft)** (`DVRPC_2020_GloucestorNJ`) — [source](https://github.com/osmlab/editor-layer-index/blob/7232a0be41a74e3e31650e9290000a3a3bee7bcc/sources/north-america/us/nj/DVRPC_2020_GloucestorNJ.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/7232a0be41a74e3e31650e9290000a3a3bee7bcc/sources/north-america/us/nj/DVRPC_2020_GloucestorNJ.geojson)

## 0.1.12

### Patch Changes

- Update Editor Layer Index data ([`f74ebdd`](https://github.com/osmlab/editor-layer-index/commit/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80) → [`51c4960`](https://github.com/osmlab/editor-layer-index/commit/51c49600ebbf27c8b3aa57f46b444c5d054ede9c), [compare](https://github.com/osmlab/editor-layer-index/compare/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80...51c49600ebbf27c8b3aa57f46b444c5d054ede9c)).

  Upstream commits:

  - [`20ae9e9`](https://github.com/osmlab/editor-layer-index/commit/20ae9e97d1988685e987dc43c8606b17806c7401) Bump regex from 2026.9.3 to 2026.9.10 ([#3059](https://github.com/osmlab/editor-layer-index/pull/3059))
  - [`f7d5fd2`](https://github.com/osmlab/editor-layer-index/commit/f7d5fd25dcb705ccbd74cba07fe3b79c21e8a664) FlyNorth images to use in Colombia ([#3047](https://github.com/osmlab/editor-layer-index/pull/3047))
  - [`23e1f86`](https://github.com/osmlab/editor-layer-index/commit/23e1f8633a76a6fc2238bdb5c01678fa998a7307) Add 19th C. Ireland maps ([#2408](https://github.com/osmlab/editor-layer-index/pull/2408))
  - [`7494ec3`](https://github.com/osmlab/editor-layer-index/commit/7494ec3f58b41ccedbd6a37b2181dfd2c2e67525) Update geometry for Canada Ontario Ortho 2023-2027 ([#3034](https://github.com/osmlab/editor-layer-index/pull/3034))
  - [`9dd1e82`](https://github.com/osmlab/editor-layer-index/commit/9dd1e82861579b9fe13713819d54f5d0f6102989) Add Port Coquitlam 2025 imagery ([#3052](https://github.com/osmlab/editor-layer-index/pull/3052))
  - [`9444d4d`](https://github.com/osmlab/editor-layer-index/commit/9444d4d6a744256f727de2f70bec947a5234b7fd) Fairfax County imagery improvement ([#3062](https://github.com/osmlab/editor-layer-index/pull/3062))
  - [`51c4960`](https://github.com/osmlab/editor-layer-index/commit/51c49600ebbf27c8b3aa57f46b444c5d054ede9c) Sync WMS sources [skip travis] ([#3063](https://github.com/osmlab/editor-layer-index/pull/3063))

  ### Added (73)
  - **AC3 Fly North Valle del Cauca (sismo 2026)** (`ac3-flynorth-valle-del-cauca-2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/south-america/co/flynorth-valle-del-cauca.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/south-america/co/flynorth-valle-del-cauca.geojson)
  - **City of Port Coquitlam Addresses (2025)** (`Port_Coquitlam_Addresses_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/ca/bc/Port_Coquitlam_Addresses_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/ca/bc/Port_Coquitlam_Addresses_2025.geojson)
  - **City of Port Coquitlam Cadastre (2025)** (`Port_Coquitlam_Cadastre_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/ca/bc/Port_Coquitlam_Cadastre_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/ca/bc/Port_Coquitlam_Cadastre_2025.geojson)
  - **City of Port Coquitlam Orthoimagery and Cadastral Boundaries (2025)** (`Port_Coquitlam_Orthoimagery_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/ca/bc/Port_Coquitlam_Orthoimagery_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/ca/bc/Port_Coquitlam_Orthoimagery_2025.geojson)
  - **Fairfax County Orthoimagery (2022)** (`Fairfax_VA_2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/va/Fairfax_VA_2022.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/va/Fairfax_VA_2022.geojson)
  - **Fairfax County Orthoimagery (2023)** (`Fairfax_VA_2023`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/va/Fairfax_VA_2023.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/va/Fairfax_VA_2023.geojson)
  - **Fairfax County Orthoimagery (2024)** (`Fairfax_VA_2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/va/Fairfax_VA_2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/va/Fairfax_VA_2024.geojson)
  - **Fairfax County Orthoimagery (2025)** (`Fairfax_VA_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/va/Fairfax_VA_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/va/Fairfax_VA_2025.geojson)
  - **Fairfax County Orthoimagery (2026)** (`Fairfax_VA_2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/va/Fairfax_VA_2026.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/va/Fairfax_VA_2026.geojson)
  - **OS 1st Ed. 6-inch. Antrim, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_antrim`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_antrim.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_antrim.geojson)
  - **OS 1st Ed. 6-inch. Armagh, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_armagh`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_armagh.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_armagh.geojson)
  - **OS 1st Ed. 6-inch. Carlow, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_carlow`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_carlow.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_carlow.geojson)
  - **OS 1st Ed. 6-inch. Cavan, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_cavan`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_cavan.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_cavan.geojson)
  - **OS 1st Ed. 6-inch. Clare, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_clare`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_clare.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_clare.geojson)
  - **OS 1st Ed. 6-inch. Cork, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_cork`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_cork.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_cork.geojson)
  - **OS 1st Ed. 6-inch. Derry/Londonderry, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_derry`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_derry.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_derry.geojson)
  - **OS 1st Ed. 6-inch. Donegal, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_donegal`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_donegal.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_donegal.geojson)
  - **OS 1st Ed. 6-inch. Down, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_down`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_down.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_down.geojson)
  - **OS 1st Ed. 6-inch. Dublin, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_dublin`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_dublin.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_dublin.geojson)
  - **OS 1st Ed. 6-inch. Fermanagh, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_fermanagh`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_fermanagh.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_fermanagh.geojson)
  - **OS 1st Ed. 6-inch. Galway, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_galway`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_galway.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_galway.geojson)
  - **OS 1st Ed. 6-inch. Kerry, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_kerry`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_kerry.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_kerry.geojson)
  - **OS 1st Ed. 6-inch. Kildare, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_kildare`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_kildare.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_kildare.geojson)
  - **OS 1st Ed. 6-inch. Kilkenny, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_kilkenny`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_kilkenny.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_kilkenny.geojson)
  - **OS 1st Ed. 6-inch. Laois (née Queen's County), Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_laois`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_laois.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_laois.geojson)
  - **OS 1st Ed. 6-inch. Leitrim, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_leitrim`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_leitrim.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_leitrim.geojson)
  - **OS 1st Ed. 6-inch. Limerick, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_limerick`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_limerick.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_limerick.geojson)
  - **OS 1st Ed. 6-inch. Longford, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_longford`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_longford.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_longford.geojson)
  - **OS 1st Ed. 6-inch. Louth, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_louth`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_louth.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_louth.geojson)
  - **OS 1st Ed. 6-inch. Mayo, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_mayo`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_mayo.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_mayo.geojson)
  - **OS 1st Ed. 6-inch. Meath, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_meath`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_meath.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_meath.geojson)
  - **OS 1st Ed. 6-inch. Monaghan, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_monaghan`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_monaghan.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_monaghan.geojson)
  - **OS 1st Ed. 6-inch. Offaly (née Kings County), Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_offaly`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_offaly.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_offaly.geojson)
  - **OS 1st Ed. 6-inch. Roscommon, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_roscommon`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_roscommon.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_roscommon.geojson)
  - **OS 1st Ed. 6-inch. Sligo, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_sligo`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_sligo.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_sligo.geojson)
  - **OS 1st Ed. 6-inch. Tipperary, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_tipperary`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_tipperary.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_tipperary.geojson)
  - **OS 1st Ed. 6-inch. Tyrone, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_tyrone`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_tyrone.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_tyrone.geojson)
  - **OS 1st Ed. 6-inch. Waterford, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_waterford`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_waterford.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_waterford.geojson)
  - **OS 1st Ed. 6-inch. Westmeath, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_westmeath`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_westmeath.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_westmeath.geojson)
  - **OS 1st Ed. 6-inch. Wexford, Ireland (1840s-1880s) (NLS)** (`os1ed_6inch_wexford`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_wexford.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/europe/ie/os1ed_6inch_wexford.geojson)
  - …and 33 more

  ### Updated (4)
  - **DVRPC Orthoimagery 2020 - Bucks County (1ft)** (`DVRPC_2020_BucksPA`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/pa/DVRPC_2020_BucksPA.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/pa/DVRPC_2020_BucksPA.geojson)
  - **DVRPC Orthoimagery 2020 - Delaware County (1ft)** (`DVRPC_2020_DelawarePA`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/pa/DVRPC_2020_DelawarePA.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/pa/DVRPC_2020_DelawarePA.geojson)
  - **DVRPC Orthoimagery 2020 - Gloucestor County (1ft)** (`DVRPC_2020_GloucestorNJ`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/nj/DVRPC_2020_GloucestorNJ.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/us/nj/DVRPC_2020_GloucestorNJ.geojson)
  - **Ontario Orthophotography Mosaic 2023-2027 (RGB)** (`Ontario_Mosaic_2023-2027_RGB`) — [source](https://github.com/osmlab/editor-layer-index/blob/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/ca/on/Ontario_Mosaic_2023-2027_RGB.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/51c49600ebbf27c8b3aa57f46b444c5d054ede9c/sources/north-america/ca/on/Ontario_Mosaic_2023-2027_RGB.geojson)

  ### Removed (2)
  - **Fairfax County Orthoimagery (Latest)** (`Fairfax_VA_Most_Recent`)
  - **Ontario Orthophotography Mosaic 2023-2027 (CIR)** (`Ontario_Mosaic_2023-2027_CIR`) — `sources/north-america/ca/on/Ontario_Mosaic_2023-2027_CIR.geojson`

## 0.1.11

### Patch Changes

- Update Editor Layer Index data ([`729485b`](https://github.com/osmlab/editor-layer-index/commit/729485b2ca83e8c57db4e10161a53cbf29fa85c7) → [`f74ebdd`](https://github.com/osmlab/editor-layer-index/commit/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80), [compare](https://github.com/osmlab/editor-layer-index/compare/729485b2ca83e8c57db4e10161a53cbf29fa85c7...f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80)).

  Upstream commits:

  - [`0f0cd9f`](https://github.com/osmlab/editor-layer-index/commit/0f0cd9f14fd7ca829494955ef55902ea397b1a85) Bump regex from 2026.7.19 to 2026.9.3 ([#3057](https://github.com/osmlab/editor-layer-index/pull/3057))
  - [`f1cc1c0`](https://github.com/osmlab/editor-layer-index/commit/f1cc1c0cabd5f3f5de3cbf07589ba472f039d44d) Update Fairfax imagery URL ([#3056](https://github.com/osmlab/editor-layer-index/pull/3056))
  - [`bec6708`](https://github.com/osmlab/editor-layer-index/commit/bec6708e4db68bc7e528050f42643d8886dae0ed) Add City of Parksville 2025 imagery ([#3053](https://github.com/osmlab/editor-layer-index/pull/3053))
  - [`f74ebdd`](https://github.com/osmlab/editor-layer-index/commit/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80) Sync WMS sources [skip travis] ([#3058](https://github.com/osmlab/editor-layer-index/pull/3058))

  ### Added (2)
  - **City of Parksville Orthoimagery (2025)** (`City_of_Parksville_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/ca/bc/City_of_Parksville_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/ca/bc/City_of_Parksville_2025.geojson)
  - **Fairfax County Orthoimagery (Latest)** (`Fairfax_VA_Most_Recent`) — [source](https://github.com/osmlab/editor-layer-index/blob/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/us/va/Fairfax_VA_Most_Recent.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/us/va/Fairfax_VA_Most_Recent.geojson)

  ### Updated (4)
  - **DVRPC Orthoimagery 2020 - Bucks County (1ft)** (`DVRPC_2020_BucksPA`) — [source](https://github.com/osmlab/editor-layer-index/blob/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/us/pa/DVRPC_2020_BucksPA.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/us/pa/DVRPC_2020_BucksPA.geojson)
  - **DVRPC Orthoimagery 2020 - Delaware County (1ft)** (`DVRPC_2020_DelawarePA`) — [source](https://github.com/osmlab/editor-layer-index/blob/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/us/pa/DVRPC_2020_DelawarePA.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/us/pa/DVRPC_2020_DelawarePA.geojson)
  - **DVRPC Orthoimagery 2025 - Bucks County (1ft)** (`DVRPC_2025_BucksPA`) — [source](https://github.com/osmlab/editor-layer-index/blob/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/us/pa/DVRPC_2025_BucksPA.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/us/pa/DVRPC_2025_BucksPA.geojson)
  - **DVRPC Orthoimagery 2025 - Gloucestor County (1ft)** (`DVRPC_2025_GloucestorNJ`) — [source](https://github.com/osmlab/editor-layer-index/blob/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/us/nj/DVRPC_2025_GloucestorNJ.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/f74ebdd1ed2f8ef5b13d06c6238e51e7cc069a80/sources/north-america/us/nj/DVRPC_2025_GloucestorNJ.geojson)

  ### Removed (1)
  - **Fairfax County Orthoimagery (2025)** (`Fairfax_VA_2025`)

## 0.1.10

### Patch Changes

- Update Editor Layer Index data ([`5df1a63`](https://github.com/osmlab/editor-layer-index/commit/5df1a638d1a16b0c5cb5af07585910ae64845274) → [`729485b`](https://github.com/osmlab/editor-layer-index/commit/729485b2ca83e8c57db4e10161a53cbf29fa85c7), [compare](https://github.com/osmlab/editor-layer-index/compare/5df1a638d1a16b0c5cb5af07585910ae64845274...729485b2ca83e8c57db4e10161a53cbf29fa85c7)).

  Upstream commits:

  - [`1493758`](https://github.com/osmlab/editor-layer-index/commit/1493758890e4a9e4712fd8c76ab424ff7b3982cc) Add Langley City 2025 imagery ([#3046](https://github.com/osmlab/editor-layer-index/pull/3046))
  - [`44a5892`](https://github.com/osmlab/editor-layer-index/commit/44a58928eee1547d328207b416b48767b47c6a48) Add City of Courtenay Orthoimagery 2016-2022 ([#3049](https://github.com/osmlab/editor-layer-index/pull/3049))
  - [`a581c56`](https://github.com/osmlab/editor-layer-index/commit/a581c560c69c651feda02fe30adc6ed161648993) Add Delta, BC Orthoimagery 2008-2022 ([#3050](https://github.com/osmlab/editor-layer-index/pull/3050))
  - [`729485b`](https://github.com/osmlab/editor-layer-index/commit/729485b2ca83e8c57db4e10161a53cbf29fa85c7) Sync WMS sources [skip travis] ([#3055](https://github.com/osmlab/editor-layer-index/pull/3055))

  ### Added (13)
  - **City of Courtenay Orthoimagery (2016)** (`Courtenay_2016`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Courtenay_2016.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Courtenay_2016.geojson)
  - **City of Courtenay Orthoimagery (2018)** (`Courtenay_2018`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Courtenay_2018.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Courtenay_2018.geojson)
  - **City of Courtenay Orthoimagery (2020)** (`Courtenay_2020`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Courtenay_2020.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Courtenay_2020.geojson)
  - **City of Courtenay Orthoimagery (2022)** (`Courtenay_2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Courtenay_2022.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Courtenay_2022.geojson)
  - **City of Langley Aerial Imagery (2025)** (`Langley_City_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/City_Of_Langley_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/City_Of_Langley_2025.geojson)
  - **Delta Orthoimagery (2006)** (`Delta_2006`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2006.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2006.geojson)
  - **Delta Orthoimagery (2008)** (`Delta_2008`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2008.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2008.geojson)
  - **Delta Orthoimagery (2010)** (`Delta_2010`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2010.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2010.geojson)
  - **Delta Orthoimagery (2012)** (`Delta_2012`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2012.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2012.geojson)
  - **Delta Orthoimagery (2016)** (`Delta_2016`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2016.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2016.geojson)
  - **Delta Orthoimagery (2018)** (`Delta_2018`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2018.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2018.geojson)
  - **Delta Orthoimagery (2020)** (`Delta_2020`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2020.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2020.geojson)
  - **Delta Orthoimagery (2022)** (`Delta_2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2022.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/ca/bc/Delta_2022.geojson)

  ### Updated (1)
  - **DVRPC Orthoimagery 2020 - Camden County (1ft)** (`DVRPC_2020_CamdenNJ`) — [source](https://github.com/osmlab/editor-layer-index/blob/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/us/nj/DVRPC_2020_CamdenNJ.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/729485b2ca83e8c57db4e10161a53cbf29fa85c7/sources/north-america/us/nj/DVRPC_2020_CamdenNJ.geojson)

## 0.1.9

### Patch Changes

- Update Editor Layer Index data ([`bd0af36`](https://github.com/osmlab/editor-layer-index/commit/bd0af364c4393e91fc745735e04cd6ad559dce39) → [`5df1a63`](https://github.com/osmlab/editor-layer-index/commit/5df1a638d1a16b0c5cb5af07585910ae64845274), [compare](https://github.com/osmlab/editor-layer-index/compare/bd0af364c4393e91fc745735e04cd6ad559dce39...5df1a638d1a16b0c5cb5af07585910ae64845274)).

  Upstream commits:

  - [`034c480`](https://github.com/osmlab/editor-layer-index/commit/034c48031b60609c6170301e5114f130400445dc) Add Bozeman 2026 imagery
  - [`269e933`](https://github.com/osmlab/editor-layer-index/commit/269e9333bf08e7d754f49cbd6be48263a925942e) Sync WMS sources [skip travis] ([#3038](https://github.com/osmlab/editor-layer-index/pull/3038))
  - [`923a71e`](https://github.com/osmlab/editor-layer-index/commit/923a71ec8b2499b7a613ea09bf67e13741fde0aa) Add Loudoun County imagery 2025/26
  - [`d866894`](https://github.com/osmlab/editor-layer-index/commit/d866894459cc840db7605badc4b381704a6bd2c1) Update url for Eureka imagery
  - [`77dbdde`](https://github.com/osmlab/editor-layer-index/commit/77dbddeeee309e905fd3cf7314d042d9a62373f2) Update California sources
  - [`ce54c71`](https://github.com/osmlab/editor-layer-index/commit/ce54c7170cced81aa1db345d7f18e8be5db44d51) Fix geometry for Sonoma County
  - [`d83b094`](https://github.com/osmlab/editor-layer-index/commit/d83b094ef83ebc93500e645ebdd30e00ff698fb9) wms -> tms
  - [`bc5c9ad`](https://github.com/osmlab/editor-layer-index/commit/bc5c9ad052a85fbd3e3338b62c92354e2f7fe46b) Update USDA sources
  - [`5ba0fa4`](https://github.com/osmlab/editor-layer-index/commit/5ba0fa4c54858defaa1fbbcd651f8b220236d1f5) Update name
  - [`c3f5b78`](https://github.com/osmlab/editor-layer-index/commit/c3f5b78cc1a7c6d2203a7aabe4146c35586df458) Fix geometry
  - [`4a86214`](https://github.com/osmlab/editor-layer-index/commit/4a86214a9976dba437d250e2c27507ee3a6d908e) Kendall county il imagery ([#3037](https://github.com/osmlab/editor-layer-index/pull/3037))
  - [`36b1f81`](https://github.com/osmlab/editor-layer-index/commit/36b1f81059f19ec26e4e5489c148493033d7593b) Update Zurich WMS to their new format ([#3043](https://github.com/osmlab/editor-layer-index/pull/3043))
  - [`bac1ef9`](https://github.com/osmlab/editor-layer-index/commit/bac1ef99e9b17ac55ac739b0e0208d591c24905e) Improved Stadt_Bern-Orthofotos-2023 polygon ([#2964](https://github.com/osmlab/editor-layer-index/pull/2964))
  - [`2133faf`](https://github.com/osmlab/editor-layer-index/commit/2133faf5d9befcb6fd9cdf79ba5e89ab14f0c545) fix(de): migrate dead Saxony attribution URLs to GeoMIS ([#3041](https://github.com/osmlab/editor-layer-index/pull/3041)) ([#3006](https://github.com/osmlab/editor-layer-index/pull/3006))
  - [`f6788de`](https://github.com/osmlab/editor-layer-index/commit/f6788de5b2d0d9f8f438b0c281bfdbb101dcdd2c) fix(scripts): unpack test_url() result so URL checks actually fire ([#3042](https://github.com/osmlab/editor-layer-index/pull/3042))
  - [`854fef3`](https://github.com/osmlab/editor-layer-index/commit/854fef3bdf89743a8b587cc7f7e9698bc9a708d9) fix(no): replace dead icon URLs for Fiskeridirektoratet and Kystverket ([#3044](https://github.com/osmlab/editor-layer-index/pull/3044))
  - [`9dbec9b`](https://github.com/osmlab/editor-layer-index/commit/9dbec9b5837b7b04fc9f4a272195ac0cfa1b2e60) Sync WMS sources [skip travis] ([#3045](https://github.com/osmlab/editor-layer-index/pull/3045))
  - [`5df1a63`](https://github.com/osmlab/editor-layer-index/commit/5df1a638d1a16b0c5cb5af07585910ae64845274) Remove support for HTML attribution ([#3040](https://github.com/osmlab/editor-layer-index/pull/3040))

  ### Added (23)
  - **City of Bozeman Aerial Photography (2026)** (`Bozeman_MT_2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/mt/Bozeman_MT_2026.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/mt/Bozeman_MT_2026.geojson)
  - **City of Manteca Orthoimagery (2025)** (`Manteca_CA_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Manteca_CA_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Manteca_CA_2025.geojson)
  - **City of Roseville Orthoimagery (2026)** (`Roseville_CA_2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Roseville_CA_2026.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Roseville_CA_2026.geojson)
  - **Kendall County 2020 Aerial Imagery** (`Kendall_IL_2020`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/il/Kendall_IL_2020.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/il/Kendall_IL_2020.geojson)
  - **Kendall County 2022 Aerial Imagery** (`Kendall_IL_2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/il/Kendall_IL_2022.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/il/Kendall_IL_2022.geojson)
  - **Kendall County 2024 Aerial Imagery** (`Kendall_IL_2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/il/Kendall_IL_2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/il/Kendall_IL_2024.geojson)
  - **Kendall County 2026 Aerial Imagery** (`Kendall_IL_2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/il/Kendall_IL_2026.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/il/Kendall_IL_2026.geojson)
  - **Loudoun County Orthoimagery (2025)** (`Loudoun_VA_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/va/Loudoun_VA_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/va/Loudoun_VA_2025.geojson)
  - **Loudoun County Orthoimagery (2026)** (`Loudoun_VA_2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/va/Loudoun_VA_2026.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/va/Loudoun_VA_2026.geojson)
  - **NRCS Alaska Imagery (2023)** (`NRCS_Alaska_2023`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ak/NRCS_Alaska_2023.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ak/NRCS_Alaska_2023.geojson)
  - **NRCS American Samoa Imagery (2022)** (`NRCS_American_Samoa_2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/as/NRCS_American_Samoa_2022.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/as/NRCS_American_Samoa_2022.geojson)
  - **NRCS American Samoa Imagery (2024)** (`NRCS_American_Samoa_2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/as/NRCS_American_Samoa_2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/as/NRCS_American_Samoa_2024.geojson)
  - **NRCS Delta Junction Orthoimagery (2021)** (`NRCS_Delta_Junction_2021`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ak/NRCS_Delta_Junction_2021.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ak/NRCS_Delta_Junction_2021.geojson)
  - **NRCS Guam Imagery (2022)** (`NRCS_Guam_2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/gu/NRCS_Guam_2022.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/gu/NRCS_Guam_2022.geojson)
  - **NRCS Hawaii Imagery (2022)** (`NRCS_Hawaii_2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/hi/NRCS_Hawaii_2022.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/hi/NRCS_Hawaii_2022.geojson)
  - **NRCS Marshall Islands Imagery (2023)** (`NRCS_Marshall_Islands_2023`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/mh/NRCS_Marshall_Islands_2023.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/mh/NRCS_Marshall_Islands_2023.geojson)
  - **NRCS Northern Mariana Islands Imagery (2022)** (`NRCS_CNMI_2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/mp/NRCS_CNMI_2022.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/mp/NRCS_CNMI_2022.geojson)
  - **NRCS Northern Mariana Islands Imagery (2024)** (`NRCS_CNMI_2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/mp/NRCS_CNMI_2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/mp/NRCS_CNMI_2024.geojson)
  - **NRCS Northwest Hawaiian Islands Imagery (2022)** (`NRCS_Northwest_Hawaiian_Islands_2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/hi/NRCS_Northwest_Hawaiian_Islands_2022.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/hi/NRCS_Northwest_Hawaiian_Islands_2022.geojson)
  - **NRCS Palau Imagery (2022)** (`NRCS_Palau_2022`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/pw/NRCS_Palau_2022.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/oceania/pw/NRCS_Palau_2022.geojson)
  - **San Bernardino County Orthoimagery (2025)** (`San_Bernardino_CA_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/San_Bernardino_CA_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/San_Bernardino_CA_2025.geojson)
  - **San Bernardino County Orthoimagery (2026)** (`San_Bernardino_CA_2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/San_Bernardino_CA_2026.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/San_Bernardino_CA_2026.geojson)
  - **Sonoma County Orthoimagery (2025)** (`Sonoma_CA_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Sonoma_CA_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Sonoma_CA_2025.geojson)

  ### Updated (42)
  - **City of Bozeman Aerial Photography (2025)** (`Bozeman_MT_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/mt/Bozeman_MT_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/mt/Bozeman_MT_2025.geojson)
  - **City of Eureka Orthoimagery (2023)** (`Eureka_CA_2023`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Eureka_CA_2023.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Eureka_CA_2023.geojson)
  - **City of Manteca Orthoimagery (2024)** (`Manteca_CA_2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Manteca_CA_2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Manteca_CA_2024.geojson)
  - **City of Roseville Orthoimagery (2025)** (`Roseville_CA_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Roseville_CA_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Roseville_CA_2025.geojson)
  - **City of Santa Rosa Orthoimagery (2025)** (`Santa_Rosa_CA_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Santa_Rosa_CA_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Santa_Rosa_CA_2025.geojson)
  - **City of Stockton Orthoimagery (2023)** (`Stockton_CA_2023`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Stockton_CA_2023.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/Stockton_CA_2023.geojson)
  - **DVRPC Orthoimagery 2020 - Camden County (1ft)** (`DVRPC_2020_CamdenNJ`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/nj/DVRPC_2020_CamdenNJ.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/nj/DVRPC_2020_CamdenNJ.geojson)
  - **DVRPC Orthoimagery 2025 - Bucks County (1ft)** (`DVRPC_2025_BucksPA`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/pa/DVRPC_2025_BucksPA.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/pa/DVRPC_2025_BucksPA.geojson)
  - **DVRPC Orthoimagery 2025 - Gloucestor County (1ft)** (`DVRPC_2025_GloucestorNJ`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/nj/DVRPC_2025_GloucestorNJ.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/nj/DVRPC_2025_GloucestorNJ.geojson)
  - **Fiskeridirektoratet Aquaculture overlay** (`fiskeridir-akvakultur`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/no/FiskeridirektoratetAquacultureoverlay.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/no/FiskeridirektoratetAquacultureoverlay.geojson)
  - **Kanton Zurich, Oberflächenschummerung 2014 50cm** (`OGDLidarZH-DOM`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_dom_hillshade_2014_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_dom_hillshade_2014_wms.geojson)
  - **Kanton Zurich, Oberflächenschummerung 2017** (`OGDLidarZH-DOM-2017`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_dom_hillshade_2017_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_dom_hillshade_2017_wms.geojson)
  - **Kanton Zurich, Orthofoto ZH Frühjahr 2015/16 RGB 10cm** (`OGDOrthoZH2016`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2016_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2016_wms.geojson)
  - **Kanton Zurich, Orthofoto ZH Frühjahr 2021 RGB 5cm** (`OGDOrthoZH2021`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2021_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2021_wms.geojson)
  - **Kanton Zurich, Orthofoto ZH Sommer 2014/15 RGB 10cm** (`OGDOrthoZH2015`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2015_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2015_wms.geojson)
  - **Kanton Zurich, Orthofoto ZH Sommer 2018 RGB 10cm** (`OGDOrthoZH2018`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2018_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2018_wms.geojson)
  - **Kanton Zurich, Orthofoto ZH Sommer 2020 RGB 5cm** (`OGDOrthoZH2020`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2020_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2020_wms.geojson)
  - **Kanton Zurich, Orthofoto ZH Sommer 2024 RGB 5cm** (`OGDOrthoZH2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2024_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_ortho_2024_wms.geojson)
  - **Kanton Zurich, Terrainschummerung 2014 50cm** (`OGDLidarZH-DTM`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_dtm_hillshade_2014_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_dtm_hillshade_2014_wms.geojson)
  - **Kanton Zurich, Terrainschummerung 2017** (`OGDLidarZH-DTM-2017`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_dtm_hillshade_2017_wms.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/ch/Kanton_Zurich_dtm_hillshade_2017_wms.geojson)
  - **Köln TrueDOP 2024** (`Koeln-TrueDOP-2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Köln-TrueDOP-2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Köln-TrueDOP-2024.geojson)
  - **Kystverket Navigational Aid overlay** (`kystverket-navigasjon`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/no/KystverketNavigationalAidoverlay.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/no/KystverketNavigationalAidoverlay.geojson)
  - **Loudoun County Orthoimagery (2024)** (`Loudoun_VA_2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/va/Loudoun_VA_2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/va/Loudoun_VA_2024.geojson)
  - **National Agriculture Imagery Program (HI)** (`USDA-NAIP-HI`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/hi/USDA-NAIP-HI.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/hi/USDA-NAIP-HI.geojson)
  - **National Agriculture Imagery Program (PR)** (`USDA-NAIP-PR`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/pr/USDA-NAIP-PR.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/pr/USDA-NAIP-PR.geojson)
  - **PMGSY GeoSadak - India Rural Roads Open Data** (`India-PMGSY`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/asia/in/India-PMGSY.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/asia/in/India-PMGSY.geojson)
  - **San Bernardino County Orthoimagery (2023)** (`San_Bernardino_CA_2023`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/San_Bernardino_CA_2023.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/San_Bernardino_CA_2023.geojson)
  - **San Bernardino County Orthoimagery (2024)** (`San_Bernardino_CA_2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/San_Bernardino_CA_2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/north-america/us/ca/San_Bernardino_CA_2024.geojson)
  - **Saxony borders and parcels** (`GEOSN-Flurstuecke`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-borders-and-parcels.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-borders-and-parcels.geojson)
  - **Saxony contour lines** (`GEOSN-DGM-CL`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-digitalterrainmodel-contour-lines.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-digitalterrainmodel-contour-lines.geojson)
  - **Saxony historical aerial imagery 2005** (`GEOSN-DOP-2005`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2005.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2005.geojson)
  - **Saxony historical aerial imagery 2006-2008** (`GEOSN-DOP-2006_2008`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2006-2008.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2006-2008.geojson)
  - **Saxony historical aerial imagery 2009-2011** (`GEOSN-DOP-2009_2011`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2009-2011.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2009-2011.geojson)
  - **Saxony historical aerial imagery 2012-2014** (`GEOSN-DOP-2012_2014`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2012-2014.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2012-2014.geojson)
  - **Saxony historical aerial imagery 2015-2017** (`GEOSN-DOP-2015_2017`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2015-2017.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2015-2017.geojson)
  - **Saxony historical aerial imagery 2023-2024** (`GEOSN-DOP-2023_2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2023-2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-historic-2023-2024.geojson)
  - **Saxony latest aerial imagery** (`GEOSN-DOP-RGB`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-latest.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-latest.geojson)
  - **Saxony latest aerial imagery infrared** (`GEOSN-DOP-CIR`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-latest-infrared.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-latest-infrared.geojson)
  - **Saxony raw aerial imagery** (`GEOSN-ROHDOP-RGB`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-raw.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-DOP20-raw.geojson)
  - **Saxony shaded ground** (`GEOSN-DGM-SG`) — [source](https://github.com/osmlab/editor-layer-index/blob/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-digitalterrainmodel-ground.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/5df1a638d1a16b0c5cb5af07585910ae64845274/sources/europe/de/Saxony-digitalterrainmodel-ground.geojson)
  - …and 2 more

  ### Removed (8)
  - **USDA American Samoa Imagery (2022)** (`USDA_American_Samoa_2022`)
  - **USDA Delta Junction Orthoimagery (2021)** (`USDA_Delta_Junction_2021`)
  - **USDA Guam Imagery (2022)** (`USDA_Guam_2022`)
  - **USDA Hawaii Imagery (2022)** (`USDA_Hawaii_2022`)
  - **USDA Marshall Islands Imagery (2023)** (`USDA_Marshall_Islands_2023`)
  - **USDA Northern Mariana Islands Imagery (2022)** (`USDA_CNMI_2022`)
  - **USDA Northwest Hawaiian Islands Imagery (2022)** (`USDA_Northwest_Hawaiian_Islands_2022`)
  - **USDA Palau Imagery (2022)** (`USDA_Palau_2022`)

## 0.1.8

### Patch Changes

- Update Editor Layer Index data (upstream [`bd0af36`](https://github.com/osmlab/editor-layer-index/commit/bd0af364c4393e91fc745735e04cd6ad559dce39)).

  ### Added (12)
  - **City of Maple Ridge Orthoimagery (2025)** (`Maple-Ridge-RGB-2025`)
  - **FÖMI orthophoto 2016 (WEBP)** (`FOMI_2016`)
  - **FÖMI orthophoto 2016 leaf-off 20cm (webp)** (`FOMI_2016_leafoff_20cm`)
  - **GeoDK Aerial Imagery** (`GeoDanmark_Orthophoto_Spring_Septima`)
  - **GST Cadastral Parcels Map INSPIRE** (`Geodatastyrelsen_Cadastral_Parcels_INSPIRE`)
  - **KDS Screen Map** (`Klimadatastyrelsen_Screen_Map`)
  - **KDS Surface Shadow Map (40 cm)** (`Klimadatastyrelsen_Surface_Shadow_40cm`)
  - **KDS Terrain Shadow Map (40 cm)** (`Klimadatastyrelsen_Terrain_Shadow_40cm`)
  - **KDS Topography Map (DTK25)** (`Klimadatastyrelsen_Topography_DTK25`)
  - **Los Alamos County Orthoimagery (2018)** (`Los_Alamos_2018`)
  - **Los Alamos County Orthoimagery (2022)** (`Los_Alamos_2022`)
  - **Los Alamos County Orthoimagery (2025)** (`Los_Alamos_2025`)

  ### Updated (12)
  - **CAPCOG Imagery (2022)** (`capcog_2022`)
  - **City of Maple Ridge Orthoimagery (2023)** (`Maple-Ridge-RGB-2023`)
  - **ETCOG Imagery (2024)** (`ETCOG24_NC_6in`)
  - **National Agriculture Imagery Program** (`USDA-NAIP`)
  - **OpenStreetMap GPS traces** (`osm-gps`)
  - **Sóskút, Pusztazámor, Tárnok, Diósd orthophoto 2017** (`Soskut_Pusztazamor_Tarnok_Diosd_orto_2017`)
  - **StratMap Balmorhea & Davis Mountain State Parks Imagery (2020)** (`StratMap20_NC_6in_Balmorhea_Davis_Mountians`)
  - **StratMap Brazos County Imagery (2019)** (`brazos_county_2019_wms`)
  - **StratMap CapArea & McLennan Imagery (Natural Color 2020)** (`Stratmap20_NCCIR_CapArea_McLennan`)
  - **StratMap CapArea Imagery (2019)** (`caparea_2019_wms`)
  - **StratMap CapArea, Brazos & Kerr Imagery (Natural Color 2021)** (`StratMap21_NCCIR_CapArea_Brazos_Kerr`)
  - **TX: Smith County Imagery 2019** (`smith_county_2019_wms`)

  ### Removed (16)
  - **Los Alamos County Orthoimagery 2018 (1in)** (`Los_Alamos_1in_2018`)
  - **Los Alamos County Orthoimagery 2018 (3in)** (`Los_Alamos_3in_2018`)
  - **Los Alamos County Orthoimagery 2022 (3in)** (`Los_Alamos_3in_2022`)
  - **Northern New Mexico NAIP 2022 (Infrared)** (`Los_Alamos_NAIP_CIR_2022`)
  - **SDFI Aerial Imagery** (`Geodatastyrelsen_Denmark`)
  - **SDFI Cadastral Parcels INSPIRE View** (`Geodatastyrelsen_Cadastral_Parcels_INSPIRE_View`)
  - **SDFI DTK Map25** (`Geodatastyrelsen_DTK_Kort25`)
  - **SDFI Screenmap** (`Geodatastyrelsen_Skaermkort`)
  - **SDFI Surface Shadow Map (40 cm)** (`SDFE_Overflade_Skyggekort_40cm`)
  - **SDFI Terrain Shadow Map (40 cm)** (`SDFE_Terraen_Skyggekort_40cm`)
  - **TX: City of Amarillo Imagery 2015** (`amarillo_2016_wms`)
  - **TX: City of El Paso Imagery 2015** (`el_paso_2015_wms`)
  - **TX: City of Georgetown Imagery 2015** (`georgetown_2016_wms`)
  - **TX: City of Lubbock Imagery 2015** (`lubbock_2016_wms`)
  - **TX: Dallas and Fort Worth Imagery 2015** (`dallas_fort_worth_2016_wms`)
  - **TX: San Antonio River Authority Imagery 2016** (`san_antonio_river_2016_wms`)

## 0.1.7

### Patch Changes

- Update Editor Layer Index data (automated refresh).

  ### Updated (4)
  - **Köln TrueDOP 2024** (`Koeln-TrueDOP-2024`)
  - **MNS LiDAR HD IGN** (`fr.ign.mnslidarhd`)
  - **MNT LiDAR HD IGN** (`fr.ign.mntlidarhd`)
  - **SANDAG 2020 Aerial Imagery** (`SANDAG_2020`)

## 0.1.6

### Patch Changes

- Update Editor Layer Index data ([`ac5d4d1`](https://github.com/osmlab/editor-layer-index/commit/ac5d4d15eb2113100a0ac468c5353c6bc34f29bd) → [`3b6e809`](https://github.com/osmlab/editor-layer-index/commit/3b6e8095fe5fd87493467d279c9f21cd854bcb8d), [compare](https://github.com/osmlab/editor-layer-index/compare/ac5d4d15eb2113100a0ac468c5353c6bc34f29bd...3b6e8095fe5fd87493467d279c9f21cd854bcb8d)).

  Upstream commits:

  - [`c03a0e3`](https://github.com/osmlab/editor-layer-index/commit/c03a0e3f5fdfe88feadba10de4365d3cd1d98656) fix wrong/dead link
  - [`df3a28a`](https://github.com/osmlab/editor-layer-index/commit/df3a28ab00125e7d51a2fb238dce6f2bf9b6795d) Add Crook County 2026 imagery
  - [`77a6f3b`](https://github.com/osmlab/editor-layer-index/commit/77a6f3bc5a5e54ab509ac48b5d1cc2368f2dd657) Use consistent labeling for MSB
  - [`bd489db`](https://github.com/osmlab/editor-layer-index/commit/bd489db77e856dc44bf55b81d0b5152630c9adb5) Update Henrico, VA, USA aerial imagery ([#3024](https://github.com/osmlab/editor-layer-index/pull/3024))
  - [`855ccff`](https://github.com/osmlab/editor-layer-index/commit/855ccff330857a344fe0b8dba135f5934f54d554) Fix attribution URLs ([#3022](https://github.com/osmlab/editor-layer-index/pull/3022))
  - [`1b4320a`](https://github.com/osmlab/editor-layer-index/commit/1b4320a2455ecfde3b4b0c59e5431ae24a97ef57) Bump pytest from 9.1.0 to 9.1.1 ([#2990](https://github.com/osmlab/editor-layer-index/pull/2990))
  - [`3b6e809`](https://github.com/osmlab/editor-layer-index/commit/3b6e8095fe5fd87493467d279c9f21cd854bcb8d) Bump aiohttp from 3.14.1 to 3.14.3 ([#3018](https://github.com/osmlab/editor-layer-index/pull/3018))

  ### Added (2)
  - **Crook County Orthoimagery (2026)** (`Crook-2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/or/Crook-2026.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/or/Crook-2026.geojson)
  - **Henrico County Aerial Imagery (2026)** (`Henrico_VA_2026`) — [source](https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/va/Henrico_VA_2026.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/va/Henrico_VA_2026.geojson)

  ### Updated (20)
  - **Bytom: Buildings** (`Bytom-buildings`) — [source](https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomBuildings.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomBuildings.geojson)
  - **Bytom: Fotoplan 2014 (aerial image)** (`Bytom-2014`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomFotoplan2014(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomFotoplan2014(aerialimage).geojson>)
  - **Bytom: Orthophotomap 2012 (aerial image)** (`Bytom-2012`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomOrthophotomap2012(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomOrthophotomap2012(aerialimage).geojson>)
  - **Bytom: Orthophotomap 2016 (aerial image)** (`Bytom-2016`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomOrthophotomap2016(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomOrthophotomap2016(aerialimage).geojson>)
  - **Bytom: Orthophotomap 2018 (aerial image)** (`Bytom-2018`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomOrthophotomap2018(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomOrthophotomap2018(aerialimage).geojson>)
  - **Bytom: Orthophotomap 2021 (aerial image)** (`Bytom-2021`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomOrthophotomap2021(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/BytomOrthophotomap2021(aerialimage).geojson>)
  - **Crook County Orthoimagery (2023)** (`Crook-2023`) — [source](https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/or/Crook-2023.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/or/Crook-2023.geojson)
  - **Gliwice: Buildings** (`Gliwice-buildings`) — [source](https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceBuildings.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceBuildings.geojson)
  - **Gliwice: Orthophotomap 2003 (aerial image)** (`Gliwice-2003`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2003(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2003(aerialimage).geojson>)
  - **Gliwice: Orthophotomap 2009 (aerial image)** (`Gliwice-2009`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2009(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2009(aerialimage).geojson>)
  - **Gliwice: Orthophotomap 2013 (aerial image)** (`Gliwice-2013`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2013(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2013(aerialimage).geojson>)
  - **Gliwice: Orthophotomap 2017 (aerial image)** (`Gliwice-2017`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2017(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2017(aerialimage).geojson>)
  - **Gliwice: Orthophotomap 2018 (aerial image)** (`Gliwice-2018`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2018(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2018(aerialimage).geojson>)
  - **Gliwice: Orthophotomap 2020 (aerial image)** (`Gliwice-2020`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2020(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2020(aerialimage).geojson>)
  - **Gliwice: Orthophotomap 2021 (aerial image)** (`Gliwice-2021`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2021(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/GliwiceOrthophotomap2021(aerialimage).geojson>)
  - **Henrico County Aerial Imagery (2024)** (`Henrico_VA_2024`) — [source](https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/va/Henrico_VA_2024.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/va/Henrico_VA_2024.geojson)
  - **Henrico County Aerial Imagery (2025)** (`Henrico_VA_2025`) — [source](https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/va/Henrico_VA_2025.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/va/Henrico_VA_2025.geojson)
  - **MSB Aerial Imagery - Area 1 (2019)** (`MSB_Aerial_2019`) — [source](https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/ak/MSB_Aerial_2019.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/north-america/us/ak/MSB_Aerial_2019.geojson)
  - **OpenTopoMap** (`OpenTopoMap`) — [source](https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/world/OpenTopoMap.geojson) · [history](https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/world/OpenTopoMap.geojson)
  - **Poznań: Orthophotomap Bieżąca (aerial image)** (`poznan-ortofotomapaBiezaca`) — [source](<https://github.com/osmlab/editor-layer-index/blob/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/PoznaOrthophotomapBiezaca(aerialimage).geojson>) · [history](<https://github.com/osmlab/editor-layer-index/commits/3b6e8095fe5fd87493467d279c9f21cd854bcb8d/sources/europe/pl/PoznaOrthophotomapBiezaca(aerialimage).geojson>)

## 0.1.5

### Patch Changes

- Update Editor Layer Index data (upstream [`ac5d4d1`](https://github.com/osmlab/editor-layer-index/commit/ac5d4d15eb2113100a0ac468c5353c6bc34f29bd)).

  ### Added (2)
  - **ACTmapi Imagery Dec 2025** (`ACT202512`)
  - **ACTmapi Imagery Mar 2026** (`ACT202603`)

  ### Updated (5)
  - **ACTmapi Imagery May 2025** (`ACT202505`)
  - **DVRPC Orthoimagery 2020 - Delaware County (1ft)** (`DVRPC_2020_DelawarePA`)
  - **DVRPC Orthoimagery 2020 - Gloucestor County (1ft)** (`DVRPC_2020_GloucestorNJ`)
  - **DVRPC Orthoimagery 2025 - Gloucestor County (1ft)** (`DVRPC_2025_GloucestorNJ`)
  - **SANDAG 2020 Aerial Imagery** (`SANDAG_2020`)

## 0.1.4

### Patch Changes

- a13083e: Point homepage at the live GitHub Pages preview and document the npmx package page.

## 0.1.3

### Patch Changes

- Release (patch).

## 0.1.2

### Patch Changes

- Release (patch).

## 0.1.1

### Patch Changes

- Release (patch).

## 0.1.0

### Minor Changes

- c982583: Initial release: use the OSM Editor Layer Index as background/imagery layers in
  react-map-gl and maplibre-gl-js, with viewport + country filtering, API-key gating,
  and a lazily-loaded coverage-geometry table.
