import {
  getCurUserApi,
  getUserRoleApi,
  loginUserApi,
  refreshTokenApi,
  registerUserApi,
} from "../../services/firebaseApi";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "../error/errorHandler";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const data = await registerUserApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  "auth/current/user",
  async (_, thunkApi) => {
    try {
      const { idToken } = thunkApi.getState().auth;
      const data = await getCurUserApi(idToken);
      return data;
    } catch (error) {
      thunkApi.dispatch(errorHandler({ error, cb: getCurUser }));
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      // const { idToken } = getState().auth;
      // if (idToken) return true;
      // return false;
      return Boolean(getState().auth.idToken);
    },
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refresh/token",
  async (cb, { getState, rejectWithValue, dispatch }) => {
    try {
      const { refreshToken } = getState().auth;
      const newTokens = await refreshTokenApi(refreshToken);
      setTimeout(() => {
        dispatch(cb());
      });
      return newTokens;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserRole = createAsyncThunk(
  "auth/user/role",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;
    try {
      const role = await getUserRoleApi({ localId, idToken });
      return role;
    } catch (error) {
      dispatch(errorHandler({ error, cb: getUserRole }));
      return rejectWithValue(error.message);
    }
  }
);
