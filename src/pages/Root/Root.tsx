import { ReactElement, Fragment } from "react";
import { Navbar } from "./components/Navbar.tsx";

export function Root(): ReactElement {
  return (
    <div className="min-h-screen bg-color-gray-100">
      <Navbar />
    </div>
  );
}
