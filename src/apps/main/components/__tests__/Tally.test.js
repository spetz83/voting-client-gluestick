import React from "react";
import { shallow } from "enzyme";

import Tally from "apps/main/components/Tally";

describe("apps/main/components/Tally", () => {
  it("renders without an issue", () => {
    const subject = <Tally />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
