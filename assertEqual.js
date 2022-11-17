//function determines if inputs are equal by strict comparison and returns truthy value
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎 Assertion Failed: ${actual} !== ${expected}`);
  }
};
module.exports = assertEqual;