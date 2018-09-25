import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import mySaga from "./sagas";

/**
 * This file is used to create our redux
 * store on the server
 */
export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(mySaga);

  return store;
};
