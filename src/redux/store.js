import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
// import reduxLogger from "redux-logger";
import todoReducer from "./todo/todoSlice";

const customLogger = ({ getState, dispatch }) => {
  return (next) => {
    return (action) => {
      console.group("action", action.type);

      const prevState = getState();
      console.log("prevState :>> ", prevState);
      console.log("action :>> ", action);
      next(action);
      const nextState = getState();

      console.log("nextState :>> ", nextState);

      console.groupEnd();
    };
  };
};

// const reduxThunk = (store) => {
//   return (next) => {
//     return (action) => {
//       if (typeof action === "function") {
//         action(store.dispatch, store.getState);
//         return;
//       }
//       next(action);
//     };
//   };
// };

// customLogger(store)(next)(action)

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
  },
  // middleware: [reduxThunk],
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(customLogger),
});
