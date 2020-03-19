import * as React from "react";
import * as ReactDOM from "react-dom";
// @ts-ignore
import { LoggerService } from "@ciklum/logan";

import { Root } from "src/pages/Root/Root.tsx";

LoggerService.setGlobalTitle(process.env.PKG_NAME);

window.config = { logLevel: process.env.LOG_LEVEL };
const logger = new LoggerService();
logger.setTitle("index");

function startApp(): void {
  logger.info("Starting app...");

  ReactDOM.render(<Root />, document.querySelector("#app-root"));
}

startApp();
