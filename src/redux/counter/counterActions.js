import { createAction } from "@reduxjs/toolkit";

export const counterDecrementAction = createAction("counter/decrement"); //

export const counterIncrementAction = createAction("counter/increment");

export const counterResetAction = createAction("conter/reset");
