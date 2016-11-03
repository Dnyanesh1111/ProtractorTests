exports.config = {
  directConnect: true,
  // multiCapabilities: [{
  //        'browserName': 'chrome'
  //    }, {
  //        // 'browserName': 'firefox'
  //    }],
  //

  Capabilities : ['chrome'],

  framework: 'jasmine',
  specs: ['tests/specs/*spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 13000000
  }
};

UdemyOptions = {
  URL: 'https://www.udemy.com/',
  Username1: 'testingaccount1@yahoo.in',
  Username2: 'testingaccount2@yahoo.com',
  Password1: 'Lfc1@lfc',
}