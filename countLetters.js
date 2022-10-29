const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎 Assertion Failed: ${actual} === ${expected}`);
  }
};

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

console.log(countLetters("lighthouse in the house"));