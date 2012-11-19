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
      var r = [];
      for(var p in obj) {
        if (obj.hasOwnProperty(p)) {
          r.push(p.toString() + ': ' + obj[p]);
        }
      }

      return r;
    }
  };
});
