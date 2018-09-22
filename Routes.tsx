import * as React from "react";
import { Route, Switch } from "react-router";
import Home from "./client/src/components/Home/Home";

/**
 * This componet is responsible for
 * defining the routes of our application
 * and will be rendered within a <StaticRouter />
 * for use on the server, and within a <BrowserRouter />
 * for use on the client
 */
export default () => (
  <div>
    <div>
      <div>
        <a href="/">Home</a>
      </div>
      <div>
        <a href="/about">About</a>
      </div>
      <div>
        <a href="/posts">Posts</a>
      </div>
    </div>

    <Switch>
      <Route exact path="/" component={Home} />;
      <Route path="/about" render={() => <h1> About Page Here</h1>} />
      <Route path="/posts" render={() => <h1> Some Posts</h1>} />
    </Switch>
  </div>
);
