import HomePage from "./client/src/pages/HomePage/HomePage";
import UserListPage from "./client/src/pages/UsersListPage/UserListPage";

/**
 * This componet is responsible for
 * defining the routes of our application
 * and will be rendered within a <StaticRouter />
 * for use on the server, and within a <BrowserRouter />
 * for use on the client
 */
const routes = [
  {
    ...HomePage,
    path: "/",
    exact: true
  },
  {
    ...UserListPage,
    path: "/users"
  }
];

export default routes;
