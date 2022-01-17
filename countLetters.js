const countLetters = (string) => {
  let joined = string.split(' ').join('').toLowerCase();
  let results = {};
  for (let letters of joined) {
    if (results[letters]) {
      results[letters] += 1;
    }
    results[letters] = 1;
    
  }
  return results;
};

module.exports = countLetters;

// console.log(countLetters('ThisIsAnItem'));
// console.log(countLetters('Hello How Are you'));
// console.log(countLetters('HELLLLLLLOOOOOOooooOOooOOooOOo'));

