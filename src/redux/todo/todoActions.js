import { createAction } from "@reduxjs/toolkit";

// export const addTodo = (todo) => {
//   return {
//     type: TODO_ADD,
//     payload: todo,
//   };
// };
export const addTodo = createAction("todo/add");

// export const removeTodo = (id) => ({
//   type: TODO_REMOVE,
//   payload: id,
// });
export const removeTodo = createAction("todo/remove");

// export const updateTodoStatus = (id) => ({
//   type: TODO_UPDATE_STATUS,
//   payload: id,
// });
export const updateTodoStatus = createAction("todo/update/status");

// export const filterChange = (value) => ({
//   type: TODO_CHANGE_FILTER,
//   payload: value,
// });
export const filterChange = createAction("todo/change/filter");
