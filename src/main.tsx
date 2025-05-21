// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Global styles if any

const rootElement = document.getElementById("root") as HTMLElement; // Type assertion
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <>
      <App />
    </>
  </React.StrictMode>
);
