import * as React from "react";
import { connect } from "react-redux";
import { Store } from "redux";
import { fetchUsers } from "../../actions/Users/users";
import * as api from "../../api";
import { IUser } from "../../models/User";
import { ApplicationState } from "../../reducers";

interface IUserList {
  /**
   * Users to be rendered
   */
  users: IUser[];
}

const UserList = (props: IUserList) => {
  const renderUsers = () => {
    return props.users.map((user: IUser) => (
      <li key={user.id}> {user.name} </li>
    ));
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
 */
const loadData = (store: Store<ApplicationState>) => {
  store.dispatch(fetchUsers.request());
  return api
    .fetchUsers()
    .then(data => store.dispatch(fetchUsers.success(data)))
    .catch(err => store.dispatch(fetchUsers.failure(err)));
};

export { UserList, loadData };
export default connect(mapStateToProps)(UserList);
