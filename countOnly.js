// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //saves results in an object where the listed string is the key and the value is the number of times it appears in the list
  const results = {}
  for (const item of allItems) {
    if(itemsToCount[item]) {
     if(results[item]) {
       results[item] += 1;
     } else {
      results[item] = 1;
     }
    }
  } 
  return results;
};

//array of names
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

module.exports = countOnly;
