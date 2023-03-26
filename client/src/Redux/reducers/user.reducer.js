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
      return { ...state }
    }
    default: { 
      return { ...state }
      
    }
  }
}

export default UserReducer