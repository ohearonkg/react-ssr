import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ApplicationState } from "../../reducers";

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
  isAuthenticated: boolean;
}

const Header = (props: IHeaderProps) => {
  const { isAuthenticated } = props;

  return (
    <div style={wrapperStyles}>
      <div>React SSR</div>
      <nav style={navItemsWrapperStyles}>
        <Link style={navLinkStyles} to="/">
          Home
        </Link>
        <Link style={navLinkStyles} to="/users">
          User List
        </Link>
        <Link style={navLinkStyles} to="/admins">
          Admin List
        </Link>
        {isAuthenticated === true && (
          <a style={navLinkStyles} href="/api/logout">
            Log Out
          </a>
        )}
        {isAuthenticated === false && (
          <a style={navLinkStyles} href="/api/auth/google">
            Login
          </a>
        )}
      </nav>
    </div>
  );
};

export { Header };

const mapStateToProps = (state: ApplicationState) => {
  return {
    isAuthenticated: state.authentication.currentUser !== null
  };
};

export default connect(mapStateToProps)(Header);
