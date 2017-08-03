import React from "react";
import { shallow } from "enzyme";

import Results from "apps/main/components/Results";

describe("apps/main/components/Results", () => {
  it("renders without an issue", () => {
    const subject = <Results />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
