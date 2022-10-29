let countLetters = function(letter) {
  let results = {};
  

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
console.log(countLetters("lighthouse in the house"));
/*{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}*/