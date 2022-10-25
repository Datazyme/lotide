function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertEqual = function(eqArrays, expected) {
  if (eqArrays === expected) {
    console.log(`🍏 Assertion Passed: ${eqArrays} === ${expected}`);
  } else {
    console.log(`🍎 Assertion Failed: ${eqArrays} === ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3,], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3,], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3,], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false