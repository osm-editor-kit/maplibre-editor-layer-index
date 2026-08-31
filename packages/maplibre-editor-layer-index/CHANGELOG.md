# @osm-editor-kit/maplibre-editor-layer-index

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
