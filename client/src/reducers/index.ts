import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import authenticationReducer from "./Authentication/authentication";
import usersReducer from "./Users/users";

const rootReducer = combineReducers({
  users: usersReducer,
  authentication: authenticationReducer
});

export type ApplicationState = StateType<typeof rootReducer>;
export default rootReducer;
