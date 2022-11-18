//const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#tail", () => {
  it("returns Lighthouse Labs for Yo Yo, Lighthouse, Labs", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  it("returns original array length", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual((words.length), 3); 
  });
  it("returns the array without the first element", () => {
    const words = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), words); 
  });
  it("returns an empty array if input array is empty", () => {
    assert.deepEqual(tail([]), []); 
  });
});
