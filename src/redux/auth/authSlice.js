import {
  getCurUser,
  getUserRole,
  loginUser,
  refreshToken,
  registerUser,
} from "./authOperations";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  role: null,
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
      })
      .addCase(getUserRole.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserRole.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.role = payload;
      })
      .addCase(getUserRole.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        const { idToken, refreshToken } = payload;
        state.isLoading = false;
        state.error = null;
        state.idToken = idToken;
        state.refreshToken = refreshToken;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
