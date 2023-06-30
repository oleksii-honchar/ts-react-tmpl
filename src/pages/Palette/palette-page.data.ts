import { nl } from "src/utils/native-lodash.ts";
import * as palette from "src/stylesheets/md3-design-tokens-v1.ts";

export const keyColors = [
  {
    name: "Primary",
    bgColor: "bg-md3-key-colors-primary",
    textColor: "text-md3-sys-light-on-primary",
    colorHash: nl.get(palette, "colors.md3.key-colors.primary"),
  },
  {
    name: "Secondary",
    bgColor: "bg-md3-key-colors-secondary",
    textColor: "text-md3-sys-light-on-secondary",
    colorHash: nl.get(palette, "colors.md3.key-colors.secondary"),
  },
  {
    name: "Neutral",
    bgColor: "bg-md3-key-colors-neutral",
    textColor: "text-md3-sys-light-on-surface",
    colorHash: nl.get(palette, "colors.md3.key-colors.neutral"),
  },
  {
    name: "N. Variant",
    bgColor: "bg-md3-key-colors-neutral-variant",
    textColor: "text-md3-sys-light-on-surface",
    colorHash: nl.get(palette, "colors.md3.key-colors.neutral-variant"),
  },
];

export const paletteColors = [
  [
    {
      name: "Primary",
      bgColor: "bg-md3-sys-light-primary",
      textColor: "text-md3-sys-light-on-primary",
      colorHash: nl.get(palette, "colors.md3.sys.light.primary"),
      shadeName: "P-40",
    },
    {
      name: "On Primary",
      bgColor: "bg-md3-ref-primary-primary99",
      textColor: "text-md3-sys-light-primary",
      colorHash: nl.get(palette, "colors.md3.ref.primary.primary99"),
      shadeName: "P-99",
    },
    {
      name: "Primary Container",
      bgColor: "bg-md3-sys-light-primary-container",
      textColor: "text-md3-sys-light-on-primary-container",
      colorHash: nl.get(palette, "colors.md3.sys.light.primary-container"),
      shadeName: "P-90",
    },
    {
      name: "On Primary Container",
      bgColor: "bg-md3-sys-light-on-primary-container",
      textColor: "text-md3-sys-light-on-primary",
      colorHash: nl.get(palette, "colors.md3.sys.light.on-primary-container"),
      shadeName: "P-10",
    },
  ],
  [
    {
      name: "Secondary",
      bgColor: "bg-md3-sys-light-secondary",
      textColor: "text-md3-sys-light-on-secondary",
      colorHash: nl.get(palette, "colors.md3.sys.light.secondary"),
      shadeName: "S-40",
    },
    {
      name: "On Secondary",
      bgColor: "bg-md3-ref-secondary-secondary99",
      textColor: "text-md3-sys-light-secondary",
      colorHash: nl.get(palette, "colors.md3.ref.secondary.secondary99"),
      shadeName: "S-99",
    },
    {
      name: "Secondary Container",
      bgColor: "bg-md3-sys-light-secondary-container",
      textColor: "text-md3-sys-light-on-secondary-container",
      colorHash: nl.get(palette, "colors.md3.sys.light.secondary-container"),
      shadeName: "S-90",
    },
    {
      name: "On Secondary Container",
      bgColor: "bg-md3-sys-light-on-secondary-container",
      textColor: "text-md3-sys-light-on-secondary",
      colorHash: nl.get(palette, "colors.md3.sys.light.on-secondary-container"),
      shadeName: "S-10",
    },
  ],
  [
    {
      name: "Error",
      bgColor: "bg-md3-sys-light-error",
      textColor: "text-md3-sys-light-on-error",
      colorHash: nl.get(palette, "colors.md3.sys.light.error"),
      shadeName: "Error-40",
    },
    {
      name: "On Error",
      bgColor: "bg-md3-ref-error-error99",
      textColor: "text-md3-sys-light-error",
      colorHash: nl.get(palette, "colors.md3.ref.error.error99"),
      shadeName: "Error-99",
    },
    {
      name: "Error Container",
      bgColor: "bg-md3-sys-light-error-container",
      textColor: "text-md3-sys-light-on-error-container",
      colorHash: nl.get(palette, "colors.md3.sys.light.error-container"),
      shadeName: "Error-90",
    },
    {
      name: "On Error Container",
      bgColor: "bg-md3-sys-light-on-error-container",
      textColor: "text-md3-sys-light-on-error",
      colorHash: nl.get(palette, "colors.md3.sys.light.on-error-container"),
      shadeName: "P-10",
    },
  ],
];

export const surfaceColors = [
  [
    {
      name: "Background",
      bgColor: "bg-md3-sys-light-background",
      textColor: "text-md3-sys-light-on-background",
      colorHash: nl.get(palette, "colors.md3.sys.light.background"),
      shadeName: "Neutral99",
    },
    {
      name: "On Background",
      bgColor: "bg-md3-sys-light-on-background",
      textColor: "text-md3-sys-light-background",
      colorHash: nl.get(palette, "colors.md3.sys.light.on-background"),
      shadeName: "Neutral-10",
    },
    {
      name: "Outline",
      bgColor: "bg-md3-sys-light-outline",
      textColor: "text-md3-sys-light-background",
      colorHash: nl.get(palette, "colors.md3.sys.light.outline"),
      shadeName: "NeutralVariant-50",
    },
    {
      name: "Outline Variant",
      bgColor: "bg-md3-sys-light-outline-variant",
      textColor: "text-md3-sys-light-on-surface",
      colorHash: nl.get(palette, "colors.md3.sys.light.outline-variant"),
      shadeName: "NeutralVariant-80",
    },
  ],
  [
    {
      name: "Surface",
      bgColor: "bg-md3-sys-light-surface",
      textColor: "text-md3-sys-light-on-surface",
      colorHash: nl.get(palette, "colors.md3.sys.light.surface"),
      shadeName: "Neutral-99",
    },
    {
      name: "On Surface",
      bgColor: "bg-md3-sys-light-on-surface",
      textColor: "text-md3-sys-light-surface",
      colorHash: nl.get(palette, "colors.md3.sys.light.on-surface"),
      shadeName: "Neutral-10",
    },
    {
      name: "Surface Variant",
      bgColor: "bg-md3-sys-light-surface-variant",
      textColor: "text-md3-sys-light-on-surface-variant",
      colorHash: nl.get(palette, "colors.md3.sys.light.surface-variant"),
      shadeName: "NeutralVariant-90",
    },
    {
      name: "On Surface Variant",
      bgColor: "bg-md3-sys-light-on-surface-variant",
      textColor: "text-md3-sys-light-surface",
      colorHash: nl.get(palette, "colors.md3.sys.light.on-surface-variant"),
      shadeName: "NeutralVariant-30",
    },
  ],
  [
    {
      name: "Surface Bright",
      bgColor: "bg-md3-sys-light-surface-bright",
      textColor: "text-md3-sys-light-on-surface-bright",
      colorHash: nl.get(palette, "colors.md3.sys.light.surface.bright"),
      shadeName: "N-98",
    },
    {
      name: "Surface Dim",
      bgColor: "bg-md3-sys-light-surface-dim",
      textColor: "text-md3-sys-light-on-surface-dim",
      colorHash: nl.get(palette, "colors.md3.sys.light.surface.dim"),
      shadeName: "N-98",
    },
  ],
];
