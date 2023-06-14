// '/message_list.json'

import axios from "axios";

const API_KEY = "AIzaSyAw3wCum4rVwVzGPGPbRjIvLjk0l7mZ7fI";

const baseUrl = {
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  DB: "https://bc-51-a26cd-default-rtdb.europe-west1.firebasedatabase.app",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);
// const setToken = (token) =>
//   (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
// const unsetToken = () => (axios.defaults.headers.common.Authorization = ``);

export const addTodoApi = ({ todo, localId, idToken }) => {
  return axios
    .post(`/users/${localId}/todo.json`, todo, {
      params: {
        auth: idToken,
      },
    })
    .then((response) => {
      const { name } = response.data;
      return { ...todo, id: name };
    }); // {descr, date, priority, id}
};

// "https://<DATABASE_NAME>.firebaseio.com/users/localId/name.json?auth=<ID_TOKEN>"
export const getTodoApi = ({ localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .get(`/users/${localId}/todo.json`, {
      params: {
        auth: idToken,
      },
    })
    .then((res) => {
      return res.data
        ? Object.entries(res.data).map(([id, todo]) => ({
            id,
            ...todo,
          }))
        : [];
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

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
export const registerUserApi = ({ email, password }) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:signUp",
      {
        email,
        password,
        returnSecureToken: true,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then((response) => {
      const { idToken, email, refreshToken, localId } = response.data;
      return { idToken, email, refreshToken, localId };
    });
};

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
export const loginUserApi = ({ email, password }) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:signInWithPassword",
      {
        email,
        password,
        returnSecureToken: true,
      },
      {
        params: { key: API_KEY },
      }
    )
    .then(({ data: { idToken, email, refreshToken, localId } }) => {
      return { idToken, email, refreshToken, localId };
    });
};

// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]
export const getCurUserApi = (idToken) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:lookup",
      { idToken },
      {
        params: { key: API_KEY },
      }
    )
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    });
};
