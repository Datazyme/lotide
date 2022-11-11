const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎 Assertion Failed: ${actual} === ${expected}`);
  }
};

/*Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("Moon", "Gear");
assertEqual("Moon", "Moon");
assertEqual(5, 9);*/
module.exports = assertEqual;