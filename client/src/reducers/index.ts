import { combineReducers } from "redux";
import usersReducer from "./Users/users";

export default combineReducers({
  users: usersReducer
});
