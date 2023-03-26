import ApolloClient from "apollo-boost";
const URI = process.env.REACT_APP_API;
const localKey = process.env.REACT_APP_LOCAL;

export const LoginSignClient = new ApolloClient({
  uri: `${URI}/public`
});

export const UserClient = new ApolloClient({
  uri: `${URI}/user`,
  headers: {
    Authorization: () => {
      const user = JSON.parse(localStorage.getItem(localKey))
      if (user?.token) {
        return `Bearer ${user.token}`
      } else { 
        return ""
      }
    }
  }
});

export const CarClient = new ApolloClient({
  uri: `${URI}/car`,
  headers: {
    Authorization: () => {
      const user = JSON.parse(localStorage.getItem(localKey))
      if (user?.token) {
        return `Bearer ${user.token}`
      } else { 
        return ""
      }
    }
  }
})