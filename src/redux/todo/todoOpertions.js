import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../services/firebaseApi";

import { actions } from "./todoSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const addTodo = (newTodo) => {
//   return (dispatch, getState) => {
//     dispatch(actions.addRequest());
//     addTodoApi(newTodo)
//       .then((data) => dispatch(actions.addSuccess(data)))
//       .catch((err) => dispatch(actions.addError(err.message)));
//   };
// };
export const addTodo = createAsyncThunk(
  "todo/add",
  async (newTodo, thunkApi) => {
    // console.log("thunkApi :>> ", thunkApi);
    // dispatch({type: "todo/add/pending"})
    try {
      const data = await addTodoApi(newTodo);
      return data; // dispatch({type: "todo/add/fulfilled", payload: data})
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // dispatch({type: "todo/add/rejected", payload: error.message})
    }
  }
);

// export const getTodo = () => (dispatch) => {
//   dispatch(actions.getRequest());
//   getTodoApi()
//     .then((data) => dispatch(actions.getSuccess(data)))
//     .catch((err) => dispatch(actions.getError(err.message)));
// };
export const getTodo = createAsyncThunk("todo/get", async (_, thunkApi) => {
  try {
    const data = await getTodoApi();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// export const removeTodo = (id) => (dispatch) => {
//   dispatch(actions.removeRequest());

//   removeTodoApi(id)
//     .then(() => dispatch(actions.removeSuccess(id)))

//     .catch((err) => dispatch(actions.removeError(err.message)));
// };
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

// export const updateTodoStatus = (id, body) => (dispatch) => {
//   dispatch(actions.updateStatusRequest());

//   updateTodoStatusApi(id, body) // {isDone}
//     .then((data) => dispatch(actions.updateStatusSuccess(data))) // {isDone, id}

//     .catch((err) => dispatch(actions.updateStatusError(err.message)));
// };
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
// updateTodoStatus({ id, isDone });
