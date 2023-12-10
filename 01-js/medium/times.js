/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;
let Start_Time = new Date().getTime();
console.log("Start_Time " + Start_Time);
for(let index = 1; index <= n; index++) {
    sum += index;
} 
let End_Time = new Date().getTime();
console.log("End_Time " + End_Time);
let Time_Diffrence = End_Time- Start_Time;
console.log("Time_Diffrence " + Time_Diffrence);
}

calculateTime(1000000000000);