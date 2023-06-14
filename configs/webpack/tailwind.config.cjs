/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { blablo } = require("../../scripts/blablo.ts");

const logHeader = "[tailwind-css:config]".cyan;
blablo.log(logHeader, "loading config").finish();

module.exports = {
  content: {
    files: ["./src/**/*.{html,js,ts,tsx,hbs}"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  prefix: "",
};
