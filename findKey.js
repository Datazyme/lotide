//function loops through elements (keys) in object, compares values to values in callback 
//function and returns key if there is a match
const findKey = (obj, callback) => {
  for(const element in obj) {
    if (callback(obj[element])) {
      return element;
    }
  }
};

const key = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

module.exports = findKey;