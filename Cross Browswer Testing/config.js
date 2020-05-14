'use strict'

	//Import modules

let HtmlReporter = require('protractor-beautiful-reporter');

	// An example configuration file.
exports.config = {
	//seleniumAddress:  'http://localhost:4444/wd/hub',

	directConnect: true,

  // multiCapabilities to used when testing against multiple browswers.
  multiCapabilities: [{
  'browserName': 'firefox'
  }, {
  'browserName': 'chrome'
  }],

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['add2Nos.js'],
  
  
  onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports/screenshots'
      }).getJasmine2Reporter());
   },


  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
  
};