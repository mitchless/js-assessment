if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var hash = [];
      for(var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
          hash.push(prop + ': ' + obj[prop]);
        }
      }

      return hash;
    }
  };
});
