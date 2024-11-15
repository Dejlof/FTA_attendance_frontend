import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CustomToaster from "./components/CustomToaster.jsx";
import disableDevtool from "disable-devtool";

if (import.meta.env.VITE_NODE_ENV !== "development") {
  // Disables DevTools in production environment to improve performance and security.
  disableDevtool(); 
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <CustomToaster />
    </BrowserRouter>
  </React.StrictMode>
);
