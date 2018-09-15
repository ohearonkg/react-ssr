import * as express from "express";
import * as React from "react";
// tslint:disable-next-line
import { renderToString } from "react-dom/server";
import Home from "../../client/src/components/Home";

const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  // tslint:disable-next-line
  console.log("Listening on port 3000");
});
