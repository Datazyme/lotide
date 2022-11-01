function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
const assertEqual = function(eqArrays, expected) {
  //console.log(expected);
  if (eqArrays === expected) {
    console.log(`🍏 Assertion Passed: ${eqArrays} === ${expected}`);
  } else {
    console.log(`🍎 Assertion Failed: ${eqArrays} === ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  // temporary code
  //console.log("array: ", array);
  //console.log("callback: ", callback);
  const results = [];
  for(let item of array) {
    //console.log(`item Before: `, item);
    //console.log(`item After: `, callback(item));
    //console.log('---')
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(assertEqual(eqArrays(results1, words), true));