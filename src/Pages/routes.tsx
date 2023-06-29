import Home from "./Home"
import Register from "./Register";
import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorBoundary />
  },
];

export default routes;