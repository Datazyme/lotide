//const assertEqual = require('../assertEqual');
const middle = require('../middle');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#middle", () => {
  it("returns empty array when length is one", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns empty array when length is 2", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
  it("returns middle value of input array has odd length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
  it("returns 2 middle values of input array has even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
});
