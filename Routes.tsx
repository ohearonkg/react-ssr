import * as React from "react";
import Home from "./client/src/components/Home/Home";
import UserList, { loadData } from "./client/src/components/UsersList/UserList";

/**
 * This componet is responsible for
 * defining the routes of our application
 * and will be rendered within a <StaticRouter />
 * for use on the server, and within a <BrowserRouter />
 * for use on the client
 */
const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/users",
    component: UserList,
    loadData
  }
];

export default routes;
