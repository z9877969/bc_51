import "./index.scss";

import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import LoaderProvider from "./context/LoaderProvider";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";

// console.log("store :>> ", store);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
