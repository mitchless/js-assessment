/**
 * Seapine Candidate Assessment - Sorting
 */

if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
   "app/sorting"
], function(answers) {

  /**
   * Given an array of objects with a primary and secondary sorting number fields, return an ascending sorted array
   *
   * Input:
   *    [ { primary: 5, secondary: 2 }, { primary: 5, secondary: 1 }, { primary: 2, secondary: 8 } ]
   *
   * Output:
   *   [ { primary: 2, secondary: 8 }, { primary: 5, secondary: 1 }, { primary: 5, secondary: 2 } ]
   *
   */
  describe("sorting", function() {

    var C = function(pri, sec) {
      this.primary = pri;
      this.secondary = sec;
    }

    /* Provide your own unit tests */

    it('should a sorted array in ascending order', function() {
      var x = new C(5, 2), y = new C(5, 1), z = new C(2, 8),
          results = answers.sortObjects([x, y, z]);

      expect(results).to.have.length(3);
      expect(results[0]).to.eq(z);
      expect(results[1]).to.eq(y);
      expect(results[2]).to.eq(x);
    });

  });
});