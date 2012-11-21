/**
 * Seapine Candidate Assessment - Sorted matrix
 */

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    /**
     * Given an nxm matrix where each row and column is sorted. Find the kth smallest item.
     *
     * Input:
     *   matrix = [ [ 1 4 7 10 ]
     *              [ 2 6 8 11 ]
     *              [ 3 9 12 13] ], key = 8
     *
     * Output:
     *   9
     */
    findInSortedMatrix: function(matrix, key) {
      var counters = [],
        x,
        rows = matrix.length,
        lowestRow = 0,
        lowestVal,
        masterCounter = 0,
        kth;

      for (x = 0; x < rows; x += 1) {
        counters[x] = 0;
      }

      while (masterCounter < key) {
        for (x = 0; x < rows; x += 1) {
          // did we find a lower value?
          if (lowestVal === undefined || lowestVal > matrix[x][counters[x]]) {
            lowestRow = x;
            lowestVal = matrix[x][counters[x]];
          }
        }

        // increment the row in which we found the lowest value
        counters[lowestRow] += 1;
        // track the lowest value
        kth = lowestVal;
        // clear out for the next iteration
        lowestVal = undefined;
        // next in the count
        masterCounter += 1;
      }

      return kth;
    }
  }
});