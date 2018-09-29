import { AxiosInstance } from "axios";
import { Dispatch } from "redux";
import { createAsyncAction } from "typesafe-actions";
import { ICurrentUser } from "../../models/CurrentUser";
import {
  AUTHENTICATION_STATUS_FAILURE,
  AUTHENTICATION_STATUS_REQUESTED,
  AUTHENTICATION_STATUS_SUCCESS
} from "./constants";

export const authentication = createAsyncAction(
  AUTHENTICATION_STATUS_REQUESTED,
  AUTHENTICATION_STATUS_SUCCESS,
  AUTHENTICATION_STATUS_FAILURE
)<void, ICurrentUser, Error>();

export const fetchAuthenticationState = () => {
  return (dispatch: Dispatch, getState: () => void, api: AxiosInstance) => {
    dispatch(authentication.request());
    return api
      .get("/current_user")
      .then(res => res.data || null)
      .then(data => dispatch(authentication.success(data)))
      .catch(err => dispatch(authentication.failure(err)));
  };
};
