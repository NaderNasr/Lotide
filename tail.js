const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected} `;
  }
  return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  
};

const tail = (arr) => {
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));

console.log(tail([1,2,3,4,5]));
console.log();