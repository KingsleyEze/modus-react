import axios from "axios";
import { GET_USER_LIST, GET_USER_DETAIL } from "./types";
import { keys } from "../config/keys";

// Find Users
export const findUsers = () => dispatch => {
  axios
    .get(keys.randomuserURI)
    .then(res => {
      // Set persist users
      localStorage.setItem("users", JSON.stringify(res.data.results));
      dispatch({
        type: GET_USER_LIST,
        payload: res.data.results
      });
    })
    .catch(err =>
      dispatch({
        type: GET_USER_LIST,
        payload: {}
      })
    );
};

// Find a User by ID
export const findUserById = userId => dispatch => {
  const result = JSON.parse(localStorage.getItem("users"));
  if (result) {
    dispatch({
      type: GET_USER_DETAIL,
      payload: { user: result.filter(data => data.id.value === userId)[0] }
    });
  } else {
    dispatch({
      type: GET_USER_DETAIL,
      payload: { user: {} }
    });
  }
};
