import { SET_CURRENT_RACE } from "../redux/reducers/messageTypes";

export function newRace(result) {
  return {
    type: SET_CURRENT_RACE,
    result,
  };
}

export function getResults() {
  try {
    const response = async (dispatch, getState) => {
      const data = {
        result: "f47z9AsawvxBBDj1E7g2sNa6dLjp6dkNNfU3qm0quyntGbIhQ7mu5MwiKGoxT9HI",
      };
      return await dispatch(newRace(data));
    };

    return response;
  } catch (error) {
    console.log(error);
    console.log(error.response);
    console.log(error.response);
    console.log(error.response);
  }
}
