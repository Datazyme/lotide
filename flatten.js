//Takes nested array and removes the nested part. Makes a single array.
let flatten = function (array1){
  if (Array.isArray(array1) === true) {
    let fin = array1.flat(1);
    return fin;
  }
  return undefined;
};
module.exports = flatten;
