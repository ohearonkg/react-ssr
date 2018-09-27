import { AxiosInstance } from "axios";
import * as React from "react";
import { connect } from "react-redux";
import { AnyAction, Store } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { fetchUsersFunction } from "../../actions/Users/users";
import { IUser } from "../../models/User";
import { ApplicationState } from "../../reducers";

interface IUserListPage {
  /**
   * Users to be rendered
   */
  users: IUser[];
}

const UserListPage = (props: IUserListPage) => {
  const renderUsers = () => {
    const { users } = props;
    return users.map((user: IUser) => <li key={user.id}> {user.name} </li>);
  };

  return (
    <div>
      <h1> User List </h1>
      <ul> {renderUsers()} </ul>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    users: state.users.users
  };
};

/**
 * Thunk called to load data on the
 * server side
 *
 * Arguments passed in include the axios instance
 * which is different between client and server. The
 * client side requests MUST be proxied.
 */
const loadData = (
  store: Store<ApplicationState, AnyAction> & {
    dispatch: ThunkDispatch<{}, AxiosInstance, AnyAction>
  }
) => store.dispatch(fetchUsersFunction());

export { UserListPage };

export default {
  component: connect(mapStateToProps)(UserListPage),
  loadData
};
