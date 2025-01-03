import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/Projects",
        element: <ProjectsPage />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} basename="https://zochi.space" />
    </StrictMode>
);

// Things that needs to be done before release. Prio top > bottom:
