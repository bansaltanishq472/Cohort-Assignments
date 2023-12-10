/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count_vowels = 0; // Variable For Maintaing The Count Of Vowels
for(let index = 0; index < str.length; index++) {
  if(str[index] == 'a' || str[index] == 'e' || str[index] == 'i' || str[index] == 'o' || str[index] == 'u' || str[index] == 'A' || str[index] == 'E' || str[index] == 'I' || str[index] == 'O'|| str[index] == 'U') {
    count_vowels++;  // If find some vowel in str then increase the count 
  }
}
return count_vowels;
}

module.exports = countVowels;