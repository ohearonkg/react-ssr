import * as express from "express";
import renderer from "../helpers/renderer";

const app = express();
app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.send(renderer(req.url));
});

app.listen(3000, () => {
  // tslint:disable-next-line
  console.log("Listening on port 3000");
});
