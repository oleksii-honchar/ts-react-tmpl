import {
  Suspense,
  useState,
  useTransition,
  ReactElement,
  Fragment,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { LoggerService } from "@ciklum/logan";

import { AboutPage } from "src/pages/About/AboutPage.tsx";
import { PalettePage } from "src/pages/Palette/PalettePage.tsx";
import { NotFoundPage } from "src/pages/NotFound/NotFoundPage.tsx";
import { Layout } from "src/containers/Root/components/Layout.tsx";
import { NavigationItem } from "src/typings/index.js";
import { navigationItemsInitial } from "src/models/navData.ts";
import { useLocation } from "react-router-dom";

const logger = new LoggerService();
logger.setTitle("Router");

interface NavigationContextProps {
  navItems: NavigationItem[];
  children?: ReactNode;
  navigateTo?: (itemHref: string) => void;
}

const navCtxInitial: NavigationContextProps = {
  navItems: navigationItemsInitial,
};

export const NavigationContext = createContext(navCtxInitial);

export function Router() {
  const [isPending, startTransition] = useTransition();
  const [navItems, setNavItems] = useState(navigationItemsInitial);
  // const location = useLocation();
  //
  // useEffect(() => {
  //   console.log("URL changed:", location.pathname);
  //   // Handle URL change here
  // }, [location]);

  function navigateTo(path: string) {
    console.log(`navigate to: ${path}`);
    startTransition(() => {
      setActiveNavItem(path);
    });
  }

  function setActiveNavItem(itemHref: string) {
    console.log(`setting new active item: ${itemHref}`);
    const item = navItems.find((item) => item.href === itemHref);
    if (!item) return;
    if (item.isActive) return;

    navItems.forEach((item) => (item.isActive = false));
    item.isActive = true;
    setNavItems([...navItems]);
  }

  const currNavItem = navItems.find((item) => item.isActive === true);
  console.log(`currNavItem: ${currNavItem?.name ?? "n/a"}`);
  console.log(`isPending: ${isPending}`);
  let content;
  if (!currNavItem) {
    content = <NotFoundPage />;
  } else if (currNavItem.href === navItems[0].href) {
    content = <AboutPage />;
  } else if (currNavItem.href === navItems[1].href) {
    content = <PalettePage />;
  }
  return (
    <NavigationContext.Provider value={{ navItems, navigateTo }}>
      <Layout isPending={isPending}>{content}</Layout>
    </NavigationContext.Provider>
  );
}
