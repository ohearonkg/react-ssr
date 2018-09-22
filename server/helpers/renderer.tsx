import * as React from "react";
// tslint:disable-next-line
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../../Routes";

export default (requestUrl: string) => {
  const content = renderToString(
    <StaticRouter location={requestUrl} context={{}}>
      <Routes />
    </StaticRouter>
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
