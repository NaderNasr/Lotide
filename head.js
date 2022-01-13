const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected} `;
  }
  return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  
};

const head = (arr) => {
  return arr[0];
};

console.log(assertEqual(head(["Hello", "LHL", "How's", "it", "going"]), "Hello"));
console.log(assertEqual(head(["Hello", "LHL", "How's", "it", "going"]), "yessss"));
console.log(assertEqual(head([1,2,3]), 1));
console.log(assertEqual(head([2,4,6]), 0));
