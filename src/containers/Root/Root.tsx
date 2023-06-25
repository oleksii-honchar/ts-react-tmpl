import { Suspense, useState, useTransition, ReactElement, Fragment } from "react";

import { BigSpinner } from "src/components/BigSpinner.tsx";
import { Router } from "./components/Router.tsx";

export { NavigationContext } from "./components/Router.tsx";
export function Root(): ReactElement {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  );
}
