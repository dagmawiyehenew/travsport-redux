import isEmpty from "lodash/isEmpty";
import { SET_CURRENT_RACE } from "./messageTypes";

const initialState = {
   _new: false,
   _result :[]
};

export default (state = initialState, action = {}) => {
  let _result = state._result
  switch (action.type) {
    case SET_CURRENT_RACE:
      let _results = [..._result, action.result];
      return {
        ...state,
        _new: !isEmpty(action.result),
        _result: _results,
      };
    default:
      return state;
  }
};