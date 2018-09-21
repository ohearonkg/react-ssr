import * as React from "react";
import { Route, Switch } from "react-router";
import Home from "./client/src/components/Home";

/**
 * This componet is responsible for
 * defining the routes of our application
 * and will be rendered within a <StaticRouter />
 * for use on the server, and within a <BrowserRouter />
 * for use on the client
 */
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />;
  </Switch>
);