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
      : false,

    // env === "production"
    //   ? require("@fullhuman/postcss-purgecss")({
    //     content: [
    //       "../src/**/*.html",
    //       "../src/**/*.jsx",
    //       "../src/**/*.tsx",
    //     ],
    //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    //   })
    //   : false
    require("@fullhuman/postcss-purgecss")({
      content: [
        "../src/**/*.html",
        "../src/**/*.hbs",
        "../src/**/*.jsx",
        "../src/**/*.tsx",
        "../src/pages/Root/components/Navigation.tsx"
      ],
    })

  ]
});
