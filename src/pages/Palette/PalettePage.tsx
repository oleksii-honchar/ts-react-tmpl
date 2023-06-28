import * as palette from "src/stylesheets/md3-design-tokens-v1.ts";

export function PalettePage() {
  return (
    <article>
      <h1 className="text-2xl font-bold py-6 text-md3-sys-light-on-surface">Palette</h1>
      <section>
        <h2 className="text-xl font-bold text-md3-sys-light-on-surface">Light Theme</h2>
        <section className="flex flex-wrap gap-4 py-2">
          <div className="flex items-stretch h-10 w-full gap-2">
            <div
              className={`
              flex items-center justify-center w-24
              text-md3-sys-light-on-primary
              bg-md3-key-colors-primary
              shadow-md
            `}
            >
              Primary
            </div>
            <div
              className={`
              flex items-center justify-center w-24
              text-md3-sys-light-on-secondary
              bg-md3-key-colors-secondary
              shadow-md
            `}
            >
              Secondary
            </div>
            <div
              className={`
              flex items-center justify-center w-24
              text-md3-sys-light-on-surface
              bg-md3-key-colors-neutral
              shadow-md
            `}
            >
              Neutral
            </div>
            <div
              className={`
              flex items-center justify-center w-24
              text-md3-sys-light-on-surface
              shadow-md border
              bg-md3-key-colors-neutral-variant
            `}
            >
              N. Variant
            </div>
          </div>
        </section>
      </section>
    </article>
  );
}
