//function returns a new array with everything but the first value of input array
let tail = function(words) {
  let newWord = [];
  //start loop at index 1
  for (let i = 1; i < words.length; i++) {
    newWord.push(words[i]);
  }
  return newWord;
};
module.exports = tail;
