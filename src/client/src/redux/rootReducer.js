import { combineReducers } from "redux";
import user from "./user/userSlice";
import login from "./login/loginSlice";
import error from "./error/errorSlice";
import comment from './comment/commentSlice'


export default combineReducers({
  login,
  user,
  comment,
  error,
});
