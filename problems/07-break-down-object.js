/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!


Examples:
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
***********************************************************************/

function breakDownObj(obj) {
 let arr = {...obj};
 let arr1 = [];
 let arr2 = [];
 for (keys in arr){
  arr1.push(keys);
  arr2.push(arr[keys]);
 }
 arr2 = [...arr1,...arr2]
 return arr2;
}
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
console.log(breakDownObj(object1)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
console.log(breakDownObj(object2)); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;