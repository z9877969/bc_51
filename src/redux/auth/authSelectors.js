export const selectIsAuth = (state) => state.auth.isAuth;
export const selectIdToken = (state) => state.auth.idToken;
export const selectRole = (state) => state.auth.role;
export const selectIsUserExist = (state) => Boolean(state.auth.localId);
