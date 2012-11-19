if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.apply(obj);
    },

    functionFunction : function(str) {
      return function(end) {
        return str + ', ' + end;
      }
    },

    makeClosures : function(arr, fn) {
      return arr.map(function(value) {
        return function() { return fn(value); };
      });
    },

    partial : function(fn, str1, str2) {
      return function(more) {
        return fn(str1, str2, more);
      };
    },

    useArguments : function() {
      var sum = 0.0,
        x = arguments.length - 1;

      while (x > -1) {
        sum += arguments[x];
        x -= 1;
      }

      return sum;
    },

    callIt : function(fn) {
      return fn.apply(this, Array.prototype.slice.call(arguments, 1));
    },

    curryIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function() {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
      }

    }
  };
});
