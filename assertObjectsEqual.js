const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; // fix [object Object] output
  if (eqObjects(actual, expected)) {
    return `🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `;
  }
  return `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} `;
  
};

module.exports = assertObjectsEqual;