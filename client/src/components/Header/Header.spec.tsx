import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import { MemoryRouter } from "react-router";
import { Header } from "./Header";

describe("Header Component", () => {
  let wrapper: ShallowWrapper;

  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    wrapper = shallow(
      <MemoryRouter>
        <Header isAuthenticated={false} />
      </MemoryRouter>
    );

    expect(toJson(wrapper.dive())).toMatchSnapshot();
  });

  /**
   * Render Login button
   */
  it("Should render a login button if its prop value of isAuthenticated is false", () => {
    wrapper = shallow(
      <MemoryRouter>
        <Header isAuthenticated={false} />
      </MemoryRouter>
    );
    expect(wrapper.html()).toMatch("Login");
  });

  it("Should NOT render a logout button if its prop value of isAuthenticated is false", () => {
    wrapper = shallow(
      <MemoryRouter>
        <Header isAuthenticated={false} />
      </MemoryRouter>
    );
    expect(wrapper.html()).not.toMatch("Log Out");
  });

  /**
   * Render Logout Button
   */
  it("Should render a Logout button if its prop value of isAuthenticated is true", () => {
    wrapper = shallow(
      <MemoryRouter>
        <Header isAuthenticated={true} />
      </MemoryRouter>
    );
    expect(wrapper.html()).toMatch("Log Out");
  });

  it("Should NOT render a Login button if its prop value of isAuthenticated is true", () => {
    wrapper = shallow(
      <MemoryRouter>
        <Header isAuthenticated={true} />
      </MemoryRouter>
    );
    expect(wrapper.html()).not.toMatch("Login");
  });
});
