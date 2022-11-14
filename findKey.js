const findKey = (obj, callback) => {
  for(const element in obj) {
    //element = key of object ie "Blue Hill"
    //console.log(element); 
    if (callback(obj[element])) {
      return element;
    }
  }

}

const key = findKey({
  "Blmue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(key)