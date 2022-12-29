//function takes in an array and an item to be removed from that array
const without = function(fullArr, unwantedItem) {
  let cleanArr = [];
  //loops through array and checks if not unwantedItem and pushes it to cleanArr 
  for (const item of fullArr) {
    if (!unwantedItem.includes(item)) {
      cleanArr.push(item);
    }
  }
  return cleanArr;
};

module.exports = without;