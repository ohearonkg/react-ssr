import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

/**
 * Using Hot Module Replacement
 * To Update Our Application Without
 * The Need For A Refresh
 */
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(<NextApp />, document.getElementById("App"));
  });
}

ReactDOM.render(<App />, document.getElementById("App"));
