const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepStrictEqual(middle([1,2,3,4,5]), [3]);
  });

  it("returns [3] equal to [1]", () => {
    assert.deepStrictEqual(middle([1,2,3,4,5]), [3]);
  });

  it("returns '5' NOT equal to ['6']", () => {
    assert.notDeepEqual(middle([1,2,100,4,5]), [10]);
  });

});