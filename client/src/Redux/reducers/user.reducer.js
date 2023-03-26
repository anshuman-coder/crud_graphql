// initial state
const initialState = {
  loading: false,
  error: null,
  data: null
};

const UserReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case "login": { 
      return { ...state }
    }
    case "signup": { 
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    }
    case "error": { 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    default: { 
      return { ...state }
      
    }
  }
}

export default UserReducer