// list grocery items to buy

const { getRawInput } = require("readline-sync");

var groceryList = ['milk', 'butter', 'sugar', 'salt', 'tea'];

console.log(groceryList[1]);
console.log(groceryList[0]);

var howLongThisArray = groceryList.length;

console.log(howLongThisArray);

console.log(groceryList[groceryList.length - 1]);
