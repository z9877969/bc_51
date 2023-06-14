import { createSelector } from "@reduxjs/toolkit";

export const selectTodoItems = (state) => state.todo.items;
export const selectTodoFilter = (state) => state.todo.filter;
export const selectIsTodoExist = (state) => selectTodoItems(state).length > 0;

export const selectFilteredTodo = createSelector(
  [selectTodoFilter, selectTodoItems],
  (filter, items) => {
    if (filter === "all") return items;
    return items.filter((el) => el.priority === filter);
  }
);

// const arr = [];

// const foo = (n) => {
//   const value = n * 5;
//   arr.push(value);
//   return value;
// };
