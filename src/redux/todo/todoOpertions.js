import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../services/firebaseApi";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTodo = createAsyncThunk(
  "todo/add",
  async (newTodo, thunkApi) => {
    try {
      const { localId, idToken } = thunkApi.getState().auth;
      const data = await addTodoApi({ todo: newTodo, localId, idToken });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTodo = createAsyncThunk("todo/get", async (_, thunkApi) => {
  try {
    const { localId, idToken } = thunkApi.getState().auth;
    const data = await getTodoApi({ localId, idToken });
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const removeTodo = createAsyncThunk(
  "todo/remove",
  async (id, thunkApi) => {
    try {
      await removeTodoApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateTodoStatus = createAsyncThunk(
  "todo/update/status",
  async ({ id, isDone }, thunkApi) => {
    try {
      const data = await updateTodoStatusApi(id, { isDone });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
