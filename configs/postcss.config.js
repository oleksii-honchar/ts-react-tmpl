const purgeCss = require('./purgecss.config');

console.log("[config:post-css] config loaded");

module.exports = ({ file, options, env }) => ({
  plugins: [
    require("postcss-import")({ root: file.dirname }),

    require("tailwindcss"),

    options["postcss-preset-env"]
      ? require("postcss-preset-env")({ ...options["postcss-preset-env"] })
      : false,

    env === "production"
      ? require("cssnano")({ ...options.cssnano })
      : require("postcss-discard-comments"),

    purgeCss,
  ]
});
