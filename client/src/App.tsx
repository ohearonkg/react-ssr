import { AxiosInstance } from "axios";
import * as React from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import { AnyAction, Store } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { fetchAuthenticationState } from "../src/actions/Authentication/authentication";
import Header from "../src/components/Header/Header";
import { ApplicationState } from "../src/reducers";

const App = (routes: any) => {
  const matches = routes.route.routes;
  return (
    <div>
      <Header />
      {renderRoutes(matches)}
    </div>
  );
};

const loadData = (
  store: Store<ApplicationState, AnyAction> & {
    dispatch: ThunkDispatch<{}, AxiosInstance, AnyAction>
  }
) => store.dispatch(fetchAuthenticationState());

export default {
  component: App,
  loadData
};
