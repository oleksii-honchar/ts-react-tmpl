import path from "path";
import purgeCss from "@fullhuman/postcss-purgecss";

import { blablo } from "../../scripts/blablo.ts";
import { PurgeFromTsx } from "./libs/purge-from-tsx.ts";

import { getRootRepoDir } from "../../scripts/esm-utils.ts";

const logHeader = "[purge-css:config]".cyan;
blablo.log(logHeader, "loading config").finish();

// @ts-ignore
export const purgeCssConfig = purgeCss({
  content: [
    path.join(getRootRepoDir(), "src/**/*.html"),
    path.join(getRootRepoDir(), "src/**/*.hbs"),
    path.join(getRootRepoDir(), "src/**/*.jsx"),
    path.join(getRootRepoDir(), "src/**/*.tsx"),
  ],
  extractors: [
    {
      extractor: PurgeFromTsx.extract,
      extensions: ["tsx"],
    },
  ],
});
