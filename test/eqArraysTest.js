//imports eqArrays
const eqArrays = require('../eqArrays')

//imports chai
const assert = (require('chai').assert);

//mocha uses describe and it
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