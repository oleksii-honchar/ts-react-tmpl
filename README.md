 React app template (TS + Webpack)

# Base setup:

## General

- eslint for react, prettier, typescript
- conventional commit

## Webpack
- webpack multibuild for es2016 & es2022
- vendor external links
- ExtractCssChunksPlugin - to export css to separate file when `import` used inside js

## PostCSS

- `postcss-import` - to resolve dependencies
- `tailwindcss` - utility-based mini css framework [link](https://tailwindcss.com/)
- `postcss-preset-env` - enables stage-3 features for css
- `cssnano` - css minification
- `purge-css` - to remove unnecessary css styles (jsx supported)
- `postcss-discard-comments` - remove comments for dev mode

# Git hooks

Husky hooks in package.json doesn't work. You need to create separate hooks with the command below.

`./configs/commitlint.config.cjs`
```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
```
```bash
npm install husky --save-dev
npm install @commitlint/cli --save-dev
npm install @commitlint/config-conventional --save-dev
npx husky install # will add .husky folder w/o hooks! Also will change global git config hooksPath -> .husky
npx husky add .husky/pre-commit "npm run check:all"
npx husky add .husky/commit-msg "npx commitlint --edit $1 --config=./configs/commitlint.config.cjs"
```

## TODO

- resolve typecheck conflicts
- implement ie11 polyfills
