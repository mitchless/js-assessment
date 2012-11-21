/**
 * Seapine Candidate Assessment - Removing duplicate characters
 */

if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
   "app/removeDups"
], function(answers) {

  /**
   * Given a string remove all duplicate characters
   *
   * abcabcd --->  abcd
   * aaaaaaa --->  a
   */
  describe("removeDups", function() {

    it('should remove duplicates characters from the string argument', function() {
      /* Provide your own unit tests */
      expect(answers.removeDuplicateCharacters('abcabcd')).to.be('abcd');
      expect(answers.removeDuplicateCharacters('aaaaaaa')).to.be('a');
      expect(answers.removeDuplicateCharacters('aabbccdd')).to.be('abcd');
      expect(answers.removeDuplicateCharacters('awabxbcycdzd')).to.be('awbxcydz');
      expect(answers.removeDuplicateCharacters('abcdefg')).to.be('abcdefg');
      expect(answers.removeDuplicateCharacters('a')).to.be('a');
      expect(answers.removeDuplicateCharacters('')).to.be('');
    });

  });
});
