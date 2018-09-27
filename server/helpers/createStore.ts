import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../../client/src/reducers";

/**
 * This file is used to create our redux
 * store on the server
 */
export default () => {
  const store = createStore(reducer, applyMiddleware(thunk));
  return store;
};
