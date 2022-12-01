import { SET_CURRENT_RACE } from "../redux/reducers/messageTypes";
import axios from 'axios';
export function newRace(result) {
  return {
    type: SET_CURRENT_RACE,
    result,
  };
}

export function getResults(error) {
  try {
    const response = async (dispatch, getState) => {
      return await axios.get('/results').then((response)=>{
          if(!response.error){
            dispatch(newRace(response.data));
            return response;
          }
      }).catch((error) => {
          switch (error.status) {
            case 401:
              error = {code: 'EXPIRED_SESSION'}
              break;
          
            default:
              break;
          }
          return error;
      })
    };

    return response;
  } catch (error) {
    console.log(error);
    console.log(error.response);
    console.log(error.response);
    console.log(error.response);
  }
}

