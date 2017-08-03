import React from "react";
import { shallow } from "enzyme";

import Winner from "apps/main/components/Winner";

describe("apps/main/components/Winner", () => {
  it("renders without an issue", () => {
    const subject = <Winner />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
