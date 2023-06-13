import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
  },
});
