import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { ApplicationState } from "../../reducers";

/**
 * This component shall be responsible
 * for determing if the user is authenticated
 * and
 *
 * 1) AUTHENTICATED -> render the desired component
 * 2) NOT AUTHENTICATED -> redirect to the login screen
 */

interface IRequireAuthProps {
  isAuthenticated: boolean;
}

export default <P extends object>(Component: React.ComponentType<P>) => {
  class RequireAuth extends React.Component<P & IRequireAuthProps> {
    public render() {
      const { isAuthenticated, ...props } = this.props as IRequireAuthProps;
      return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />;
    }
  }
  const mapStateToProps = (state: ApplicationState) => {
    return {
      isAuthenticated: state.authentication.currentUser !== null
    };
  };

  // @ts-ignore
  return connect(mapStateToProps)(RequireAuth);
};
