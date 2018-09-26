import express, { Request, Response } from "express";
import createStore from "../helpers/createStore";
import renderer from "../helpers/renderer";

const app = express();
app.use(express.static("dist"));

app.get("*", (req: Request, res: Response) => {
  const store = createStore();
  // Some logic to go here
  res.send(renderer(req.url, store));
});

app.listen(3000, () => {
  // tslint:disable-next-line
  console.log("Listening on port 3000");
});
