import serialize from "javascript-serialize";
import * as React from "react";
// tslint:disable-next-line
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import { Store } from "redux";
import Routes from "../../Routes";

export default (requestUrl: string, store: Store, context: object) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={requestUrl} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();
  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
         window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
         </script>
        <script src="client.bundle.js"></script>
      </body>
    </html>
  `;
};
