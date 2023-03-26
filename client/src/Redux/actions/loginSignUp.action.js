import { gql } from "apollo-boost";
import { LoginSignClient } from "../../GraphqlClient";

export const LoginUser = ({ email, password }) => {
  return async dispatch => {
    try {
      let result = await LoginSignClient.mutate({
        mutation: gql`
        mutation loginUser($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              _id,
              fullName,
              email,
              token
            }
          }
        `,
        variables: {
          email,
          password
        }
      });

      result = await result.data;
      result = result.login;
      localStorage.setItem(process.env.REACT_APP_LOCAL, JSON.stringify(result));
      dispatch({
        type: "login",
        payload: result
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const SignUpUser = ({ fullName, email, password }) => {
  return async dispatch => {
    try {
      const result = await LoginSignClient.mutate({
        mutation: gql`
          mutation createUser($fullName: String!, $email: String!, $password: String!) {
            signup(fullName: $fullName, email: $email, password: $password) {
              _id,
              fullName,
              email,
              token
            }
          }
      `,
        variables: {
          fullName,
          email,
          password
        }
      });

      const userData = await result.data.signup;
      // console.log(userData)
      localStorage.setItem(process.env.REACT_APP_LOCAL, JSON.stringify(userData));
      dispatch({
        type: "signup",
        payload: userData
      })
    } catch (error) {
      console.error(error)
      dispatch({
        type: "error",
        payload: JSON.parse(error.message)
      });
    }
  }
}

export const logoutUser = () => { 
  return async dispatch => { 
    localStorage.removeItem(process.env.REACT_APP_LOCAL);
    dispatch({
      type: "logout",
      payload: null
    });
  }
}