const assertEqual = require('../assertEqual');
const middle = require('../middle');


assertEqual((middle([1])), true) // => []
assertEqual((middle([1, 2])), true) // => []
assertEqual(middle([1, 2, 3]), true)

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]