import { createRoot } from "react-dom/client";
import React from "react";
import Index from "./pages/index-page";
import "./style/indexStyle.css"

const app = createRoot(document.querySelector("#root"))
app.render(
    <React.StrictMode>
        <Index/>
    </React.StrictMode>
)