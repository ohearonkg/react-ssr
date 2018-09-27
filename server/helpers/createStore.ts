import axios from "axios";
import { Request } from "express";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../../client/src/reducers";

/**
 * This file is used to create our redux
 * store on the server
 */
export default (req: Request) => {
  /**
   * Server side axios configuration
   * which DOES NOT need to be proxied
   * with user's cookie
   */
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: { cookie: req.get("cookie") || "" }
  });

  const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};
