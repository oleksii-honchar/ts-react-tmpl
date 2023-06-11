import { createRequire } from "module";

import { purgeCssConfig } from "./purgecss.config.ts";
import { blablo } from "../../scripts/blablo.ts";
import type { StringIndex } from "../../src/typings/index.d.ts";

const require = createRequire(import.meta.url);
const logHeader = "[post-css:config]".cyan;
blablo.log(logHeader, "loading config").finish();

export default function postCssConfig(params: { file: any; options: StringIndex; env: any }) {
  const mdlPostCssImport = require("postcss-import");
  const postCssImport = mdlPostCssImport({ root: params?.file?.dirname });

  let postCssPresetEnv: any = false;
  if (params.options.ctx["postcss-preset-env"]) {
    const mdl = require("postcss-preset-env");
    postCssPresetEnv = mdl(params.options?.ctx["postcss-preset-env"]);
  }

  let cssNanoCfg: any = null;
  if (params.env === "production") {
    const mdlCssNano = require("cssnano");
    cssNanoCfg = mdlCssNano(params.options?.ctx?.cssnano);
  } else {
    cssNanoCfg = require("postcss-discard-comments");
  }

  return {
    plugins: [
      "tailwindcss",
      postCssImport,
      postCssPresetEnv,
      cssNanoCfg,
      params.env === "production" ? purgeCssConfig : false,
    ],
  };
}
