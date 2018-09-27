import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../../client/src/reducers";

/**
 * Server side axios configuration
 * which DOES NOT need to be proxied
 */
const axiosInstance = axios.create({
  baseURL: "http://react-ssr-api.herokuapp.com"
});

/**
 * This file is used to create our redux
 * store on the server
 */
export default () => {
  const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};
