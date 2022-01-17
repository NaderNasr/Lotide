const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepStrictEqual(middle([1,2,3,4,5]), [3]);
  });

  it("returns [100] for [1,2,100,4,5]", () => {
    assert.deepStrictEqual(middle([1,2,100,4,5]), [100]);
  });

  it("returns [100] NOT equal to [5]", () => {
    assert.notDeepEqual(middle([1,2,100,4,5]), [5]);
  });

});