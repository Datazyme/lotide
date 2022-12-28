//const assertEqual = require('../assertEqual');
const takeUntil = require('../takeUntil');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#takeUntil", () => {
  it("returns all numbers that are before a number that is less than zero", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [[1, 2, 5, 7, 2]]);
  });
  it("returns everything before the comma", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, [["I've", "been", "to", "Hollywood"]]); 
  });

  it("returns an empty array if input array is empty", () => {
    assert.deepEqual(takeUntil([]), []); 
  });
});
