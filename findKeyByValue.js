//finds genre of show in bestTVShowsByGenre object or any such object
const findKeyByValue = function(obj, show) {
  //create array of keys from object
  let objKeys = Object.keys(obj);
  //records index of objKeys
  let index = 0;
  //loops through elements in object and checks if it matches the submitted show, returns key by checking index in ObjKeys
  for (let genre in obj) {
    if (obj[genre] === show) {
      return objKeys[index];
    }
    index++;
  }
  return undefined;
}

module.exports = findKeyByValue;
