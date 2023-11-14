import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any; // TODO: type this properly
  console.error(error);

  // TODO: stretch, make a switch case with more specific and D&D themed errors

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}