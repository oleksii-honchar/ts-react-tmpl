import type { StringIndex } from "src/typings/index.d.ts";
import { keyColors, paletteColors } from "./palette-page.data.ts";

function ColorHash({ color }: StringIndex) {
  return (
    <div
      className={`
        absolute bottom-0 left-0 px-1
        text-xs
      `}
    >
      {color}
    </div>
  );
}
function ColorShade({ shadeName }: StringIndex) {
  return (
    <div
      className={`
        absolute bottom-0 right-0 px-1
        text-xs
      `}
    >
      {shadeName}
    </div>
  );
}

function KeyColor({ name, textColor, bgColor, colorHash }: StringIndex) {
  return (
    <div
      className={`
      flex items-start justify-center w-full p-1
      text-md3-sys-light-${textColor}
      bg-md3-key-colors-${bgColor}
      shadow-md relative text-base
    `}
    >
      {name}
      <ColorHash color={colorHash} />
    </div>
  );
}
function PaletteColor({ name, textColor, bgColor, colorHash, shadeName }: StringIndex) {
  return (
    <div
      className={`
          flex items-start justify-start w-full p-1 h-16
          ${textColor}
          ${bgColor}
          relative text-[14px]
        `}
    >
      {name}
      <ColorHash color={colorHash} />
      <ColorShade shadeName={shadeName} />
    </div>
  );
}

function PaletteColorRow({ colorRow }: StringIndex) {
  return (
    <div className="flex flex-row shadow-md">
      {colorRow.map((color) => (
        <PaletteColor key={color.name + color.hash} {...color} />
      ))}
    </div>
  );
}
export function PalettePage() {
  return (
    <article>
      <h1 className="text-2xl font-bold py-6 text-md3-sys-light-on-surface">Palette</h1>
      <section>
        <h2 className="text-xl font-bold text-md3-sys-light-on-surface">Light Theme</h2>
        <section className="flex flex-wrap gap-6 py-4">
          <div className="flex items-stretch h-12 w-full gap-2 justify-between">
            {keyColors.map((color) => (
              <KeyColor key={color.name} {...color} />
            ))}
          </div>
          <div className="flex flex-col items-stretch w-full gap-2 justify-between">
            {paletteColors.map((colorRow, idx) => (
              <PaletteColorRow key={idx} colorRow={colorRow} />
            ))}
          </div>
        </section>
      </section>
    </article>
  );
}
