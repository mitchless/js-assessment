if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'use!underscore',
  'app/functions'
], function(_, answers) {

  describe("functions", function() {
    var sayItCalled = false;
    var sayIt = function(greeting, name, punctuation) {
          sayItCalled = true;
          return greeting + ', ' + name + (punctuation || '!');
        };

    beforeEach(function () {
      sayItCalled = false;
    });

    it("should use an array as arguments when calling a function", function() {
      var result = answers.argsAsArray(sayIt, [ 'Hello', 'World', '!' ]);
      expect(result).to.be('Hello, World!');
      expect(sayItCalled).to.be.ok();
    });

    it("should change the context in which a function is called", function() {
      var speak = function() {
            return sayIt(this.greeting, this.name, '!!!');
          },
          obj = {
            greeting : 'Hello',
            name : 'Seapine'
          };

      var result = answers.speak(speak, obj);
      expect(result).to.be('Hello, Seapine!!!');
      expect(sayItCalled).to.be.ok();
    });

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

    it("should use arguments", function () {
      var a = Math.random(),
          b = Math.random(),
          c = Math.random(),
          d = Math.random();

      expect(answers.useArguments(a)).to.be(a);
      expect(answers.useArguments(a, b)).to.be(a + b);
      expect(answers.useArguments(a, b, c)).to.be(a + b + c);
      expect(answers.useArguments(a, b, c, d)).to.be(a + b + c + d);
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
