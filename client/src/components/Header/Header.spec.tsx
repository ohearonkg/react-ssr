import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import Header from "./Header";

describe("Header Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  /**
   * Render login button
   */
  it("should render a login button if its prop value of isAuthenticated is false", () => {
    wrapper.setProps({ isAuthenticated: false });
    expect(wrapper.html()).toMatch("Login");
  });
});
