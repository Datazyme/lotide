//function to loop through sentence and return an object with letter keys and number of times as value
let countLetters = function(letter) {
  let results = {};
  for (const i of letter) {
    if (i !== " ") {
      if (results[i]) {
        results[i] += 1;
      } else {
        results[i] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;