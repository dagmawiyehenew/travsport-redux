import isEmpty from "lodash/isEmpty";
import { SET_CURRENT_USER } from "./messageTypes";

const initialState = {
  isAuthenticated: false,
  token: {},
  credential: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.token),
        token: action.token,
      };
    default:
      return state;
  }
};