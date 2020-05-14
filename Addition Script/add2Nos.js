'use strict'

describe('demo calculator tests', function() {
 
 
  it('add two numbers', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    browser.sleep(3000);

    element(by.model('first')).sendKeys('2');

    element(by.model('second')).sendKeys('3');

    element(by.css('[ng-click="doAddition()"]')).click();

    browser.sleep(3000);
  });

});