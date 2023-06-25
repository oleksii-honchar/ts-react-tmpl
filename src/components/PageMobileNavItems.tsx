import { classNames } from "../utils/navbar.utils.ts";
import { Disclosure } from "@headlessui/react";
import { useContext } from "react";
import { NavigationContext } from "src/containers/Root/Root.tsx";

export function PageMobileNavItems() {
  const { navItems, navigateTo } = useContext(NavigationContext);
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navItems.map((item) => (
          <Disclosure.Button
            onClick={() => navigateTo!(item.href)}
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
              item.isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
            aria-current={item.isActive ? "page" : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  );
}
