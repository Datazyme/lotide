//const assertEqual = require('../assertEqual');
const without = require('../without');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#without", () => {
  it("returns all numbers that are not the one to be removed", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("removes only values that match value and type", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 
  });

  it("removes the specified last item in the array", () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]); 
  });

  it("returns original array if the item to be removed is not in the array", () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["shoulder"]), ["hello", "world", "lighthouse"]); 
  });
});