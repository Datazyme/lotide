//import the functions to test
const map = require('../map');
const eqArrays = require('../eqArrays')
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#map", () => {
  it("returns the 0 index(the first letter) of each word in the array", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.strictEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), true);
  });

  it("returns false if index in callback is not present", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[10]);
    assert.strictEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), false);
  });

  it("returns false no arrray present", () => {
    const words = [];
    const results1 = map(words, word => word[0]);
    assert.strictEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), false);
  });

});