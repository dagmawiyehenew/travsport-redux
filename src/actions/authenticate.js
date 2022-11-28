import setAuthorizationToken from "../utils/setAuthorizationToken";
import { SET_CURRENT_USER } from "../redux/reducers/messageTypes";

export function auth(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function loginUser(data) {
  try {
    const token = async (dispatch) => {
      setAuthorizationToken(
        "f47z9AsawvxBBDj1E7g2sNa6dLjp6dkNNfU3qm0quyntGbIhQ7mu5MwiKGoxT9HI"
      );
      localStorage.setItem('token',  "f47z9AsawvxBBDj1E7g2sNa6dLjp6dkNNfU3qm0quyntGbIhQ7mu5MwiKGoxT9HI");
      return await dispatch(
        auth({
          user: "f47z9AsawvxBBDj1E7g2sNa6dLjp6dkNNfU3qm0quyntGbIhQ7mu5MwiKGoxT9HI",
          credential: data,
        })
      );
    };

    return token;
  } catch (error) {
    console.log(error.response);
    console.log(error.response);
    console.log(error.response);
  }
}
