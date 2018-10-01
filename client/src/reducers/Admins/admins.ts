import { ActionType } from "typesafe-actions";
import * as adminActions from "../../actions/Admins/admins";
import {
  FETCH_ADMINS_FAILURE,
  FETCH_ADMINS_STARTED,
  FETCH_ADMINS_SUCCESS
} from "../../actions/Admins/constants";
import { IUser } from "../../models/User";

interface IAdminsState {
  /**
   * Are we currently loading
   * the list of admins
   */
  loadingAdmins: boolean;

  /**
   * The list of admins returned
   * from our api
   */
  admins: IUser[];

  /**
   * Error returned from attempting
   * to fetch out list of admins
   */
  error: Error;
}

const IAdminsInitialState: IAdminsState = {
  loadingAdmins: false,
  admins: [],
  error: null
};

type AdminsAction = ActionType<typeof adminActions>;

export default (
  state: IAdminsState = IAdminsInitialState,
  action: AdminsAction
) => {
  switch (action.type) {
    case FETCH_ADMINS_STARTED:
      return {
        ...state,
        loadingAdmins: true
      };

    case FETCH_ADMINS_SUCCESS:
      return {
        ...state,
        loadingAdmins: false,
        admins: action.payload
      };

    case FETCH_ADMINS_FAILURE:
      return {
        ...state,
        loadingAdmins: false,
        error: action.payload
      };

    default:
      return state;
  }
};
