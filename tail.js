
let tail = function(words) {
  let newWord = [];
  for (let i = 1; i < words.length; i++) {
    newWord.push(words[i]);
  }
  console.log(newWord);
  return newWord;
};

module.exports = tail
/* Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), words);*/