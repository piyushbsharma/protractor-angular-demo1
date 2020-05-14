'use strict'

describe("Dropdown Example", function() {

	it("Handling Dropdowns in Protractor", function() {
	
		browser.ignoreSynchronization = true  							//statement required to run Non-Angular applications

		browser.get("https://demos.jquerymobile.com/1.4.5/selectmenu/");

		browser.sleep(5000);
		
		element(by.id("select-native-11-button")).element(by.xpath("//div[@id='select-native-11-button']//option[1]")).click();  

		browser.sleep(5000);

		element(by.id("select-native-11-button")).element(by.xpath("//div[@id='select-native-12-button']//option[2]")).click();
		
		browser.sleep(5000);
		
		element(by.id("select-native-11-button")).element(by.xpath("//div[@id='select-native-13-button']//option[3]")).click();		
		
				browser.sleep(10000);
		
		//	browser.getTitle().then(title => {
		//		console.log("Tabbed Window title is: " + title);


		//expect(element(by.xpath("//div[contains(text(),'fname=Jack&lname=Tripper')]")).getText()).toEqual('fname=Jack&lname=Tripper ');

			})

		})
		
		browser.sleep(5000);

