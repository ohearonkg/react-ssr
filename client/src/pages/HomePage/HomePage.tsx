import * as React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
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
      I'm The Home Component
    </div>
  );
};

export default {
  component: HomePage
};
