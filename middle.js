const middle = function(array) {
  let midArr = [];    
    if (array.length <= 2) {
      return midArr;
    };
    //return middle value of odd length array
    if (array.length % 2 !== 0) {
      let midVal = Math.floor((array.length - 1) / 2);
      midArr.push(array[midVal]);
    } else if(array.length % 2 === 0) {
      let midValLess = Math.floor((array.length - 1) / 2)
      midArr.push(array[midValLess])
      let midValMore = array.length / 2;
      midArr.push(array[midValMore])
      
    };
  return midArr;
}

//Tests
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]