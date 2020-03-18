console.log("[config:post-css] config loaded")

module.exports = ({ file, options, env }) => ({
  parser: file.extname === ".sss" ? "sugarss" : false,
  plugins: [
    require("postcss-import")({ root: file.dirname }),

    require("tailwindcss"),

    // options["postcss-preset-env"]
    //   ? require("postcss-preset-env")({ ...options["postcss-preset-env"] })
    //   : false,
    //
    // env === "production"
    //   ? require("cssnano")({ ...options.cssnano })
    //   : false,
    //
    // env === "production"
    //   ? require('@fullhuman/postcss-purgecss')({
    //     content: [
    //       '../src/**/*.html',
    //       '../src/**/*.jsx',
    //       '../src/**/*.tsx',
    //     ],
    //     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    //   })
    //   : false
  ]
});
