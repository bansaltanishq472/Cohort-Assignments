/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
// Its for global searching for the characters that enclosed between A-Z, a-z, 0-9
let temp_str = /[^A-Za-z0-9]/g;
// To convert the string into LowerCase Letters 
str = str.toLowerCase();
// To replce the characters in str that same as temp_str with '' 
str = str.replace(temp_str,''); 
// Iterating over the Whole String
for(let index = 0; index < str.length / 2; index++) {
  if(str[index] != str[str.length - index - 1]) {
    return false;
  }
}
return true;
}

module.exports = isPalindrome;
