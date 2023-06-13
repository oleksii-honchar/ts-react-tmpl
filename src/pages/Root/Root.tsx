import { ReactElement, Fragment } from "react";
import { Navigation } from "./components/Navigation.tsx";

export function Root(): ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-stone-50 to-orange-50">
      <Navigation />
    </div>
  );
}
