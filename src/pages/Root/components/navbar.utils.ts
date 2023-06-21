export const navigationItems = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

// @ts-ignore
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
