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

interface IHeaderProps {
  /**
   * Is there a currently logged
   * in user
   */
  isAuthenticated?: boolean;
}

export default (props: IHeaderProps) => {
  const { isAuthenticated } = props;

  return (
    <div style={wrapperStyles}>
      <div>React SSR</div>
      {isAuthenticated === true && (
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
          <a style={navLinkStyles} href="#">
            Log Out
          </a>
        </nav>
      )}
      {isAuthenticated === false && (
        <nav style={navItemsWrapperStyles}>
          <a style={navLinkStyles} href="#">
            Login
          </a>
        </nav>
      )}
    </div>
  );
};
