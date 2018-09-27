// tslint:disable-next-line
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCESS
} from "../../actions/Users/constants";
import * as api from "../../api";
import { IUser } from "../../models/User";

export function* fetchUsers() {
  try {
    const users: IUser[] = yield call(api.fetchUsers);
    yield put({ type: FETCH_USERS_SUCCESS, payload: users });
  } catch (e) {
    yield put({ type: FETCH_USERS_FAILURE, e });
  }
}

export default function* fetchUsersSaga() {
  yield takeLatest(FETCH_USERS_STARTED, fetchUsers);
}
