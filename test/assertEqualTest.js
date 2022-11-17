//imports assertEqual
const assertEqual = require('../assertEqual');
//imports chai
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#assertEqual", () => {
  it("returns false when comparing Lighthouse Labs and Bootcamp", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it("returns true when comparing 1 and 1", () => {
    assert.strictEqual(assertEqual(1,1));
  });
  it("returns false when comparing Moon and Gear", () => {
    assert.strictEqual(assertEqual("Moon", "Gear"));
  });
  it("returns true when comparing Moon and Moon", () => {
    assert.strictEqual(assertEqual("Moon", "Moon"));
  });
  it("returns false when comparing 5 and 9", () => {
    assert.strictEqual(assertEqual(5, 9));
  });

});
