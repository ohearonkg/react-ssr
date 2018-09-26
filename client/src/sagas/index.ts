// tslint:disable-next-line
import { fork } from "redux-saga/effects";
import usersSaga from "./Users/users";

export default function* rootSaga() {
  yield fork(usersSaga);
}
