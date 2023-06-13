import { createSelector } from "@reduxjs/toolkit";

export const selectTodoItems = (state) => state.todo.items;
export const selectTodoFilter = (state) => state.todo.filter;
export const selectIsTodoExist = (state) => selectTodoItems(state).length > 0;

// export const selectFilteredTodo = (state) => {
//   console.log("selectFilteredTodo");
//   const items = selectTodoItems(state);
//   const filter = selectTodoFilter(state);

//   if (filter === "all") return items;
//   return items.filter((el) => el.priority === filter); // ref1 | ref2 | ref3
// };

export const selectFilteredTodo = createSelector(
  [selectTodoFilter, selectTodoItems],
  (filter, items) => {
    console.log("selectFilteredTodo");
    if (filter === "all") return items;
    return items.filter((el) => el.priority === filter);
  }
);
