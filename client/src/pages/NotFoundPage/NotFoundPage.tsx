import * as React from "react";
import { StaticRouterContext } from "react-router";

const NotFoundPage = (props: any) => {
  /**
   * Will only be defined on server,
   * on client will be undefined.
   */
  if (props.staticContext) {
    props.staticContext.notFound = true;
  }
  return <h1> Oops... I Can't Find What You're Looking For :( </h1>;
};

export default {
  component: NotFoundPage
};
