import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./Portfolio";
import Project1 from "./SubComponents/Project1";

const router = createHashRouter([
  {
    path: `/`,
    element: <Portfolio />,
    children: [
      {
        index: true,
        element: <Project1 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("projects")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
