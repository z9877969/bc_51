// '/message_list.json'

import axios from "axios";

const testBody = { user_id: "jack", text: "Ahoy!" };

axios.defaults.baseURL =
  "https://bc-51-a26cd-default-rtdb.europe-west1.firebasedatabase.app";

export const addTodoApi = (todo = testBody) => {
  return axios.post("/todo.json", todo).then((response) => {
    const { name } = response.data;
    return { ...todo, id: name };
  }); // {descr, date, priority, id}
};

export const getTodoApi = () => {
  return axios.get("/todo.json").then((res) => {
    return Object.entries(res.data).map(([id, todo]) => ({
      id,
      ...todo,
    }));
  });
};

export const removeTodoApi = (id) => {
  return axios.delete(`/todo/${id}.json`).then((res) => res.data);
};

export const updateTodoStatusApi = (id, body) => {
  return axios
    .patch(`/todo/${id}.json`, body)
    .then((res) => ({ ...res.data, id })); // {isDone: true}
};
