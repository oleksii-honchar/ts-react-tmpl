import { useContext } from "react";
import { classNames } from "src/utils/navbar.utils.ts";
import { NavigationContext } from "src/containers/Root/Root.tsx";

export function PageNavItems() {
  const { navItems, navigateTo } = useContext(NavigationContext);

  return (
    <div className="hidden sm:block absolute right-0">
      <div className="flex space-x-4">
        {navItems.map((item) => (
          <a
            onClick={() => navigateTo!(item.href)}
            key={item.name}
            href={item.href}
            className={classNames(
              item.isActive
                ? "bg-md3-sys-light-secondary-container text-md3-sys-light-on-surface"
                : `text-md3-sys-light-on-surface-variant 
                   hover:bg-md3-state-layers-light-on-surface-opacity-0.08/10 
                   hover:text-md3-sys-light-on-surface-variant`,
              "rounded-md px-3 py-2 text-sm font-medium"
            )}
            aria-current={item.isActive ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
