// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  //checks to see if the variables are arrays
  if (Array.isArray(obj1) !== true || Array.isArray(obj2) !== true){
    return false;
  };
  //checks to make sure there is the same amount of keys
  if (obj1.length !== obj2.length) {
    return false;
  };
  //loops through keys of obj1 to see if they match obj2s
  for (const k of obj1) {
    //specify false options first instead of true options, object[k] checks the values
    //in the original arrays
    if (object1[k] !== object2[k] && object1[k].length !== object2[k].length) {
        return false;
    }     
  }   
  return true;
};
module.exports = eqObjects;




