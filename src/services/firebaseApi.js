import axios from "axios";

const API_KEY = "AIzaSyAw3wCum4rVwVzGPGPbRjIvLjk0l7mZ7fI";

const baseUrl = {
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  DB: "https://bc-51-a26cd-default-rtdb.europe-west1.firebasedatabase.app",
  REFRESH_TOKEN: "https://securetoken.googleapis.com/v1",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

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
    });
};

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

export const getUserRoleApi = ({ localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .get(`/users/${localId}/role.json`, {
      params: {
        auth: idToken,
      },
    })
    .then((res) => res.data);
};

export const removeTodoApi = ({ id, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .delete(`/users/${localId}/todo/${id}.json`, {
      params: {
        auth: idToken,
      },
    })
    .then((res) => res.data);
};

export const updateTodoStatusApi = ({ id, body, localId, idToken }) => {
  return axios
    .patch(`/users/${localId}/todo/${id}.json`, body, {
      params: {
        auth: idToken,
      },
    })
    .then((res) => ({ ...res.data, id })); // {isDone: true}
};

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

// https://securetoken.googleapis.com/v1/token?key=[API_KEY]
export const refreshTokenApi = (refreshToken) => {
  setBaseUrl(baseUrl.REFRESH_TOKEN);
  return axios
    .post(
      "/token",
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { refresh_token, id_token } = data;
      return { idToken: id_token, refreshToken: refresh_token };
    });
};

// {
//   "expires_in": "3600",
//   "token_type": "Bearer",
//   "refresh_token": "[REFRESH_TOKEN]",
//   "id_token": "[ID_TOKEN]",
//   "user_id": "tRcfmLH7o2XrNELi...",
//   "project_id": "1234567890"
// }
