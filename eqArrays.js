const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected} `;
  } else {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  }
};


const eqArrays = (firstArr, secondArr) => {
  firstArr.sort((a,b) => a - b);
  secondArr.sort((a,b) => a - b);

  if (firstArr === secondArr) return true;
  if (firstArr === null || secondArr === null) return false;
  if (firstArr.length !== secondArr.length) return false;

  for (let i = 0; i < firstArr.length; ++i) {
    if (firstArr[i] !== secondArr[i]) return false;
  }
  return true;

};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));