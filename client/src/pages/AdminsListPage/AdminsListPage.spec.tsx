import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import { IUser } from "../../models/User";
import { AdminsListPage } from "./AdminsListPage";

describe("Admins List Page", () => {
  const sampleAdmins: IUser[] = [
    {
      id: 1,
      name: "admin1"
    },
    {
      id: 2,
      name: "admin2"
    }
  ];

  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AdminsListPage
        fetchAdmins={() => {
          return;
        }}
        admins={[]}
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
   * Rendering list of admins
   */
  it("Should render each user in its admins prop", () => {
    wrapper.setProps({ admins: sampleAdmins });

    expect(wrapper.find("li")).toHaveLength(2);

    const wrapperHtml: string = wrapper.html();
    expect(wrapperHtml).toMatch("admin1");
    expect(wrapperHtml).toMatch("admin2");
  });
});
