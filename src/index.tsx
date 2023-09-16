import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const currentUrl = window.location.href;
const basename = currentUrl.includes("github.io") ? "/wea4chan" : undefined;

root.render(
    <React.StrictMode>
        <BrowserRouter basename={basename}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
