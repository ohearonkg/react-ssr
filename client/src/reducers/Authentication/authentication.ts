import { ActionType } from "typesafe-actions";
import * as authenticationActions from "../../actions/Authentication/authentication";
import {
  AUTHENTICATION_STATUS_FAILURE,
  AUTHENTICATION_STATUS_REQUESTED,
  AUTHENTICATION_STATUS_SUCCESS
} from "../../actions/Authentication/constants";
import { ICurrentUser } from "../../models/CurrentUser";

interface IAuthenticationState {
  /**
   * Is the request for checking
   * if the user is authenticated
   * underway
   */
  authenticationRequested: boolean;

  /**
   * Current authenticated user's
   * information
   */
  currentUser: ICurrentUser;

  /**
   * Was there an error attempting
   * to determine if the current
   * user is authenticated
   */
  authenticationErrror: Error;
}

const IAuthenticationReducerInitialState: IAuthenticationState = {
  authenticationRequested: false,
  currentUser: null,
  authenticationErrror: null
};

type AuthenticationAction = ActionType<typeof authenticationActions>;

export default (
  state: IAuthenticationState = IAuthenticationReducerInitialState,
  action: AuthenticationAction
) => {
  switch (action.type) {
    case AUTHENTICATION_STATUS_REQUESTED:
      return {
        ...state,
        authenticationRequested: true
      };

    case AUTHENTICATION_STATUS_SUCCESS:
      return {
        ...state,
        authenticationRequested: false,
        currentUser: action.payload
      };

    case AUTHENTICATION_STATUS_FAILURE:
      return {
        ...state,
        authenticationRequested: false,
        authenticationErrror: action.payload
      };

    default:
      return state;
  }
};
