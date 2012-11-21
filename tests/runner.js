var tests = [
  // link to test files here
  'tests/app/bestPractices',
  'tests/app/functions',
  'tests/app/identifyTypes',
  'tests/app/isPalindrome',
  'tests/app/matrix',
  'tests/app/objects',
  'tests/app/removeDups'
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
