import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BarraLateral from "./pages/Barra-Lateral/BarraLateral";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BarraLateral/>
    <App />
  </React.StrictMode>
);
