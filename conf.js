exports.config = {
  directConnect: true,
//   multiCapabilities: [{
//          'browserName': 'chrome'
//      }, {
//          'browserName': 'firefox'
//      }],
  capabilities: {
    'browserName': 'firefox'
  },
  framework: 'jasmine',
  specs: ['tests/specs/angularSpec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};