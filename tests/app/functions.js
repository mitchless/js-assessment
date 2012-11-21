if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'use!underscore',
  'app/functions'
], function(_, answers) {

  describe("functions", function() {

    it('should use closures', function () {
      var arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
      var doSomeStuff;

      doSomeStuff = function (x) { return x * x; };

      var funcs = answers.makeClosures(arr, doSomeStuff);
      expect(funcs).to.have.length(arr.length);

      for (var i = 0; i < arr.length; i++) {
        expect(funcs[i]()).to.be(doSomeStuff(arr[i]));
      }
    });

    it("should curry existing functions", function () {
      var curryMe = function (x, y, z) {
        return x / y * z;
      };

      var a = Math.random(), b = Math.random(), c = Math.random();
      expect(answers.curryIt(curryMe)(a, b, c)).to.be(curryMe(a, b, c));
      expect(answers.curryIt(curryMe, a)(b, c)).to.be(curryMe(a, b, c));
      expect(answers.curryIt(curryMe, a, b)(c)).to.be(curryMe(a, b, c));
      expect(answers.curryIt(curryMe, a, b, c)()).to.be(curryMe(a, b, c));
      expect(answers.curryIt(curryMe, b, a, c)()).to.be(curryMe(b, a, c));
    });
  });
});
