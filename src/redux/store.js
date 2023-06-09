import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter/counterReducer";
import counterReducer from "./counter/counterSlice";
import storage from "redux-persist/lib/storage";
// import todoReducer from "./todo/todoReducer";
import todoReducer from "./todo/todoSlice";

const persistTodoConfig = {
  key: "todo",
  version: 1,
  storage,
  // whitelist: ["items"],
  blacklist: ["filter"],
};

const persistedTodoReducer = persistReducer(persistTodoConfig, todoReducer);

export const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    count: counterReducer,
    todo: persistedTodoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // preloadedState: {
  //   count: 0,
  //   todo: {
  //     items: [],
  //     filter: "medium",
  //   },
  // },
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
