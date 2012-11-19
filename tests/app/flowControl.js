if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/flowControl'
], function(answers) {
  describe("flow control", function() {

    /**
     * Given a number:
     *    - if it is divisible by 3 - return 'fizz'
     *    - if it is divisible by 5 - return 'buzz'
     *    - if it is divisible by 3 and 5 - return 'fizzbuzz'
     *    - otherwise, return the number
     */
    it("should be able to conditionally branch your code", function() {
      var num = 0;

      while (num % 3 === 0 || num % 5 === 0) {
          num = Math.floor(Math.random() * 10) + 1;
      }

      expect(answers.fizzBuzz(2)).to.be(2);
      expect(answers.fizzBuzz(101)).to.be(101);

      expect(answers.fizzBuzz(3)).to.be('fizz');
      expect(answers.fizzBuzz(6)).to.be('fizz');
      expect(answers.fizzBuzz(num * 3)).to.be('fizz');

      expect(answers.fizzBuzz(5)).to.be('buzz');
      expect(answers.fizzBuzz(10)).to.be('buzz');
      expect(answers.fizzBuzz(num * 5)).to.be('buzz');

      expect(answers.fizzBuzz(15)).to.be('fizzbuzz');
      expect(answers.fizzBuzz(num * 3 * 5)).to.be('fizzbuzz');
    });
  });
});
