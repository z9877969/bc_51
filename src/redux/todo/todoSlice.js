import { actions as counterActions } from "../counter/counterSlice";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  // stateRef1 === stateRef2
  reducers: {
    addRequest(state) {
      state.isLoading = true;
    },
    addSuccess(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    addError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    getRequest(state) {
      state.isLoading = true;
    },
    getSuccess(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    getError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    removeRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    removeSuccess(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((el) => el.id !== payload);
    },
    removeError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    updateStatusRequest(state) {
      state.isLoading = true;
    },
    updateStatusSuccess(state, { payload }) {
      const { isDone, id } = payload;
      state.isLoading = false;
      state.error = null;
      const updatedItemsIdx = state.items.findIndex((el) => el.id === id);
      state.items[updatedItemsIdx].isDone = isDone;
    },
    updateStatusError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { actions } = todoSlice;

export default todoSlice.reducer;
