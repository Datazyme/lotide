//function takes in an array and an item to be removed from that array
const without = function(fullArr, unwantedItem) {
  let cleanArr = [];
  for (const item of fullArr) {
    if (!unwantedItem.includes(item)) {
      cleanArr.push(item);
    }
  }
  return cleanArr;
};

module.exports = without;

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

//const assertEqual = function(eqArrays, expected) {
  //if (eqArrays === expected) {
    //console.log(`🍏 Assertion Passed: ${eqArrays} === ${expected}`);
  //} else {
    //console.log(`🍎 Assertion Failed: ${eqArrays} === ${expected}`);
  //}
//};