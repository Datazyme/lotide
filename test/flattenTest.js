//import the functions to test
const flatten = require('../flatten');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#flatten", () => {
  it("returns a single array when given a nested array of numbers", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns a single array from nested array with strings and numbers", () => {
    assert.deepEqual(flatten(["we", 2, ["read", 4], 5, ["books"]]), [ 'we', 2, "read", 4, 5, "books" ]); 
  });
  it("returns undefined when input is not an array", () => {
    assert.deepEqual(flatten("Wowee"), undefined); 
  });
});