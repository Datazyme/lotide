//import the functions to test
const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#countOnly", () => {
  it("returns the expected number of times the name appears in firstnames if appears once", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(assertEqual(result1["Jason"], 1));
  });

  it("returns expected undefined if the name does not appear in firstnames", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(assertEqual(result1["Karima"], undefined));
  });

  it("returns the expected number of times the name appears in firstnames when more than once", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(assertEqual(result1["Fang"], 2));
  });

  it("returns the expected undefined if the name appears in the array but the value in the object for the name is false", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(assertEqual(result1["Agouhanna"], undefined));
  });
});