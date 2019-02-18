import { LOGIN, LOGOUT } from "./types";

// Login
export const loginUser = () => dispatch => {
  dispatch({
    type: LOGIN,
    payload: true
  });
};

// Logout
export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: false
  });
};
