import { LOGIN_SUCCESS, LOGOUT } from "../actions/types";

const initialState = {
  authenticated: false,
  user: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        authenticated: false,
        user: action.payload,
      };
    case LOGOUT:
      return {
        authenticated: false,
        user: null,
      };
    default:
      return state;
  }
}
