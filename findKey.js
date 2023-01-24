//function loops through elements (keys) in object, compares values to values in callback 
//function and returns key if there is a match
const findKey = (obj, callback) => {
  for(const element in obj) {
    if (callback(obj[element])) {
      return element;
    }
  }
};


module.exports = findKey;