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
