import { PageNavbar } from "src/components/PageNavbar.tsx";
export function Layout({ children, isPending }) {
  return (
    <div className="min-h-screen bg-md3-sys-light-surface">
      <PageNavbar />
      <main>{children}</main>
    </div>
  );
}
