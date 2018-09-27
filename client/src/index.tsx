import * as React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Routes from "../../Routes";

import reducer from "./reducers";


// Grab the state from a global variable injected into the server-generated HTML
// @ts-ignore
const preloadedState = window.__PRELOADED_STATE__
​
// Allow the passed state to be garbage-collected
// @ts-ignore
delete window.__PRELOADED_STATE__
​
// Create Redux store with initial state
const store = createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)))

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
