import { combineReducers, createStore } from "redux";

import counterReducer from "./counter/counterReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
import todoReducer from "./todo/todoReducer";

// const reducer = (
//   state = { a: 21, b: "qwe", c: { isOpen: true, color: "red" } },
//   action
// ) => {
//   if (action.type === "changeA") {
//     return { ...state, a: 40 };
//   }
//   if (action.type === "changeB") {
//     return { ...state, b: "qwered" };
//   }
//   if (action.type === "changeIsOpen") {
//     return { ...state, c: { ...state.c, isOpen: false } };
//   }
//   return state;
// };

const reducerA = (state = 21, action) => {
  if (action.type === "changeA") {
    return 40;
  }
  return state; // 21
};
const reducerB = (state = "qwe", action) => {
  if (action.type === "changeB") {
    return "qwered";
  }
  return state; // "qwe"
};
const reducerC = (state = { isOpen: true, color: "red" }, action) => {
  if (action.type === "changeIsOpen") {
    return { ...state, isOpen: false };
  }
  return state; // { isOpen: true, color: "red" }
};

const rootReducer = combineReducers({
  count: counterReducer, // 50
  todo: todoReducer,
  a: reducerA,
  b: reducerB,
  c: reducerC,
});

export const store = createStore(rootReducer, devToolsEnhancer());
