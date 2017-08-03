import React from "react";
import { shallow } from "enzyme";

import Vote from "apps/main/components/Vote";

describe("apps/main/components/Vote", () => {
  it("renders without an issue", () => {
    const subject = <Vote />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
