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
  }
  for (const key of obj1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
    
  }
  return true;
  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ca = {c: '3', a:'1'};
console.log(eqObjects(ab, ba));// => true
console.log(eqObjects(ab, ca));// => false
