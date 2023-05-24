// import "./index.css";
import "./assets/styles/var.css";
import "./index.styled";

import App from "./components/App/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = {
  colors: {
    primary: "green",
    success: "blue",
    warn: "orange",
  },
  fonts: {
    primary: "Roboto, sans-serif",
    secondary: "Arial",
  },
  spaces: [],
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
