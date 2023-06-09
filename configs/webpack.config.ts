import { merge } from "webpack-merge";
import colors from "colors";
import { blablo } from "blablo";

import pkg from "package.json" assert { type: "json" };

import { baseConfig } from "./webpack/base.config.ts";
import { moduleConfig } from "./webpack/module.config.ts";
import { cssModuleConfig } from "./webpack/module-css.config.ts";
import { devServerConfig } from "./webpack/dev-server.config.ts";
import { prodConfig } from "./webpack/prod.config.ts";
import { externalsConfig } from "./webpack/externals.config.ts";
import GenerateIndexHTML from "./webpack/plugins/GenerateIndexHTML.plugin.ts";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

colors.enable();
const logHeader = "[webpack:config]".cyan;
blablo.cleanLog(logHeader, `starting "${pkg.name}" config composition`);

// Short usage reference
// `NODE_ENV` = development | test | production
// `LOG_LEVEL` = error | warn | info | debug

export const configFactory = (env: any = {}, argv: { mode: string }) => {
  env = env ? env : {};
  env.BUILD_ANALYZE = env.BUILD_ANALYZE ? env.BUILD_ANALYZE : null;

  blablo.cleanLog(logHeader, `using "${process.env.NODE_ENV}" mode`);

  const envES2022 = { ...env, TS_TARGET: "es2022" };

  let cfgES2022 = baseConfig(envES2022); // @ts-ignore
  cfgES2022 = merge(cfgES2022, moduleConfig(envES2022)); // @ts-ignore
  cfgES2022 = merge(cfgES2022, cssModuleConfig(env)); // @ts-ignore
  cfgES2022 = merge(cfgES2022, externalsConfig);

  cfgES2022 = merge(cfgES2022, {
    // @ts-ignore
    entry: {
      app: "./src/index.es2022.tsx",
    },
    plugins: [new GenerateIndexHTML(env)],
  });

  if (argv.mode === "development") {
    // @ts-ignore
    cfgES2022 = merge(cfgES2022, devServerConfig(envES2022));
  }

  if (env.BUILD_ANALYZE === "true") {
    console.log(logHeader, "bundle analyzer included");
    // @ts-ignore
    cfgES2022 = merge(cfgES2022, {
      plugins: [new BundleAnalyzerPlugin(env)],
    });
  }

  if (process.env.NODE_ENV !== "production") {
    blablo.cleanLog("[webpack:config]".cyan, "config composition completed");
    return cfgES2022;
  }

  // for prod will add es2016 cfg
  const envES2016 = { ...env, TS_TARGET: "es2016" };
  let cfgES2016 = baseConfig(envES2016); // @ts-ignore
  cfgES2016 = merge(cfgES2016, moduleConfig(envES2016)); // @ts-ignore
  cfgES2016 = merge(cfgES2016, externalsConfig);
  cfgES2016 = merge(cfgES2016, {
    // @ts-ignore
    entry: {
      app: "./src/index.es2016.tsx",
    },
  });

  let configs = [cfgES2022, cfgES2016];

  // @ts-ignore
  configs = configs.map((cfg) => merge(cfg, prodConfig));

  blablo.cleanLog("[webpack:config]".cyan, "config composition completed");
  return configs;
};