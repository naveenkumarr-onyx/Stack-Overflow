import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import userReducer from "./users";
import loginReducer from "./loginReducer";
export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  userReducer,
  loginReducer,
});
