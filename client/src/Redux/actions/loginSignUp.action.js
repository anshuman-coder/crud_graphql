export const LoginUser = ({ email, password }) => { 
  return async dispatch => { 
    dispatch({
      type: "login",
      payload: {
        name: "Anshuman Singh",
        userName: "Anshuman-coder"
      }
    });
  }
}