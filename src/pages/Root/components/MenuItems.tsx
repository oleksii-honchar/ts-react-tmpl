import { navigationItems, classNames } from "./navbar.utils.ts";
export function MenuItems() {
  return (
    <div className="hidden sm:ml-6 sm:block absolute right-0">
      <div className="flex space-x-4">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
