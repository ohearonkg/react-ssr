import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../../client/src/reducers";
import rootSaga from "../../client/src/sagas";

/**
 * This file is used to create our redux
 * store on the server
 */
export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return store;
};
