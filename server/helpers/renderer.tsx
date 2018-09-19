import * as React from "react";
// tslint:disable-next-line
import { renderToString } from "react-dom/server";
import Home from "../../client/src/components/Home";

export default () => {
  const content = renderToString(<Home />);

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
