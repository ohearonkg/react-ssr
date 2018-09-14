import * as emotion from "emotion";
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import { createSerializer } from "jest-emotion";
import * as React from "react";
import Hello from "../Hello/Hello";
import HelloList from "./HelloList";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Hello List Component", () => {
  /**
   * We create a new shallowly
   * mounted instance of our component
   * before each test
   */
  let wrapper: ShallowWrapper;
  let mounted: ReactWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <HelloList
        hellos={[
          {
            age: 24,
            name: "Kevin"
          },
          {
            age: 22,
            name: "Sarah"
          }
        ]}
      />
    );
    mounted = mount(
      <HelloList
        hellos={[
          {
            age: 24,
            name: "Kevin"
          },
          {
            age: 22,
            name: "Sarah"
          }
        ]}
      />
    );
  });

  it("Should match its snapshot", () => {
    expect(toJson(mounted)).toMatchSnapshot();
  });

  it("Should render a <Hello /> item for each element within its hellos prop", () => {
    expect(wrapper.find(Hello)).toHaveLength(2);
  });
});
