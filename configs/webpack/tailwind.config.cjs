/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
console.log(__dirname);
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
