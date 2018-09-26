import * as React from "react";
import { connect } from "react-redux";
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

export { UserList };
export default connect(mapStateToProps)(UserList);
