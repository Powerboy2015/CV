import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);

// Things that needs to be done before release. Prio top > bottom:

// more projects page
// includes react routing

// mobile nav
// mobile version. Try to take a look at it or womp womp
