import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Portfolio from "./Componets/Portfolio.jsx";
import Project1 from "./Componets/Projects/All.jsx";

const router = createBrowserRouter([
  {
    path: `/`,
    element: <App />,
    children: [
      {
        index: true,
        element: <Project1 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
