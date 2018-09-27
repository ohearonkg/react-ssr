import express, { Request, Response } from "express";
import proxy from "http-proxy-middleware";
import { matchRoutes } from "react-router-config";
import Routes from "../../Routes";
import createStore from "../helpers/createStore";
import renderer from "../helpers/renderer";

const app = express();

/**
 * Proxy any requests to /api
 * onto our api server
 */
app.use(
  proxy("/api", {
    target: "http://react-ssr-api.herokuapp.com"
  })
);

/**
 * Allowing express to use
 * the static dist output folder
 */
app.use(express.static("dist"));

app.get("*", (req: Request, res: Response) => {
  const store = createStore();

  const matchedRoutes = matchRoutes(Routes, req.url);

  /**
   * Array of promises to be called to retrieve data
   * before information is sent to the clientpassing
   * the store created to each loadData function so
   * that redux actions may be dispatched
   */
  const loadDataFunction = matchedRoutes.map(
    (match: any) => (match.route.loadData ? match.route.loadData(store) : null)
  );

  /**
   * Await all promises to resolve then
   * render our content with our redux store
   * containing any desired server side fetched
   * data
   */
  Promise.all(loadDataFunction).then(() => res.send(renderer(req.url, store)));
});

app.listen(3000, () => {
  // tslint:disable-next-line
  console.log("Listening on port 3000");
});
