//import assertEqual to get truthy statements
const head   = require('../head');
const assert = (require('chai').assert);

//mocha gives describe and it functions, 
//must be run with "npm test folder/filename" in terminal
describe("#head", () => {
  it("returns true for 1 and [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns true for '5' and ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns '5' for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5); 
  });
  it("returns 'Hello' for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
  
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  })
});
