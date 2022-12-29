//function to test if arrays are equal
function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

//test for eqArrays function
const assertEqual = function(eqArrays, expected) {
  if (eqArrays === expected) {
    console.log(`🍏 Assertion Passed: ${eqArrays} === ${expected}`);
  } else {
    console.log(`🍎 Assertion Failed: ${eqArrays} === ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

//takes in array and callback function to return new, transformed array
const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;