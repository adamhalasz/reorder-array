var ReorderArray = require('../index')

var array = ["A","B","C"];
// Move the item at index 0 ("A") to index 1 ("B")
var newArray = ReorderArray(array, 0, 1)

console.log(newArray)
// output: ["B", "A", "C"]