//React
import React from "react";

//React DOM
import ReactDOM from "react-dom/client";

//App
import App from "./App";

//Compiled CSS
import "./style/css/style.css";

/**
 * Things to delete before uploading the library:
 *
 * -Uninstall all react-scripts
 * ex: npm uninstall react-scripts --save
 *
 * - ReactDOM from this file since we're NOT creating an app and we want to export only the <DataTable/> component
 * ex: export * from "./App.jsx" + rename "main.jsx" → "index.jsx"
 *
 * - The /public folder since we don't need logos
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
