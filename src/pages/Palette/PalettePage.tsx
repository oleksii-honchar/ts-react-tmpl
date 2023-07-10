import type { StringIndex } from "src/typings/index.d.ts";
import { keyColors, paletteColors, surfaceColors } from "./palette-page.data.ts";
import { Breadcrumbs } from "src/components/Breadcrumbs.tsx";

function ColorHash({ color }: StringIndex) {
  return (
    <div
      className={`
        absolute bottom-0 left-0 px-1
        text-[10px]
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
        text-[10px]
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
      shadow-md relative
    `}
    >
      {name}
      <ColorHash color={colorHash} />
    </div>
  );
}

function PaletteColorPair({ colorPair }: StringIndex) {
  return (
    <div className="flex flex-col w-full drop-shadow-md">
      {colorPair.map((color, idx) => (
        <PaletteColor key={`col-pair-${idx}`} {...color} />
      ))}
    </div>
  );
}
function PaletteColor({ name, textColor, bgColor, colorHash, shadeName }: StringIndex) {
  return (
    <div
      className={`
          flex items-start justify-start w-full p-1 h-12 last:h-8
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

function PaletteColorCol({ colorCol }: StringIndex) {
  return (
    <div className="flex flex-col w-full gap-2">
      {colorCol.map((colorPair, idx) => (
        <PaletteColorPair key={`col-pair-${idx}`} colorPair={colorPair} />
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
          <section id="colors" className="flex flex-wrap gap-6 py-4 w-full">
            <div className="flex items-stretch h-12 w-full gap-2 justify-between">
              {keyColors.map((color) => (
                <KeyColor key={color.name} {...color} />
              ))}
            </div>
            <div className="flex items-stretch w-full gap-2 justify-between">
              {paletteColors.map((colorCol, idx) => (
                <PaletteColorCol key={`pal-col-${idx}`} colorCol={colorCol} />
              ))}
            </div>
            <div className="flex flex-col items-stretch w-full gap-2 justify-between"></div>
          </section>
        </section>
      </section>
    </article>
  );
}
