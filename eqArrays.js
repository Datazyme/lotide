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

module.exports = eqArrays;