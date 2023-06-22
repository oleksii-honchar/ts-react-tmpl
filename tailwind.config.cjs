/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { blablo } = require("./scripts/blablo.ts");

const m3DesignTokensV1 = require("./src/stylesheets/md3-design-tokens-v1.ts");

const logHeader = "[tailwind-css:config]".cyan;
blablo.log(logHeader, "loading config").finish();

module.exports = {
  content: {
    files: ["./src/**/*.{html,js,ts,tsx,hbs}"],
  },
  theme: {
    extend: {
      colors: m3DesignTokensV1.colors,
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  prefix: "",
};
