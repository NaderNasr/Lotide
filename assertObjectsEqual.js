const eqArrays = (firstArr, secondArr) => {
  if (firstArr === secondArr) return true;
  if (firstArr === null || secondArr === null) return false;
  if (firstArr.length !== secondArr.length) return false;

  for (let i = 0; i < firstArr.length; ++i) {
    if (firstArr[i] !== secondArr[i]) return false;
  }
  return true;

};

const eqObjects = (object1, object2) => {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return false;
  } else {
    for (const key of obj1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; // fix [object Object] output
  if (eqObjects(actual, expected)) {
    return `🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `;
  }
  return `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} `;
  
};

console.log(assertObjectsEqual({a:'3', b:'4'}, {a:'3', b:'4'}));