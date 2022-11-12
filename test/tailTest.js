//const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = (require('chai').assert);

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
});


/*Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), words);*/