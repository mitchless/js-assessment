/**
 * Seapine Candidate Assessment - Is Palindrome
 */

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    /**
     * A palindrome is a string that is the same forwards and backwards.
     *
     * Given a linked list of strings, determine if the contents of the strings form a palindrome.
     *
     *
     * Input:
     *   ListHead: { str: 'ab' } ---> { str: 'ba' }
     *
     * Output:
     *   true
     */
    isPalindrome: function(listHead) {
      var forward = '',
        backward = '',
        x,
        tip = listHead;

      while (tip !== null) {
        forward += tip.str;
        tip = tip.next;
      }

      for(x = forward.length - 1; x > -1; x -= 1) {
        backward += forward.charAt(x);
      }

      return forward === backward;
    }
  }
});