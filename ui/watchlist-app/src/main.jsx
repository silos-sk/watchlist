import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Components imports
import CreateDrama from "./components/CreateDrama";
import ShowDramaList from "./components/ShowDramaList";
import ShowDramaDetails from "./components/ShowDramaDetails";
import UpdateDramaInfo from "./components/UpdateDramaInfo";

// Routes
const router = createBrowserRouter([
  { path: "/", element: <ShowDramaList /> },
  { path: "/create-drama", element: <CreateDrama /> },
  { path: "/show-drama/:id", element: <ShowDramaDetails /> },
  { path: "/edit-drama/:id", element: <UpdateDramaInfo /> },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);