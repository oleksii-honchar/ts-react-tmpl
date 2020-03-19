const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

console.log("[config:webpack:snippet] Base loaded");

const pkg = require("../../package.json");

module.exports = (env) => {
  const outputSuff = env.TS_TARGET === "es5" ? "es5.js": "mjs";

  console.log(`[config:webpack:snippet] Base: processing "${env.TS_TARGET}" config`);

  return {
    mode: process.env.NODE_ENV,
    cache: true,
    devServer: {
      // http2: true,
      port: process.env.SERVE_PORT,
      contentBase: path.join(__dirname, "../../dist"),
      publicPath: "/assets/",
      writeToDisk: true,
    },
    entry: {
      app: "./src/index.tsx",
    },
    resolve: {
      extensions: [".js", ".jsx", ".html", ".ts", ".tsx", ".mjs"],
        modules: [
        "src",
        "node_modules",
      ],
      plugins: [
        new TsConfigPathsPlugin({
          configFile: path.join(__dirname, `../tsconfig.${env.TS_TARGET}.json`),
          logLevel: "info"
        })
      ]
    },
    output: {
      path: path.join(__dirname, "../../dist"),
      filename: `[name].bundle.${outputSuff}`,
      chunkFilename: `[name].bundle.${outputSuff}`,
      sourceMapFilename: `[name].${env.TS_TARGET}.map`,
      publicPath: "./",
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
      new LodashModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          LOG_LEVEL: JSON.stringify(process.env.LOG_LEVEL),
          PKG_NAME: JSON.stringify(pkg.name),
          PKG_VERSION: JSON.stringify(pkg.version)
        },
      }),
      new CopyWebpackPlugin([
        {
          from: "./src/assets",
          to: ".",
          ignore: [ "*.hbs", ".DS_Store" ],
        }
      ])
    ],
    node: false,
    watchOptions: {
      aggregateTimeout: 3000,
    }
  }
};
