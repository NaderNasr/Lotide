const findKeyByValue = (object, value) => {
  let results = "";


  for (let key in object) {
    if (object[key] === value) {
      results = key;
    } else {
      results = undefined;
    }
  }
  return results;
};

module.exports = findKeyByValue;


// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected} `;
//   }
//   return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  
// };

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
