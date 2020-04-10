import { combineReducers } from "redux";

export default combineReducers({
  isAuthenticated: (state = false, action) => state,
});
