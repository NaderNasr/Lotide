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



const middle = (arr) => {
  let result = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return [];
  }
  if (arr.length % 2 === 1) {
    let even = (arr.length - 1) / 2;
    result.push(arr[even]);
    return result;
  }
  if (arr.length % 2 === 0) {
    let odd = (arr.length / 2) - 1;
    let odd2 = (arr.length / 2);
    result.push(arr[odd], arr[odd2]);
    return result;
  }
};

console.log(assertArraysEqual(middle([1,2,3,4,5]), [3]));