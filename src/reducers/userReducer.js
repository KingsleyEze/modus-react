import { GET_USER_LIST, GET_USER_DETAIL } from "../actions/types";

const initialState = {
  users: null,
  user: {}
};
// User details reducers
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        users: action.payload
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
