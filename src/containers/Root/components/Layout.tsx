import { Outlet } from "react-router-dom";

import { PageNavbar } from "src/components/PageNavbar.tsx";
export function Layout({}) {
  return (
    <div className="min-h-screen bg-md3-sys-light-surface-container-lowest">
      <PageNavbar />
      <main className="px-2 max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
