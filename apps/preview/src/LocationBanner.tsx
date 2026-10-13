import * as countryCoder from '@rapideditor/country-coder'

/**
 * Says which countries the layer list is for. The demo detects the countries in
 * view with @rapideditor/country-coder and hands their codes to the package as
 * `filter.countryCodes`; the package itself ships no country lookup.
 */
export function LocationBanner({ codes }: { codes: string[] }) {
  return (
    <div className="loco-banner">
      <span className="loco-label">Listing layers for</span>
      {codes.length === 0 ? (
        <span className="loco-empty">no country in view — every layer whose box overlaps</span>
      ) : (
        <span className="loco-regions">
          {codes.map((code) => (
            <span className="loco-country" key={code}>
              {countryCoder.emojiFlag(code)} {countryCoder.feature(code)?.properties.nameEn ?? code}
            </span>
          ))}
          <span className="loco-country">🌍 worldwide layers</span>
        </span>
      )}
      <span
        className="loco-note"
        title="The package matches layers by bounding box, which also catches layers from far away whose box happens to overlap. Passing the countries in view as filter.countryCodes removes those. This demo finds the countries with @rapideditor/country-coder; the package has no country lookup built in."
      >
        Countries in view are detected by this demo (country-coder), not by the package ⓘ
      </span>
    </div>
  )
}
