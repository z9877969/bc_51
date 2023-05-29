import "./index.scss";

import App from "./components/App/App";
import ErrorBoundary from "./components/ErrorBoundary";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
  // </React.StrictMode>
);
