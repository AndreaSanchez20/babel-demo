"use strict";

var greet = function greet(name) {
  console.log("Hello, ".concat(name, "!"));
};
var numbers = [1, 2, 3, 4, 5];
var squaredNumbers = numbers.map(function (num) {
  return Math.pow(num, 2);
});
greet('John');
console.log('Squared numbers:', squaredNumbers);