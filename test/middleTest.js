const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


console.log(assertArraysEqual(middle([1,2,3,4,5]), [3]));
console.log(assertArraysEqual(middle([1,2,3,4,5]), [1]));
console.log(assertArraysEqual(middle([1,2,100,4,5]), [100]));