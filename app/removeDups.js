/**
 * Seapine Candidate Assessment - Removing duplicate characters
 */

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    /**
     * Given a string remove all duplicate characters
     *
     * abcabcd --->  abcd
     * aaaaaaa --->  a
     */
    removeDuplicateCharacters: function(str) {
      var tracker = {},
        x,
        len = str.length,
        c,
        deduped = '';

      for(x = 0; x < len; x += 1) {
        c = str.charAt(x);

        if (tracker[c] === undefined) {
          tracker[c] = 1;
          deduped += c;
        }
      }

      return deduped;
    }
  }
});
