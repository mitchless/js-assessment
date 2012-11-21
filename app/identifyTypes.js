/**
 * Seapine Candidate Assessment - Identify Types
 */

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    /**
     * Given an array of any JavaScript built-in types, return a new array where each item is replaced
     *   by its corresponding type string
     *
     * [3, new Date, "Hello World"] ----> ["number", "Date", "string"]
     *
     */
    identifyTypes: function(arr) {
      return arr.map(function(val) {
        return val.constructor.name;
      });
    }
  }
});