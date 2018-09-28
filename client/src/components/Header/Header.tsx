import * as React from "react";

const wrapperStyles = {
  width: "100%",
  display: "flex",
  alignItems: "center"
};

const navItemsWrapperStyles = {
  flex: "1 1 auto",
  display: "flex",
  justifyContent: "flex-end",
  color: "black"
};

const navLinkStyles = {
  textDecoration: "none",
  padding: "5px"
};

export default () => (
  <div style={wrapperStyles}>
    <div>React SSR</div>
    <nav style={navItemsWrapperStyles}>
      <a style={navLinkStyles} href="#">
        Home
      </a>
      <a style={navLinkStyles} href="#">
        User List
      </a>
      <a style={navLinkStyles} href="#">
        Admin List
      </a>
    </nav>
  </div>
);
