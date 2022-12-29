//import the functions to test
const findKey = require('../findKey');
const assertEqual = require('../assertEqual');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#findKeyByValue", () => {
  it("returns the key noma which is the first key in the object to have the object of stars: 2", () => {
    const key = findKey({
      "Blmue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2) 
    assert.strictEqual(assertEqual(key, "noma"));
  });

  it("returns the key Blue Hill which is the first key in the object to have the object stars: 1", () => {
    const key = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 },
      "Andromeda": {stars: 15}
    }, x => x.stars === 1) 
    assert.strictEqual(assertEqual(key, "Blue Hill"));
  });

  it("returns the key Akaleri which is the first key in the object to have the object stars: 15", () => {
    const key = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 },
      "Andromeda": {stars: 15}
    }, x => x.stars === 15) 
    assert.strictEqual(assertEqual(key, "Andromeda"));
  });

  it("returns undefined if callback does not have stars object value", () => {
    const key = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 },
      "Andromeda": {stars: 15}
    }, x => x.stars === 8) 
    assert.strictEqual(assertEqual(key, undefined));
  });

});