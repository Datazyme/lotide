//import assertEqual to get truthy statements
const assertEqual = require('../assertEqual');
const head = require('../head');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#head", () => {
  it("returns true for 1 and [1, 2, 3]", () => {
    assert.strictEqual(assertEqual(head([1, 2, 3]), 1)), true;
  });
  it("returns true for '5' and ['5']", () => {
    assert.strictEqual(assertEqual(head(['5']), '5')), true; 
  });
  it("returns '5' for [5, 6, 7]", () => {
    assert.strictEqual(assertEqual(head([5, 6, 7]), 5)), true; 
  });
  it("returns 'Hello' for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")), true; 
  });
  it("returns false for [1, 6, 7] and 5", () => {
    assert.strictEqual(assertEqual(head([1, 6, 7]), 5)), false;
  });
  it("returns false for [] and 5", () => {
    assert.strictEqual(assertEqual(head([]), 5)), false;
  });
});
