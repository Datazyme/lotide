//const assertEqual = require('../assertEqual');
const countLetters = require('../letterPositions');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#letterPositions", () => {
  it("returns object with letter keys and index values", () => {
    const sentence = {  l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]}
    assert.deepEqual(countLetters("lighthouse in the house"), sentence);
  });

  it("returns object with letter keys and index values", () => {
    const sentence = 
    {
      f: [ 0, 9, 23 ],
      e: [ 1, 15, 18 ],
      s: [ 2, 7, 19, 26 ],
      t: [ 3, 13, 20 ],
      i: [ 4 ],
      v: [ 5 ],
      u: [ 6, 25 ],
      o: [ 10, 22 ],
      r: [ 11, 17 ],
      h: [ 14 ]
    }
    assert.deepEqual(countLetters("festivus for the rest of us"), sentence);
  });

    it("returns object with letter keys and index values", () => {
      const sentence = {}
      assert.deepEqual(countLetters(""), sentence);
  });

});