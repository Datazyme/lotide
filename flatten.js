function flatten(array1){
  let fin = array1.flat(1);
  console.log(Array.isArray(fin));
  return fin;
  
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
 // => [1, 2, 3, 4, 5, 6]
 console.log(flatten(["we", 2, [3, 4], 5, [6]]));