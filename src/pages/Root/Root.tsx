import { ReactElement, Fragment } from "react";
import { PageNavbar } from "../../components/PageNavbar.tsx";

export function Root(): ReactElement {
  return (
    <div className="min-h-screen bg-md3-sys-light-surface">
      <PageNavbar />
    </div>
  );
}
