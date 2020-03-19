const webpackMerge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Short usage reference
// `NODE_ENV` = development | test | production
// `LOG_LEVEL` = error | warn | info | debug
const generateIndexHtml = require('./webpack/libs/generateIndexHtml');
const pkg = require('../package.json');

const baseCfg = require('./webpack/base.config');
const moduleCfg = require('./webpack/module.config');
const moduleCssCfg = require('./webpack/module-css.config');
const prodCfg = require('./webpack/prod.config');
const externalsCfg = require('./webpack/externals.config');

console.log(`[config:webpack] "${pkg.name}" config composition started`);

module.exports = (env) => {
  env = env ? env : {};
  env.BUILD_ANALYZE = env.BUILD_ANALYZE ? env.BUILD_ANALYZE : null;

  console.log(`[config:webpack] "${process.env.NODE_ENV}" mode used...`);

  generateIndexHtml(env);

  const envES2020 = { ...env, TS_TARGET: 'es20'};

  let cfgES2020 = baseCfg(envES2020);
  cfgES2020 = webpackMerge(cfgES2020, moduleCssCfg(env));
  cfgES2020 = webpackMerge(cfgES2020, moduleCfg(envES2020));
  cfgES2020 = webpackMerge(cfgES2020, externalsCfg);
  cfgES2020 = webpackMerge(cfgES2020, {
    entry: {
      app: "./src/index.es2020.tsx"
    }
  });

  if (env.BUILD_ANALYZE === 'true') {
    console.log('[config:webpack] bundle analyzer included');

    cfgES2020 = webpackMerge(cfgES2020, {
      plugins: [ new BundleAnalyzerPlugin() ]
    });
  }

  if (process.env.NODE_ENV !== 'production') {
    console.log('[config:webpack] config composition completed');

    return [ cfgES2020 ];
  }

  // for prod will add es2015 cfg
  const envES2015 = { ...env, TS_TARGET: 'es5'};
  let cfgES2015 = baseCfg(envES2015);
  cfgES2015 = webpackMerge(cfgES2015, moduleCfg(envES2015));
  cfgES2015 = webpackMerge(cfgES2015, externalsCfg);
  cfgES2015 = webpackMerge(cfgES2015, {
    entry: {
      app: "./src/index.es2015.tsx"
    }
  });


  let configs = [ cfgES2020, cfgES2015 ];

  configs = configs.map((cfg) => webpackMerge(cfg, prodCfg));

  console.log('[config:webpack] config composition completed');
  return configs;
}
