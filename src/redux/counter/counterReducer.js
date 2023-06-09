import {
  counterDecrementAction,
  counterIncrementAction,
  counterResetAction,
} from "./counterActions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = 190;

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(counterDecrementAction, (state, action) => {
      return state - action.payload;
    })
    .addCase(counterIncrementAction, (state, { payload }) => {
      return state + payload;
    })
    .addCase(counterResetAction, () => {
      return initialState;
    });
});

export default counterReducer;
