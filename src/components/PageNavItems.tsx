import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { classNames } from "src/utils/navbar.utils.ts";
import { NavigationContext } from "src/contexts/NavigationContext.tsx";

export function PageNavItems() {
  const { navItems } = useContext(NavigationContext);

  return (
    <div className="hidden sm:block absolute right-0">
      <div className="flex space-x-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive, isPending }) => {
              return classNames(
                isActive
                  ? "bg-md3-sys-light-secondary-container text-md3-sys-light-on-surface"
                  : `text-md3-sys-light-on-surface-variant 
                   hover:bg-md3-state-layers-light-on-surface-opacity-0.08/10 
                   hover:text-md3-sys-light-on-surface-variant`,
                "rounded-md px-3 py-2 text-sm font-medium"
              );
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
