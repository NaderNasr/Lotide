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
  } else {
    return `🔴🔴🔴 Assertion Failed: ${firstArr} !== ${secondArr} `;
  }
};

const without = (firstArr, secondArr) => {
  let withoutElements = [];

  for (let elements = 0; elements < firstArr.length; elements++) {
    if (firstArr[elements] !== secondArr[elements]) {
      withoutElements.push(firstArr[elements]);
    }
  }
  return withoutElements;
};

console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));