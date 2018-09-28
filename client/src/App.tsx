import * as React from "react";
import { renderRoutes } from "react-router-config";
import Header from "../src/components/Header/Header";

const App = (routes: any) => {
  const matches = routes.route.routes;
  return (
    <div>
      <Header />
      {renderRoutes(matches)}
    </div>
  );
};

export default {
  component: App
};
