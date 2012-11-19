var tests = [
  // link to test files here
  'tests/app/arrays',
  'tests/app/bestPractices',
  'tests/app/flowControl',
  'tests/app/functions',
  'tests/identifyTypes',
  'tests/app/logicalOperators',
  'tests/app/objects',
  'tests/app/previousDay',
  'tests/app/removeDups',
  'tests/app/sorting'
];

if (typeof window === 'undefined') {
  var requirejs = require('requirejs');
  requirejs.config({
    baseUrl : __dirname + '/../',
    nodeRequire : require,
    paths : {
      // Libraries
      underscore : 'lib/underscore',

      // Shim Plugin
      use : 'lib/plugins/use',
      text : 'lib/plugins/text',
      jquery : 'lib/jquery'
    },

    use : {
      underscore : {
        attach : '_'
      }
    }
  });
}

requirejs(tests, function() {
  if (typeof mocha !== 'undefined') {
    mocha.run();
  }
});
