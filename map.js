const words = ["ground", "control", "to", "major", "tom"];

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

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));
