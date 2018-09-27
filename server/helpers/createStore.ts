import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import reducer from "../../client/src/reducers";

/**
 * This file is used to create our redux
 * store on the server
 */
export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));

  return store;
};
