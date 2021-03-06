import { rejects } from "assert";
import express, { Request, Response } from "express";
import proxy from "express-http-proxy";
import { StaticRouterContext } from "react-router";
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
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts: any) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);

/**
 * Allowing express to use
 * the static dist output folder
 */
app.use(express.static("dist"));

app.get("*", (req: Request, res: Response) => {
  const store = createStore(req);

  const matchedRoutes = matchRoutes(Routes, req.url);

  /**
   * Array of promises to be called to retrieve data
   * before information is sent to the clientpassing
   * the store created to each loadData function so
   * that redux actions may be dispatched
   *
   * We map each promise wrapping it in an additional
   * promise so that REGARDLESS of if each promise resolves
   * or rejects our promise.all call will show all promsies
   * to be resolved and render content to th euser
   */
  const loadDataFunction = matchedRoutes
    .map(
      (match: any) =>
        match.route.loadData ? match.route.loadData(store) : null
    )
    .map((promise: any) => {
      if (promise) {
        return new Promise((resolve, reject) =>
          promise.then(resolve).catch(resolve)
        );
      }
    });

  /**
   * Await all promises to resolve then
   * render our content with our redux store
   * containing any desired server side fetched
   * data
   */
  Promise.all(loadDataFunction).then(() => {
    /**
     * The conext variable used by react router
     * allows us to mark routes as not found
     * so that we may send an appropriate 404
     * status code to the user's browser
     */
    const context = {};
    const content = renderer(req.url, store, context);

    /**
     * Requested Route is Not Found
     */
    // @ts-ignore
    if (context.notFound) {
      res.status(404);
    }

    /**
     * The static router has rendered
     * a redirect we must redirect the user
     */
    // @ts-ignore
    if (context.url) {
      // @ts-ignore
      res.redirect(301, context.url);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  // tslint:disable-next-line
  console.log("Listening on port 3000");
});
