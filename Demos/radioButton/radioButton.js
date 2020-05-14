'use strict'

describe("Radio button Example", function() {

	it("Handling Radio buttons in Protractor", function() {
	
		browser.ignoreSynchronization = true  							//statement required to run Non-Angular applications

		browser.get("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/");

		browser.sleep(5000);
		
		let radioButtonTwo = element(by.xpath("/html[1]/body[1]/div[1]/div[3]/div[3]/form[1]/fieldset[1]/div[2]/div[2]/label[1]"))		
			radioButtonTwo.click();

		browser.sleep(5000);

		let radioButtonThree = element(by.xpath("/html[1]/body[1]/div[1]/div[3]/div[3]/form[1]/fieldset[1]/div[2]/div[3]/label[1]"))		
			radioButtonThree.click();  
			
		browser.sleep(5000);
		
		browser.sleep(5000);
		
			})

		})
		
		browser.sleep(5000);
