if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/arrays'
], function(answers) {
  describe("arrays", function() {
    var a;

    beforeEach(function() {
      a = [ 1, 2, 3, 4 ];
    });

    it("should sum the values of an array", function() {
      expect(answers.sum(a)).to.be(10);
    });

    it("should remove a value from an array", function() {
      a.push(2); // Make sure the value appears more than one time
      var result = answers.remove(a, 2);

      expect(result).to.have.length(3);
      expect(result.join(' ')).to.be('1 3 4');
    });

    it("should add an item to the end of an array", function() {
      var result = answers.append(a, 10);

      expect(result).to.have.length(5);
      expect(result[result.length - 1]).to.be(10);
    });

    it("should remove the last item of an array", function() {
      var result = answers.truncate(a);

      expect(result).to.have.length(3);
      expect(result.join(' ')).to.be('1 2 3');
    });

    it("should join together two arrays", function() {
      var c = [ 'a', 'b', 'c', 1 ],
          result = answers.concat(a, c);

      expect(result).to.have.length(8);
      expect(result.join(' ')).to.be('1 2 3 4 a b c 1');
    });

    it("should count the occurrences of an item in an array", function() {
      var result = answers.count([ 1, 1, 1, 2, 1, 3 ], 1);

      expect(result).to.be(4);
    });

  });
});
