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
      var data = null;

      expect(answers.isPalindrome(data)).to.be(true);

      data = new ListItem('ab');
      expect(answers.isPalindrome(data)).to.be(false);

      data = new ListItem('ab');
      data.next = new ListItem('ba');
      expect(answers.isPalindrome(data)).to.be(true);

      data = new ListItem('ab');
      data.next = new ListItem('ab');
      expect(answers.isPalindrome(data)).to.be(false);

      data = new ListItem('i');
      data.next = new ListItem('man');
      data.next.next = new ListItem('am');
      data.next.next.next = new ListItem('regal');
      data.next.next.next.next = new ListItem('a');
      data.next.next.next.next.next = new ListItem('german');
      data.next.next.next.next.next.next = new ListItem('am');
      data.next.next.next.next.next.next.next = new ListItem('i');
      expect(answers.isPalindrome(data)).to.be(true);

      data = new ListItem('i');
      data.next = new ListItem('man');
      data.next.next = new ListItem('am');
      data.next.next.next = new ListItem('rexal');
      data.next.next.next.next = new ListItem('a');
      data.next.next.next.next.next = new ListItem('german');
      data.next.next.next.next.next.next = new ListItem('am');
      data.next.next.next.next.next.next.next = new ListItem('i');
      expect(answers.isPalindrome(data)).to.be(false);
    });

  });
});