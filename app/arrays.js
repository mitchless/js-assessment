if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var x = arr.length - 1;

      while (arr[x] !== item && x > -1) {
        x -= 1;
      }

      return x;
    },

    sum : function(arr) {
      return arr.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
      });
    },

    remove : function(arr, item) {
      return arr.filter(function(value) {
        return value !== item;
      });
    },
    
    removeWithoutCopy : function(arr, item) {
      var x = arr.length - 1,
        idx = [];

      while (x > -1) {
        if (arr[x] === item) {
          arr.splice(x, 1);
        }
        x -= 1;
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var c = 0,
        x = arr.length - 1;

      while(x > -1) {
        if (arr[x] === item) {
          c += 1;
        }
        x -= 1;
      }

      return c;
    },

    duplicates : function(arr) {
      var c = {}, r = [];
      arr.forEach(function(value) {
        if (c[value]) {
          c[value] += 1;
        } else {
          c[value] = 1;
        }
      });

      for(var p in c) {
        if (c[p] > 1) {
          r.push(p);
        }
      }

      return r;
    },

    square : function(arr) {
      return arr.map(function(value) {
        var i = parseInt(value, 10);

        if(i !== undefined) {
          return i*i;
        } else {
          return undefined;
        }
      })
    },

    findAllOccurrences : function(arr, target) {
      var idx = [];

      arr.forEach(function(value, index) {
        if (target === value) {
          idx.push(index);
        }
      })

      return idx;
    }
  };
});
