import { AxiosInstance } from "axios";
import { Dispatch } from "redux";
import { createAsyncAction } from "typesafe-actions";
import { IUser } from "../../models/User";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCESS
} from "./constants";

export const fetchUsers = createAsyncAction(
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
)<void, IUser[], Error>();

export const fetchUsersFunction = () => {
  return (dispatch: Dispatch, getState: () => void, api: AxiosInstance) => {
    dispatch(fetchUsers.request());
    return api
      .get("/users")
      .then(res => res.data)
      .then(data => dispatch(fetchUsers.success(data)))
      .catch(err => dispatch(fetchUsers.failure(err)));
  };
};
