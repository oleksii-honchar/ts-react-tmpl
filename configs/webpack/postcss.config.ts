import { createRequire } from "module";

import { purgeCssConfig } from "./purgecss.config.ts";
import { blablo } from "../../scripts/blablo.ts";

const require = createRequire(import.meta.url);
const logHeader = "[post-css:config]".cyan;
blablo.log(logHeader, "loading config").finish();

export const postCssConfig = async (params: { file: any; options: any; env: any }) => {
  const mdlPostCssImport = require("postcss-import");
  const postCssImport = mdlPostCssImport({ root: params?.file?.dirname });

  let postCssPresetEnv: any = false;
  if (params.options["postcss-preset-env"]) {
    const mdl = require("postcss-preset-env");
    postCssPresetEnv = mdl({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    });
  }

  let cssNanoCfg: any = null;
  if (params.env === "production") {
    const mdlCssNano = require("cssnano");
    cssNanoCfg = mdlCssNano({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    });
  } else {
    cssNanoCfg = require("postcss-discard-comments");
  }

  return {
    plugins: [
      require("tailwindcss"),
      postCssImport,
      postCssPresetEnv,
      cssNanoCfg,
      params.env === "production" ? purgeCssConfig : false,
    ],
  };
};
