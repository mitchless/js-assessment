/**
 * Seapine Candidate Assessment - Is Palindrome
 */

if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
   "app/isPalindrome"
], function(answers) {

  /**
   * A palindrome is a string that is the same forwards and backwards.
   *
   * Given a linked list of strings, determine if the contents of the strings form a palindrome.
   *
   *
   * Input:
   *   listHead: { str: 'ab' } ---> { str: 'ba' }
   *
   * Output:
   *   true
   */
  describe("Detecting Palindromes", function() {

    var ListItem = function(str) {
      this.str = str;
      this.next = null;
    }

    it('should determine if a linked list contains a palindrome', function() {
      /* Provide your own unit tests */
      expect(false).to.be(true);
    });

  });
});