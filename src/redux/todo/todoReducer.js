import { addTodo, removeTodo, updateTodoStatus } from "./todoActions";

import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { todo } from "../../data/todo";

// ...../pending | ...../rejected | ....../fulfilled

const itemsReducer = createReducer(todo, (builder) => {
  builder
    .addCase(addTodo, (state, { payload }) => {
      return [...state, payload];
    })
    .addCase(removeTodo, (state, { payload }) => {
      return state.filter((el) => el.id !== payload);
    })
    .addCase(updateTodoStatus, (state, { payload }) => {
      return state.map((el) =>
        el.id === payload ? { ...el, isDone: !el.isDone } : el
      );
    });
});

const isLoadinReducer = createReducer(false, (builder) => {
  builder
    .addMatcher(
      (action) => {
        if (action.type.endsWith("/pending")) {
          return true;
        }
        return false;
      },
      () => {
        return true;
      }
    )
    .addMatcher(
      (action) => {
        if (
          action.type.endsWith("/fulfilled") ||
          action.type.endsWith("/rejected")
        ) {
          return true;
        }
        return false;
      },
      () => false
    );
});

const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case "todo/change/filter":
      return action.payload;
    default:
      return state;
  }
};

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadinReducer,
});

export default todoReducer;
