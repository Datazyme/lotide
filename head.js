//const assertEqual = require('./assertEqual');

const head = function(actual) {
  let y = actual[0];
  return y;
};

/*Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), 5);*/
module.exports = head;