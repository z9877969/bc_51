import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../services/firebaseApi";

import { actions } from "./todoSlice";

export const addTodo = (newTodo) => {
  return (dispatch, getState) => {
    dispatch(actions.addRequest());
    addTodoApi(newTodo)
      .then((data) => dispatch(actions.addSuccess(data)))
      .catch((err) => dispatch(actions.addError(err.message)));
  };
};

export const getTodo = () => (dispatch) => {
  dispatch(actions.getRequest());
  getTodoApi()
    .then((data) => dispatch(actions.getSuccess(data)))
    .catch((err) => dispatch(actions.getError(err.message)));
};

export const removeTodo = (id) => (dispatch) => {
  //   request
  dispatch(actions.removeRequest());

  removeTodoApi(id)
    // success
    .then(() => dispatch(actions.removeSuccess(id)))
    // error
    .catch((err) => dispatch(actions.removeError(err.message)));
};

export const updateTodoStatus = (id, body) => (dispatch) => {
  dispatch(actions.updateStatusRequest());

  updateTodoStatusApi(id, body)
    // succes
    .then((data) => dispatch(actions.updateStatusSuccess(data))) // {isDone, id}
    // error
    .catch((err) => dispatch(actions.updateStatusError(err.message)));
};
