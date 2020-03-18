 React app template (TS + Webpack)

# Base setup:

## General

- eslint for react, prettier, typescript
- conventional commit

## Webpack
- webpack multibuild for es5 & es20
- vendor external links
- MiniCssExtractPlugin - to export css to separate file when `import` used inside js

## PostCSS

- `postcss-import` - to resolve dependencies
- `tailwindcss` - utility-based mini css framework [link](https://tailwindcss.com/)
- `postcss-preset-env` - enables stage-3 features for css
- `cssnano` - css minification

## TODO

- resolve typecheck conflicts
- implement ie11 polyfills
