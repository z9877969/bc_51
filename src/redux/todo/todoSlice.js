import {
  addTodo,
  getTodo,
  removeTodo,
  updateTodoStatus,
} from "./todoOpertions";

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(getTodo.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(removeTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((el) => el.id !== payload);
      })
      .addCase(updateTodoStatus.fulfilled, (state, { payload }) => {
        const { isDone, id } = payload;
        const updatedItemsIdx = state.items.findIndex((el) => el.id === id);
        state.items[updatedItemsIdx].isDone = isDone;
      })
      .addMatcher(
        (action) => {
          // if (action.type.endsWith("/pending")) {
          //   return true;
          // }
          // return false;
          return action.type.endsWith("/pending");
        },
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => {
          return action.type.endsWith("/fulfilled");
        },
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => {
          return action.type.endsWith("/rejected"); // true | false
        },
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
    // .addDefaultCase((state, {payload}) => {
    //   console.log("object");
    //   return state
    // })
  },
});

export const { actions } = todoSlice;

export default todoSlice.reducer;

// slice -> reducer + actions
// slice1 -> reducer1 + actions1
//
