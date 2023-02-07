//React
import React from "react";

//React DOM
import ReactDOM from "react-dom/client";

//App
import App from "./App";

//Compiled CSS
import "./style/css/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
