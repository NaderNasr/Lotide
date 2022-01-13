const eqArrays = (firstArr, secondArr) => {

  if (firstArr === secondArr) return true;
  if (firstArr === null || secondArr === null) return false;
  if (firstArr.length !== secondArr.length) return false;

  for (let i = 0; i < firstArr.length; ++i) {
    if (firstArr[i] !== secondArr[i]) return false;
  }
  return true;

};

const assertArraysEqual = (firstArr, secondArr) => {
  if (eqArrays(firstArr, secondArr)) {
    return `🟢🟢🟢 Assertion Passed: ${firstArr} === ${secondArr} `;
  }
  return `🔴🔴🔴 Assertion Failed: ${firstArr} !== ${secondArr} `;
  
};

console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));