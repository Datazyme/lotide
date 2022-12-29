//the assertArrayEqual test already tests if the arrays are equal so I cannot see any way to do yet 
//another test if the equal arrays are equal
const assertArraysEqual = require('../assertArraysEqual');
const assert = (require('chai').assert);
const eqArrays = require('../assertArraysEqual');

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#eqArrays", () => {
  it("returns true when arrays are equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3,], [1, 2, 3]), true);
  });
  it("returns false when arrays are not equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3,], [3, 2, 1]), false);; 
  });
  it("returns true if values are equal strings", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  });
  it("returns false if the values in the array are not strictly equal", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });
  it("returns false if one array is empty", () => {
    assert.deepEqual(eqArrays([], [3, 5]), false); 
  });
  it("returns false if one array is empty", () => {
    assert.deepEqual(eqArrays(["1", 2], []), false); 
  });
});
//Tests
// assertEqual(eqArrays([1, 2, 3,], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3,], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3,], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false