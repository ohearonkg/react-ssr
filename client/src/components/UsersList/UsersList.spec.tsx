import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import UserList from "./UserList";

describe("Users List", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<UserList />);
  });

  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
