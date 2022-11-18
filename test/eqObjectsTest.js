const eqObjects = require('../eqObjects');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#eqObjects", () => {
  it("returns true if keys and values are the same", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("returns false if some but not all key/value pairs match", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(eqObjects(ab, abc), false); 
  });
  it("returns true if key/value pairs match and values are arrays that match", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc), true); 
  });
  it("returns false if key/value pairs match but values are arrays that don't match", () => {
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const cd = { c: "1", d: ["2", 3] };
    assert.deepEqual(eqObjects(cd, cd2), false); 
  });
});
