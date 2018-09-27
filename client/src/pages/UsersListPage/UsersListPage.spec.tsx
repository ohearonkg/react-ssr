import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import { UserListPage } from "./UserListPage";

describe("Users List Page", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <UserListPage
        users={[
          {
            id: 1,
            name: "a"
          },
          {
            id: 2,
            name: "b"
          },
          {
            id: 3,
            name: "c"
          }
        ]}
      />
    );
  });

  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  /**
   * Showing list of users
   */
  it("Should render a list of users passed to its users prop", () => {
    expect(wrapper.find("li")).toHaveLength(3);
  });
});
