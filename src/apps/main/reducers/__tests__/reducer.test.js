/* @flow */

import reducer from "apps/main/reducers/reducer";

describe("apps/main/reducers/reducer", () => {
  it("returns the initial state", () => {
    const state = {};
    expect(
      reducer({}, {
        type: "_TEST_ACTION"
      })
    ).toEqual(state);
  });
});
