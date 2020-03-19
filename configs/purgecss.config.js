const path = require("path");
const PurgeFromTsx = require("./webpack/libs/purge-from-tsx");

console.log("[config:purge-css] config loaded");

module.exports = require("@fullhuman/postcss-purgecss")({
  content: [
    // "../src/**/*.html",
    // "../src/**/*.hbs",
    // "../src/**/*.jsx",
    // "../src/**/*.tsx",
    path.join(__dirname, "../src/pages/Root/components/Navigation.tsx"),
  ],
  extractors: [
    {
      extractor: PurgeFromTsx.extract,
      extensions: ['tsx']
    }
  ]
});