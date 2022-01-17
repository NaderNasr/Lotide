const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected} `;
  }
  return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  
};
const eqArrays = (firstArr, secondArr) => {

  if (firstArr === secondArr) return true;
  if (firstArr === null || secondArr === null) return false;
  if (firstArr.length !== secondArr.length) return false;

  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) return false;
  }
  return true;

};

module.exports = eqArrays;