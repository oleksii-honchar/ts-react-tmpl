import { classNames } from "../utils/navbar.utils.ts";
import { navigationItems } from "src/models/navData.ts";
export function PageNavItems() {
  return (
    <div className="hidden sm:block absolute right-0">
      <div className="flex space-x-4">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-md3-sys-light-secondary-container text-md3-sys-light-on-surface"
                : `text-md3-sys-light-on-surface-variant 
                   hover:bg-md3-state-layers-light-on-surface-opacity-0.08/10 
                   hover:text-md3-sys-light-on-surface-variant`,
              "rounded-md px-3 py-2 text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
