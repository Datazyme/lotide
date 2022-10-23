
let tail = function(words) {
  let newWord = [];
  for (let i = 1; i < words.length; i++) {
    newWord.push(words[i]);
  }
  console.log(newWord);
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎 Assertion Failed: ${actual} === ${expected}`);
  }
};
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), words);