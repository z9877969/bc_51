import "./index.scss";

import * as icons from "./assets/img"; // {products, auto, healht}

import { persistor, store } from "./redux/store";

import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import LoaderProvider from "./context/LoaderProvider";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

const data = {
  продукти: {
    total: 152,
    p1: 12,
    p2: 32,
  },
  авто: {
    total: 152,
    p1: 12,
    p2: 32,
  },
  здоровье: {
    total: 152,
    p1: 12,
    p2: 32,
  },
};

const categoriesMap = {
  продукти: {
    label: "Products",
    icon: "products",
  },
  авто: {
    label: "Auto",
    icon: "auto",
  },
  здоровье: "Health",
};

const categoriesList = Object.entries(data).map(([key, value]) => ({
  categoryName: categoriesMap[key].label,
  categoryIcon: icons[categoriesMap[key].icon],
}));

console.log("categoriesList :>> ", categoriesList);
