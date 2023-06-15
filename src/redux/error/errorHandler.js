import { refreshToken } from "../auth/authOperations";

export const errorHandler =
  ({ error, cb }) =>
  (dispatch) => {
    if (error.response.status === 401 || error.response.status === 400) {
      // request refreshToken()
      setTimeout(() => {
        dispatch(refreshToken(cb));
      });
    }
  };
