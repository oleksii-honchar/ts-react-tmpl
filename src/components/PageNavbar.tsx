import { Disclosure } from "@headlessui/react";
import { Logo } from "./Logo.tsx";
import { PageNavHamburgerButton } from "./PageNavHamburgerButton.tsx";
import { PageMobileNavItems } from "./PageMobileNavItems.tsx";
import { PageNavItems } from "./PageNavItems.tsx";
import { Title } from "./Title.tsx";
export function PageNavbar() {
  return (
    <Disclosure as="nav" className="bg-md3-ref-primary-primary50 shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 max-w-2xl">
            <div className="relative flex h-16 items-center justify-between">
              <PageNavHamburgerButton open={open} />
              <div className="flex flex-1 items-center justify-center  sm:justify-start">
                <Logo />
                <Title />
                <PageNavItems />
              </div>
            </div>
          </div>

          <PageMobileNavItems />
        </>
      )}
    </Disclosure>
  );
}
