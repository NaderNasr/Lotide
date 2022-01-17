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

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(assertEqual(result.length, 2));
// console.log(assertEqual(result[0], "Lighthouse"));
// console.log(assertEqual(result[1], "Labs"));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// console.log(assertEqual(words.length, 3));