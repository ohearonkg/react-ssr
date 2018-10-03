import { AxiosInstance } from "axios";
import * as React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { AnyAction, Dispatch, Store } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { fetchAdmins, fetchAdminsFunction } from "../../actions/Admins/admins";
import { fetchUsersFunction } from "../../actions/Users/users";
import RequireAuth from "../../hocs/RequireAuth/RequireAuth";
import { IUser } from "../../models/User";
import { ApplicationState } from "../../reducers";

interface IAdminsListPageProps {
  /**
   * Function to be called to fetch
   * the list of admins
   */
  fetchAdmins: () => void;

  /**
   * List of admins
   */
  admins: IUser[];
}

class AdminsListPage extends React.Component<IAdminsListPageProps, {}> {
  public componentDidMount() {
    this.props.fetchAdmins();
  }

  public renderAdmins = () =>
    this.props.admins.map((admin: IUser) => (
      <li key={admin.id}> {admin.name} </li>
    ));

  public buildHead = () => {
    return (
      <Helmet>
        <title> React SRR - Admins </title>
        <meta name="og:title" content="React SSR - Home" />
      </Helmet>
    );
  };

  public render() {
    return (
      <div>
        {this.buildHead()}
        <h1> Protected Admins List</h1>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

/* Thunk called to load data on the
 * server side
 *
 * Arguments passed in include the axios instance
 * which is different between client and server. The
 * client side requests MUST be proxied.
 */
const loadData = (
  store: Store<ApplicationState, AnyAction> & {
    dispatch: ThunkDispatch<{}, AxiosInstance, AnyAction>;
  }
) => store.dispatch(fetchAdminsFunction());

const mapStateToProps = (state: ApplicationState) => {
  return {
    admins: state.admins.admins
  };
};

export { AdminsListPage };

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // @ts-ignore
    fetchAdmins: () => dispatch(fetchAdminsFunction())
  };
};

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(RequireAuth(AdminsListPage)),
  loadData
};
