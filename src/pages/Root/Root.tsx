/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement, Fragment } from "react";
import { Navigation } from "./components/Navigation";

export function Root(): ReactElement {
  return (
    <Navigation/>
  );
}
