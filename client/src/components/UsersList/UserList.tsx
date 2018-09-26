import * as React from "react";
import { IUser } from "../../models/User";

interface IUserList {
  /**
   * Users to be rendered
   */
  users: IUser[];
}

export default (props: IUserList) => {
  const renderUsers = () => {
    return props.users.map((user: IUser) => (
      <li key={user.id}> {user.name} </li>
    ));
  };

  return <ul> {renderUsers()} </ul>;
};
