/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return promise = new Promise(function(resolve) {
        const startTime = Date.now(); //return milliseconds elapsed
    
        setTimeout(function() {
          while (Date.now() - startTime < milliseconds) {
            console.log(Date.now() - startTime);
          }
          resolve();
        }, 0);
      });
}

// module.exports = sleep;
  
//   console.log(sleep(50));
// console.log("asdsf");
// let a = 0;
// for (let index = 0; index < 100; index++) {
//     a++;
// }
// console.log(a);
  
  module.exports = sleep;
