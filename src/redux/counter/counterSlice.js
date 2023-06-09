import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 190,
  reducers: {
    decrement: (state, { payload }) => {
      return state - payload;
    },
    increment: (state, { payload }) => {
      return state + payload;
    },
    reset: () => 190,
  },
}); // {reducer, actions: {incrementAction}} -> incrementAction() -> {type: qwe/incrementAction}

export const { actions } = counterSlice;

export default counterSlice.reducer;
