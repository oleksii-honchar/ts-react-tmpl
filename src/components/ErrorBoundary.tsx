import { useRouteError } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-md3-sys-light-error-container flex flex-col items-center justify-center text-md3-sys-light-on-error-container">
      <h1 className="text-3xl font-bold leading-7 pb-4">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <h2 className="text-1xl font-bold leading-7 pt-4">
        <i>
          {error.status} : {error.statusText || error.message}
        </i>
      </h2>
    </div>
  );
}
