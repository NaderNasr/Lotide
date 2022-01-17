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

module.exports = middle;
