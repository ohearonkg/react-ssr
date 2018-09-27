import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import HomePage from "./HomePage";

describe("Home Page", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<HomePage />)));

  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
