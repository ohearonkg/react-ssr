import * as React from "react";
import { renderRoutes } from "react-router-config";

const App = (routes: any) => {
  const matches = routes.route.routes;
  return (
    <div>
      <h1> Hello </h1>
      {renderRoutes(matches)}
    </div>
  );
};

export default {
  component: App
};
