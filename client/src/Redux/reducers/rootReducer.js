import { combineReducers } from "redux";
import UserReducer from "./user.reducer";

const rootReducer = combineReducers({
  UserData: UserReducer
})

export default rootReducer;