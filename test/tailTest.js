const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 for Lighthouse, Labs", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it("returns Lighthouse", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });

});
