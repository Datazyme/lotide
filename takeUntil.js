//function that takes the first portion of an input array to a point specified by an input callback
const takeUntil = function(array, callback) {
  let newArr = [];
  for (const item in array) {
    //callback performed on each value in array
    let value = callback(array[item]);
    if (value) {  
      //pushes values passing callback into new array    
      newArr.push(array.slice(0, item));
    }
  }
  return newArr.flat();
};
module.exports = takeUntil;