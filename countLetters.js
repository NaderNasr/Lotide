const countLetters = (items) => {
  let joined = items.split(' ').join('').toLowerCase();
  let results = {};
  for (let item of joined) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
};

console.log(countLetters('ThisIsAnItem'));
console.log(countLetters('Hello How Are you'));
console.log(countLetters('HELLLLLLLOOOOOOooooOOooOOooOOo'));

