/**
 * Seapine Candidate Assessment - Identify Types
 */

if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
   "app/identifyTypes"
], function(answers) {

  /**
   * Given an array of any JavaScript built-in types, return a new array where each item is replaced
   *   by its corresponding type string
   *
   * [3, new Date, "Hello World"] ----> ["number", "Date", "string"]
   *
   */
  describe("identifyTypes", function() {

    it('should identify each type', function() {
      var data = [3, new Date(), "Hello World", true];
      /* Provide your own unit tests */
      expect(answers.identifyTypes(data).join(' ')).to.be("Number Date String Boolean");

      data = []
      expect(answers.identifyTypes(data).join(' ')).to.be("");
    });

  });
});