import setAuthorizationToken from "../utils/setAuthorizationToken";
import { SET_CURRENT_USER } from "../redux/reducers/messageTypes";

import axios from 'axios';
export function auth(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function loginUser(credential) {
  
  try {
    const response = async (dispatch) => {
        return await axios.post('/auth', credential).then((response)=>{
           setAuthorizationToken(response.data.token);
           localStorage.setItem('token', response.data.token);
           localStorage.setItem('credential', JSON.stringify(credential));
           dispatch(auth({token: response.data.token, credential:credential}));
           return response;
        })
    };

    return response;
  } catch (error) {
    return error.status(500).json(
      [
       {
          'massage' : 'Something went wrong, Please tye agin later',
          'ERROR_CODE' : 'SERVER_ERROR'
       } 
      ]
    );
  }
}

export function logoutUser() {
  const response = async (dispatch) => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(auth({}));
    return true;
  };

  return response;
}
