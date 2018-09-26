import * as React from "react";
// tslint:disable-next-line
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import { Store } from "redux";
import Routes from "../../Routes";

export default (requestUrl: string, store: Store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={requestUrl} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="client.bundle.js"></script>
      </body>
    </html>
  `;
};
