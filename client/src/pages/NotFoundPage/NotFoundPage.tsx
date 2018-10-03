import * as React from "react";
import { Helmet } from "react-helmet";

const NotFoundPage = (props: any) => {
  /**
   * Will only be defined on server,
   * on client will be undefined.
   */
  if (props.staticContext) {
    props.staticContext.notFound = true;
  }
  const buildHead = () => {
    return (
      <Helmet>
        <title> React SRR - Home </title>
        <meta name="og:title" content="React SSR - Home" />
      </Helmet>
    );
  };

  return (
    <div>
      {buildHead()}
      <h1> Oops... I Can't Find What You're Looking For :( </h1>
    </div>
  );
};

export default {
  component: NotFoundPage
};
