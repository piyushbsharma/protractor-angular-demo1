'use strict'

describe("Submit an HTML Form", function() {

	it("This application will populate and submit a form", function() {
	
		browser.ignoreSynchronization = true  							//statement required to run Non-Angular applications

		browser.get("https://www.w3schools.com/html/html_forms.asp");

		
		element(by.id("fname")).clear().sendKeys("Jack");

		element(by.id("lname")).clear().sendKeys("Tripper");
		
		// Code to navigate between parent/child windows begins
		
		let tabbedButton = element(by.xpath("//body//div[@id='main']//div//input[3]"));
		tabbedButton.click();
		
		browser.sleep(3000);
		
		let winHandles = browser.getAllWindowHandles();
		
		winHandles.then(function(handles){
			let parentWindow = handles[0];
			let tabbedWindow = handles[1];
			browser.waitForAngularEnabled(false);						//statement required to run Non-Angular applications					
			browser.switchTo().window(tabbedWindow);

		// Code to navigate between parent/child windows ends		
		
			browser.getTitle().then(title => {
				console.log("Tabbed Window title is: " + title);


		expect(element(by.xpath("//div[contains(text(),'fname=Jack&lname=Tripper')]")).getText()).toEqual('fname=Jack&lname=Tripper ');

			})

		})
		
		browser.sleep(5000);
		
	});

});
