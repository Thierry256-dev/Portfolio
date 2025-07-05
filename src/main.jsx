import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import All from "./Componets/Projects/All.jsx";
import WebApps from "./Componets/Projects/WebApps.jsx";
import Designs from "./Componets/Projects/Designs.jsx";
import ErrorPage from "./Componets/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: `/`,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <All />,
      },
      {
        path: `webapps`,
        element: <WebApps />,
      },
      {
        path: `designs`,
        element: <Designs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
