if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      var div3 = (num % 3 === 0),
        div5 = (num % 5 === 0);

      if (div3 && div5) {
        // if the number is divisible by 3 and 5, the function should return
        // 'fizzbuzz';
        return 'fizzbuzz';
      } else if (div3) {
        // if the number is divisible by 3, the function should return 'fizz';
        return 'fizz';
      } else if (div5) {
        return 'buzz';
        // if the number is divisible by 5, the function should return 'buzz';
      } else if (typeof num === "number") {
        // otherwise the function should return the number,
        return num;
      } else {
        // or false if no number was provided
        return false;
      }
    }
  };
});
