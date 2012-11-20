// vim: tabstop=2 expandtab shiftwidth=2 softtabstop=2
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      var re = /\d+/;
      return re.test(str);
    },

    containsRepeatingLetter : function(str) {
      var re = /(\D)\1/;
      return re.test(str);
    },

    endsWithVowel : function(str) {
      var re = /[AaEeIiOoUu]\b/;
      return re.test(str);
    },

    captureThreeNumbers : function(str) {
      var re = /\d{3}/,
        result = re.exec(str);

      if (result) {
        return result[0];
      } else {
        return false;
      }
    },

    matchesPattern : function(str) {
      var re = /\b\d{3}-\d{3}-\d{4}\b/;
      return re.test(str);
    },

    isUSD : function(str) {
      var re = /^\$(?:\d{1,3})(?:,\d{3})*(?:\.\d{2}$|$)/;
      return re.test(str);
    }
  };
});
