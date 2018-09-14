import * as emotion from "emotion";
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import { createSerializer } from "jest-emotion";
import * as React from "react";
import Hello from "./Hello";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Hello Component", () => {
  /**
   * We create a new shallowly
   * mounted instance of our component
   * before each test
   */
  let wrapper: ShallowWrapper;
  let mounted: ReactWrapper;

  beforeEach(() => {
    wrapper = shallow(<Hello name="Kevin" age={12} />);
    mounted = mount(<Hello name="Kevin" age={12} />);
  });

  it("Should match its snapshot", () => {
    expect(toJson(mounted)).toMatchSnapshot();
  });

  it("Should render the value passed to its name prop", () => {
    expect(wrapper.html()).toMatch("Kevin");
  });
});
