import "./index.scss";

import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import LoaderProvider from "./context/LoaderProvider";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
