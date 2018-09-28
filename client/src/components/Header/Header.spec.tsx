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
   * Render Login button
   */
  it("Should render a login button if its prop value of isAuthenticated is false", () => {
    wrapper.setProps({ isAuthenticated: false });
    expect(wrapper.html()).toMatch("Login");
  });

  it("Should NOT render a logout button if its prop value of isAuthenticated is false", () => {
    wrapper.setProps({ isAuthenticated: false });
    expect(wrapper.html()).not.toMatch("Log Out");
  });

  /**
   * Render Logout Button
   */
  it("Should render a Logout button if its prop value of isAuthenticated is true", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.html()).toMatch("Log Out");
  });

  it("Should NOT render a Login button if its prop value of isAuthenticated is true", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.html()).not.toMatch("Login");
  });
});
