import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import usersReducer from "./Users/users";

const rootReducer = combineReducers({
  users: usersReducer
});

export type ApplicationState = StateType<typeof rootReducer>;
export default rootReducer;
