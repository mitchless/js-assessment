if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }
if (typeof window !== 'object') { var window = {}; }

define([
  'app/bestPractices'
], function(answers) {
  describe("best practices", function(){
    it("should not use global variables", function() {
      answers.globals();
      expect(window.myObject).not.to.be.ok();
    });

    it("should declare functions safely", function() {
      var val = answers.functions(true);
      expect(val()).to.be('a');
    });

    it("should understand strict comparison", function() {
      expect(answers.identity(1, '1')).to.be(false);
      expect(answers.identity(1, 1)).to.be(true);
      expect(answers.identity(0, false)).to.be(false);
    });

  });
});
