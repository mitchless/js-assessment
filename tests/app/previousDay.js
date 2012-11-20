/**
 * Seapine Candidate Assessment - Previous Day
 */

if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
   "app/previousDay"
], function(answers) {

  /**
   * Given a Date, return a new date one day previous
   *
   * "4/8/2010" ---> "4/7/2010"
   *
   */
  describe("previousDay", function() {

    /* Provide your own unit tests */

    it('should return a Date for the previous day', function() {
      var d1 = new Date(2010, 3, 8), d2 = new Date(2010, 3, 7);
      expect(answers.previousDay(d1)).to.eql(d2);
    });

  });
});
