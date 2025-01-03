import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import "./css/index.css";
import { HashRouter, Routes, Route } from "react-router-dom";

// const router = createHashRouter([
//     {
//         path: "/",
//         element: <App />,
//     },
//     {
//         path: "/project",
//         element: <ProjectsPage />,
//     },
// ]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/project" element={<ProjectsPage />}></Route>
            </Routes>
        </HashRouter>
    </StrictMode>
);

// Things that needs to be done before release. Prio top > bottom:
