import { createSlice } from "@reduxjs/toolkit";
import { todo } from "../../data/todo";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: todo,
    filter: "all",
  },
  reducers: {
    // add: (state, { payload }) => {
    //   //   return {
    //   //     ...state,
    //   //     items: [...state.items, payload],
    //   //   };
    //   state.items.push(payload);
    // },
    add: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: (form) => {
        return {
          payload: {
            ...form,
            isDone: false,
            id: Date.now(),
          },
        };
      },
    },
    remove: (state, { payload }) => {
      state.items = state.items.filter((el) => el.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const updatedItemsIdx = state.items.findIndex((el) => el.id === payload);
      state.items[updatedItemsIdx].isDone =
        !state.items[updatedItemsIdx].isDone;
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { actions } = todoSlice;

export default todoSlice.reducer;
