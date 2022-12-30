//function to turn a string into an object that shows each letter and the index at which it occurs
let countLetters = function(letter) {
  let results = {};
  //loops through string and creates object letter key and index value, spaces are omitted
  for (let i = 0; i < letter.length; i++) {
    //sets key
    let key = letter[i];
    if (key !== " ") {
      if (results[key]) {
        results[key].push(i);
      } else {
        results[key] = [i];
      }
    }
  } 
  return results;
}

module.exports = countLetters;
