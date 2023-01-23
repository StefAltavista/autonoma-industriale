import React from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./components/App";
import Welcome from "./components/Welcome";
import "../css/main.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
    <Welcome>
        <App />
    </Welcome>
);
