import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/Components/layout/index.css";
import { AuthProvider } from "./Components/layout/Context.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
      <App />
      </AuthProvider>
  </React.StrictMode>
);
