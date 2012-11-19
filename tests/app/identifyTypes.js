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

    /* Provide your own unit tests */

    it('should identify each type', function() {
      var result = answers.identifyTypes([3, new Date, "Hello World"]);
      expect(result).to.have.length(3);
      expect(result.join(' ')).to.be("number Date string");
    });

  });
});