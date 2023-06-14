import {
  getCurUser,
  loginUser,
  registerUser,
  testOperation,
} from "./authOperations";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  idToken: null,
  email: null,
  refreshToken: null,
  localId: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isAuth: true,
          ...payload,
          isLoading: false,
          error: null,
        };
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isAuth: true,
          ...payload,
          isLoading: false,
          error: null,
        };
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getCurUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurUser.fulfilled, (state, { payload }) => {
        const { email, localId } = payload;
        state.isLoading = false;
        state.error = null;
        state.isAuth = true;
        state.email = email;
        state.localId = localId;
      })
      .addCase(getCurUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
