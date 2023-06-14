/**
 * This wrapper allows to use ESM ts webpack configs in order to have esm style modules in whole repo
 */
import process from "node:process";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import minimist from "minimist";
import colors from "colors";
import * as emoji from "node-emoji";

import { StringIndex } from "src/typings/index.js";
import { pick } from "scripts/ts-utils.ts";
import { blablo } from "blablo";
import { getRootRepoDir, setCurrMetaUrl } from "scripts/esm-utils.ts";
import path from "path";

setCurrMetaUrl(import.meta.url);
colors.enable();

const logHeader = "[Webpack]".cyan.bold;
const emoSparkles: any = emoji.get(emoji.find("✨")?.key ?? "");
const parsedArgs = minimist(process.argv.slice(2));
const argv = {
  mode: "development",
  config: "./configs/webpack.config.ts",
  watch: false,
  open: false,
  stats: "minimal",
  launchDevServer: !!parsedArgs["launch-dev-server"],
  env: [],
  ...parsedArgs,
};

// additional env vars can be passed through Webpack "--env VAR=VALUE" param
// for every VAR needs to be used new --env param, e.g. "--env VAR1=V1 --env VAR2=V2"
argv.env = Array.isArray(argv.env) ? argv.env : [argv.env]; // when single param provided it is string, not array
const customEnv = argv.env.reduce((acc: StringIndex, curr: string) => {
  const [key, value] = curr.split("=");
  acc[key] = value;
  return acc;
}, {});

const env = {
  ...customEnv,
  ...pick(process.env, ["NODE_ENV", "BUILD_ANALYZE", "TS_LOADER", "LOG_LEVEL", "SERVE_PORT"]),
};

// Let's check if proper ts-TS_LOADER used
if (env.TS_LOADER) {
  const validTSLoaders = ["esbuild", "ts-loader"];
  const valueIndex = validTSLoaders.indexOf(env.TS_LOADER);
  if (valueIndex === -1) {
    blablo.error(`You have to use following options for TS_LOADER: ${validTSLoaders.join(", ")}`.red);
    process.exit(1);
  }
}

// blablo.cleanLog(argv);
// blablo.cleanLog(env);

// Param "--watch" used to enable "build + watch" mode
// Param "--launch-dev-server" used to enable "build + static serv" mode
// Param "--open" used to open browser after build. This param works only with --launch-dev-server
let watching = null;
let devServer = null;
const operationMode = argv.launchDevServer ? "server" : argv.watch ? "watch" : "build";
const cfgPath = path.join(getRootRepoDir(), argv.config);
const { configFactory } = await import(cfgPath);
const config = configFactory(env, argv as any);

blablo.cleanLog(logHeader, `starting ${operationMode.white.bold}`, emoji.get(emoji.find("rocket")?.key ?? ""));

// @ts-ignore

if (operationMode === "server") {
  // expecting config here to be object, not [{},{}]
  const compiler = webpack({ ...config, stats: argv.stats });
  const devServerOptions = { ...config.devServer, open: argv.open };
  devServer = new WebpackDevServer(devServerOptions, compiler);
  // devServer.start();
  devServer.startCallback(() => {
    blablo.cleanLog(
      logHeader,
      `Successfully started server on ${`http://localhost:${config.devServer.port}`.cyan.bold}`
    );
  });
} else {
  const compiler = webpack(config);
  const compilerPromise = new Promise((resolve, reject) => {
    const errors: any[] = [];
    const operationCbFn = (err: any, stats: any) => {
      blablo.finish();
      if (err) {
        blablo.error(err);
        errors.push(err);
      }

      const info = stats?.toJson();
      if (stats?.hasErrors()) {
        blablo.error(info?.errors);
        errors.push(info?.errors);
      }
      !!stats?.hasWarnings() && blablo.warn(info?.warnings);

      blablo.cleanLog(
        stats.toString({
          chunks: false,
          children: false,
          colors: true, // Shows colors in the console
        })
      );

      if (operationMode == "watch") {
        blablo.useSpinner("toggle7").log(logHeader, " watching");
        return;
      }

      compiler.close((closeErr) => {
        if (closeErr) {
          blablo.error(closeErr);
          errors.push(closeErr);
        }
        if (errors.length) {
          return reject(errors);
        }
        resolve(stats);
      });
    };

    if (operationMode === "build") {
      compiler.run(operationCbFn);
    } else if (operationMode === "watch") {
      watching = compiler.watch(config.watchOptions, operationCbFn);
    }
  });

  try {
    await compilerPromise;
  } catch (e) {
    if (operationMode === "watch" && watching) {
      // @ts-ignore
      watching.close((err: any) => {
        if (err) {
          blablo.error(err);
        }
      });
    }
  }
  blablo.cleanLog(logHeader, `Done ${emoSparkles}`);
}

process.on("uncaughtException", (err) => {
  console.error(err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
  // Application specific logging, throwing an error, or other logic here
});
