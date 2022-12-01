import isEmpty from "lodash/isEmpty";
import { SET_CURRENT_RACE } from "./messageTypes";

const initialState = {
   _new: false,
   _result :[] //{}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let _result = state._result
  switch (action.type) {
    case SET_CURRENT_RACE:
       //let item = _results.find(item => item.horse.id != action.result.horse.id)
       _result.push(action.result)
      return {
        ...state,
        _new: !isEmpty(action.result),
        _result:  _result, //action.result
      };
    default:
      return state;
  }
};