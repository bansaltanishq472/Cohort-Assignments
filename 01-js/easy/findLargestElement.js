/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Intialize biggest_number with first element of array or Number.MIN_VALUE
let biggest_number = numbers[0];
// Iterating The Whole Number Array
for(let index = 0; index < numbers.length; index++) {
   if(numbers[index] > biggest_number) {
    biggest_number = numbers[index];
   }
}
return biggest_number;
}

module.exports = findLargestElement;