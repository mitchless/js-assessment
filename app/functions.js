if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    makeClosures : function(arr, fn) {
      return arr.map(function(value) {
        return function() {
          return fn(value);
        };
      });
    },

    curryIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function() {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
      };
    }
  };
});
