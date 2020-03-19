const path = require('path');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');

console.log('[config:webpack:snippet] Module loaded');

const isProd = process.env.NODE_ENV === "production";

module.exports = (env) => {
  return {
    plugins: [
      new ExtractCssChunksPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.[tj]sx?$/,
          use: 'source-map-loader',
        },
        {
          test: /\.[tj]sx?$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: path.join(__dirname, `../tsconfig.${env.TS_TARGET}.json`)
          },
          exclude: [
            /\.(spec|e2e|d)\.[tj]sx?$/
          ],
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        },
        {
          test: /\.(jpe?g|png|svg|gif|cur)$/,
          exclude: /icons/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        },
        {
          test: /\.svg/,
          include: /icons/,
          use: [{
            loader: 'svg-inline-loader',
            options: {
              removeSVGTagAttrs: false,
            },
          }],
        },
        {
          test: /\.css$/,
          include: /src\/assets/,
          use: [
            {
              loader: ExtractCssChunksPlugin.loader,
              options: {
                hot: !isProd,
                reloadAll: !isProd,
                publicPath: '/assets/stylesheets/',
              },
            },
            'style-loader',
            {
              loader: 'css-loader',
            },
          ],
        },
        {
          test: /\.p?css$/,
          exclude: /src\/assets/,
          use: [
            'style-loader',
            {
              loader: ExtractCssChunksPlugin.loader,
              options: {
                hot: !isProd,
                reloadAll: !isProd
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: false, // true cause to obfuscation
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    'postcss-preset-env': {
                      stage: 3,
                      features: {
                        'nesting-rules': true
                      }
                    },
                    'cssnano': {
                      preset: [
                        'default',
                        {
                          discardComments: {
                            removeAll: true,
                          },
                      }]
                    },
                    'env': process.env.NODE_ENV,
                  },
                  path: path.join(__dirname, '../postcss.config.js'),
                },
              },
            }
          ],
        }
      ],
      noParse: [
        /\.(spec|e2e|d)\.[tj]sx?$/,
        /LICENSE/,
        /README.md/,
      ],
    }
  }
};
