//import the functions to test
const countLetters = require('../countLetters');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#countLetters", () => {
  it("returns an object with letter keys and number of times they appear", () => {
    const lettersObject = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
    assert.deepEqual(countLetters("lighthouse in the house"), lettersObject);
  });

  it("returns an object with letter keys and number of times they appear an another sentence", () => {
    const lettersObject1 = { f: 3, e: 3, s: 4, t: 3, i: 1, v: 1, u: 2, o: 2, r: 2, h: 1 }
    assert.deepEqual(countLetters("festivus for the rest of us"), lettersObject1); 
  });

  it("returns an empty object if no sentence submitted", () => {
    const lettersObject2 = {};
    assert.deepEqual(countLetters(""), lettersObject2); 
  });
});