/**
 * Seapine Candidate Assessment - Sorted matrix
 */

if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
   "app/matrix"
], function(answers) {

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
  describe("Find in Matrix", function() {

    it('should find the kth smallest item in the matrix', function() {
      /* Provide your own unit tests */
      var matrix = [
        [ 1, 4, 7, 10 ],
        [ 2, 6, 8, 11],
        [ 3, 9, 12, 13 ]
      ];

      expect(answers.findInSortedMatrix(matrix, 1)).to.be(1);
      expect(answers.findInSortedMatrix(matrix, 2)).to.be(2);
      expect(answers.findInSortedMatrix(matrix, 3)).to.be(3);
      expect(answers.findInSortedMatrix(matrix, 4)).to.be(4);
      expect(answers.findInSortedMatrix(matrix, 5)).to.be(6);
      expect(answers.findInSortedMatrix(matrix, 6)).to.be(7);
      expect(answers.findInSortedMatrix(matrix, 7)).to.be(8);
      expect(answers.findInSortedMatrix(matrix, 8)).to.be(9);
      expect(answers.findInSortedMatrix(matrix, 9)).to.be(10);
      expect(answers.findInSortedMatrix(matrix, 10)).to.be(11);
      expect(answers.findInSortedMatrix(matrix, 11)).to.be(12);
      expect(answers.findInSortedMatrix(matrix, 12)).to.be(13);

      var matrix = [
        [ -13, -10, -7, -4 ],
        [ -12, -8, -6, -3],
        [ -11, -5, -2, -1 ]
      ];

      expect(answers.findInSortedMatrix(matrix, 1)).to.be(-13);
      expect(answers.findInSortedMatrix(matrix, 2)).to.be(-12);
      expect(answers.findInSortedMatrix(matrix, 3)).to.be(-11);
      expect(answers.findInSortedMatrix(matrix, 4)).to.be(-10);
      expect(answers.findInSortedMatrix(matrix, 5)).to.be(-8);
      expect(answers.findInSortedMatrix(matrix, 6)).to.be(-7);
      expect(answers.findInSortedMatrix(matrix, 7)).to.be(-6);
      expect(answers.findInSortedMatrix(matrix, 8)).to.be(-5);
      expect(answers.findInSortedMatrix(matrix, 9)).to.be(-4);
      expect(answers.findInSortedMatrix(matrix, 10)).to.be(-3);
      expect(answers.findInSortedMatrix(matrix, 11)).to.be(-2);
      expect(answers.findInSortedMatrix(matrix, 12)).to.be(-1);
    });

  });
});