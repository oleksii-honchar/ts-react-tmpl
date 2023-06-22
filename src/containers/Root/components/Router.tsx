import { Suspense, useState, useTransition, ReactElement, Fragment, createContext, useContext } from "react";
import { LoggerService } from "@ciklum/logan";

import { AboutPage } from "src/pages/About/AboutPage.tsx";
import { PalettePage } from "src/pages/Palette/PalettePage.tsx";
import { Layout } from "src/containers/Root/components/Layout.tsx";
import { NavigationContext } from "src/contexts/NavigationContext.ts";
import { navigationItems } from "src/models/navData.ts";

const logger = new LoggerService();
logger.setTitle("Router");

export function Router() {
  const [page, setPage] = useState(navigationItems[0].href);
  const [isPending, startTransition] = useTransition();

  function navigate(url) {
    console.log(`navigate to: ${url}`);
    startTransition(() => {
      setPage(url);
    });
  }

  console.log(`new page: ${page}`);

  let content;
  if (page === navigationItems[0].href) {
    content = <AboutPage />;
  } else if (page === navigationItems[1].href) {
    content = <PalettePage />;
  }
  return (
    <NavigationContext.Provider value={navigate}>
      <Layout isPending={isPending}>{content}</Layout>
    </NavigationContext.Provider>
  );
}
