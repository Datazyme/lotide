//function finds the middle number in an array and returns it if the array is odd
//if the array is even it returns the two middle values
const middle = function(array) {
  let midArr = [];
  //returns empty array if the input array has two or less values
  if (array.length <= 2) {
    return midArr;
  };
  //return middle value of odd length array
  if (array.length % 2 !== 0) {
    let midVal = Math.floor((array.length - 1) / 2);
    midArr.push(array[midVal]);
  //returns two middle values for even array length
  } else if(array.length % 2 === 0) {
    let midValLess = Math.floor((array.length - 1) / 2);
    midArr.push(array[midValLess]);
    let midValMore = array.length / 2;
    midArr.push(array[midValMore]);   
  };
  return midArr;
};
module.exports = middle;