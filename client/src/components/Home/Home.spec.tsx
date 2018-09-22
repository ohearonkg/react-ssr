import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import Home from "./Home";

describe("Home Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Home />)));

  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
