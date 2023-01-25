const eqArrays = require("./eqArrays");
//tests if the results of eqArrays are indeed equal
//function determines if inputs are equal by strict comparison and returns truthy value
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🍏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;


