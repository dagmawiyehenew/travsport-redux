import isEmpty from "lodash/isEmpty";
import { SET_CURRENT_RACE } from "./messageTypes";

const initialState = {
   _new: false,
   _result :{}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_RACE:
      return {
        ...state,
        _new: !isEmpty(action.result),
        _result: action.result,
      };
    default:
      return state;
  }
};