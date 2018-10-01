import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import adminsRedcer from "./Admins/admins";
import authenticationReducer from "./Authentication/authentication";
import usersReducer from "./Users/users";

const rootReducer = combineReducers({
  admins: adminsRedcer,
  users: usersReducer,
  authentication: authenticationReducer
});

export type ApplicationState = StateType<typeof rootReducer>;
export default rootReducer;
