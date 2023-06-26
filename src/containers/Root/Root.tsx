import { Suspense, ReactElement, Fragment } from "react";

import { BigSpinner } from "src/components/BigSpinner.tsx";
import { Layout } from "./components/Layout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "src/components/ErrorBoundary.tsx";
import { AboutPage } from "src/pages/About/AboutPage.tsx";
import { PalettePage } from "src/pages/Palette/PalettePage.tsx";
import { NavContextProvider } from "src/contexts/NavigationContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "palette",
        element: <PalettePage />,
      },
    ],
  },
]);
export function Root(): ReactElement {
  return (
    <Suspense fallback={<BigSpinner />}>
      <NavContextProvider>
        <RouterProvider router={router} />
      </NavContextProvider>
    </Suspense>
  );
}
