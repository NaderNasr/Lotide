const letterPosition = (sentence) => {
  const results = {};
  const letters = sentence.split(" ").join("").toLowerCase();
  for (let i = 0; i < letters.length; i++) {
    if (results[letters[i]]) {
      results[letters[i]].push(i);
    }
    results[letters[i]] = [i];
    
  }

  return results;
};

module.exports = letterPosition;

// console.log(letterPosition('lighthouse labs'));