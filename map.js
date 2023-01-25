
//takes in array and callback function to return new, transformed array
const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;