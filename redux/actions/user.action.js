export const GET_USER = "GET_USER";

export const getUser = (jwt) => {
  return (dispatch) => {
    return dispatch({ type: GET_USER, payload: jwt });
  };
};
