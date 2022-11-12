// Write a function called swap that takes one argument, an object, and returns another object where the key/value pairs have been swapped. The original object should not be modified.

// Example:

var obj = {a: 1, b: 2}
var newObje = swap(obj) 
console.log(newObje);// {1: 'a', 2: 'b'} 

function swap(obj) {
    var res = {};
    Object.keys(obj).forEach(function(value) {
      var key = obj[value];
      res[key] = value;
    })
    return res;
  }
  
