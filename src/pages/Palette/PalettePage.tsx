import type { StringIndex } from "src/typings/index.d.ts";
import { keyColors, paletteColors, surfaceColors } from "./palette-page.data.ts";
import { Breadcrumbs } from "src/components/Breadcrumbs.tsx";

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
      ${textColor}
      ${bgColor}
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
      <Breadcrumbs data={["Palette", "Light Theme"]} />
      <section>
        <section className="flex flex-row flex-wrap">
          <section id="shades" className="flex flex-wrap gap-6 py-4 w-1/3">
            Shades
          </section>
          <section id="colors" className="flex flex-wrap gap-6 py-4 w-2/3">
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
            <div className="flex flex-col items-stretch w-full gap-2 justify-between">
              {surfaceColors.map((colorRow, idx) => (
                <PaletteColorRow key={idx} colorRow={colorRow} />
              ))}
            </div>
          </section>
        </section>
      </section>
    </article>
  );
}
