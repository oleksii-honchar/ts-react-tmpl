/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { ReactElement, Fragment } from "react";
import { Navigation } from "./components/Navigation";

export function Root(): ReactElement {
  return (
    <Navigation/>
  );
}
