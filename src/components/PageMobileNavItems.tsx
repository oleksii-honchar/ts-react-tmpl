import { NavLink } from "react-router-dom";
import { classNames } from "../utils/navbar.utils.ts";
import { Disclosure } from "@headlessui/react";
import { useContext } from "react";
import { NavigationContext } from "src/contexts/NavigationContext.tsx";

export function PageMobileNavItems() {
  const { navItems } = useContext(NavigationContext);
  return (
    <Disclosure.Panel className="sm:hidden">
      {({ close }) => (
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navItems.map((item) => (
            <NavLink
              onClick={() => {
                close();
              }}
              key={item.name}
              to={item.path}
              className={({ isActive, isPending }) => {
                return classNames(
                  isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                );
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </Disclosure.Panel>
  );
}
