const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎 Assertion Failed: ${actual} === ${expected}`);
  }
};

//instructions ask to put this function in but not clear as to where to use. 
//eqObjects already takes care of arrays here

//function determines if two arrays are equal by size and values
function eqArrays(array1, array2) {
  //first separate out if statement for empty array
  if (array1.length === 0 || array2.length === 0) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    //compares each element of each array
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  //checks to see if the variables are arrays
  if (Array.isArray(obj1) !== true || Array.isArray(obj2) !== true){
    return false;
  };
  //checks to make sure there is the same amount of keys
  if (obj1.length !== obj2.length) {
    return false;
  };
  //loops through keys of obj1 to see if they match obj2s
  for (const k of obj1) {
    //specify false options first instead of true options, object[k] checks the values
    //in the original arrays
    if (object1[k] !== object2[k] && object1[k].length !== object2[k].length) {
        return false;
    }     
  }   
  return true;
};

module.exports = assertObjectsEqual;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4, 8] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false