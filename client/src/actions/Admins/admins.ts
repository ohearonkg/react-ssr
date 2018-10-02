import { AxiosInstance } from "axios";
import { Dispatch } from "redux";
import { createAsyncAction } from "typesafe-actions";
import { IUser } from "../../models/User";
import {
  FETCH_ADMINS_FAILURE,
  FETCH_ADMINS_STARTED,
  FETCH_ADMINS_SUCCESS
} from "./constants";

export const fetchAdmins = createAsyncAction(
  FETCH_ADMINS_STARTED,
  FETCH_ADMINS_SUCCESS,
  FETCH_ADMINS_FAILURE
)<void, IUser[], Error>();

export const fetchAdminsFunction = () => {
  return (dispatch: Dispatch, getState: () => void, api: AxiosInstance) => {
    dispatch(fetchAdmins.request());
    return api
      .get("/admins")
      .then(res => res.data)
      .then(data => dispatch(fetchAdmins.success(data)))
      .catch(err => dispatch(fetchAdmins.failure(err)));
  };
};
