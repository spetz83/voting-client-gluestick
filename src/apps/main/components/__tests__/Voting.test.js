import React from "react";
import { shallow } from "enzyme";

import Voting from "apps/main/components/Voting";

describe("apps/main/components/Voting", () => {
  it("renders without an issue", () => {
    const subject = <Voting />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
