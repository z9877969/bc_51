import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../services/firebaseApi";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "../error/errorHandler";

export const addTodo = createAsyncThunk(
  "todo/add",
  async (newTodo, thunkApi) => {
    try {
      const { localId, idToken } = thunkApi.getState().auth;
      const data = await addTodoApi({ todo: newTodo, localId, idToken });
      return data;
    } catch (error) {
      thunkApi.dispatch(errorHandler({ error, cb: () => addTodo(newTodo) }));
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, thunkApi) => {
    try {
      const { localId, idToken } = thunkApi.getState().auth;

      const data = await getTodoApi({ localId, idToken });
      return data;
    } catch (error) {
      thunkApi.dispatch(errorHandler({ error, cb: getTodo }));
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { items } = getState().todo;
      if (!items.length) return true;
      return false;
    },
  }
);

export const removeTodo = createAsyncThunk(
  "todo/remove",
  async (id, thunkApi) => {
    try {
      const { localId, idToken } = thunkApi.getState().auth;
      await removeTodoApi({ id, localId, idToken });
      return id;
    } catch (error) {
      thunkApi.dispatch(errorHandler({ error, cb: () => removeTodo(id) }));
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateTodoStatus = createAsyncThunk(
  "todo/update/status",
  async ({ id, isDone }, thunkApi) => {
    try {
      const { localId, idToken } = thunkApi.getState().auth;
      const data = await updateTodoStatusApi({
        id,
        body: { isDone },
        localId,
        idToken,
      });
      return data;
    } catch (error) {
      thunkApi.dispatch(
        errorHandler({ error, cb: () => updateTodoStatus({ id, isDone }) })
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
