const head = function (actual) {
 let y = actual[0];
 return y;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎 Assertion Failed: ${actual} === ${expected}`);
  }
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), 5);