import { ActionType } from "typesafe-actions";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCESS
} from "../../actions/Users/constants";
import * as userActions from "../../actions/Users/users";
import { IUser } from "../../models/User";

type UsersAction = ActionType<typeof userActions>;

interface IUsersState {
  loadingUsers: boolean;
  users: IUser[];
  error: Error;
}

const UsersInitialState: IUsersState = {
  loadingUsers: false,
  users: [],
  error: null
};

export default (
  state: IUsersState = UsersInitialState,
  action: UsersAction
) => {
  switch (action.type) {
    case FETCH_USERS_STARTED:
      return {
        ...state,
        loadingUsers: true
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loadingUsers: false,
        users: action.payload
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loadingUsers: false,
        error: action.payload
      };

    default:
      return state;
  }
};
