import { Disclosure } from "@headlessui/react";
import { Logo } from "./Logo.tsx";
import { HamburgerButton } from "./HamburgerButton.tsx";
import { MobileMenuItems } from "./MobileMenuItems.tsx";
import { MenuItems } from "./MenuItems.tsx";
import { Title } from "./Title.tsx";
export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-amber-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <HamburgerButton open={open} />
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Logo />
                <Title />
                <MenuItems />
              </div>
            </div>
          </div>

          <MobileMenuItems />
        </>
      )}
    </Disclosure>
  );
}
