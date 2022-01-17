const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected} `;
  }
  return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  
};

module.exports = assertEqual;
