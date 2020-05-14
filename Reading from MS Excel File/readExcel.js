'use strict'

//import { get, enterFirstNumber, enterSecondNumber, clickGo, verifyResult } from 'C:\\Users\\piyus\\Desktop\\Projects\\ProtractorDemo1\\conf\\homepage';


let homepage = require('./homepage');


/////////////////////////////////
let XLSX=require('xlsx');
let workbook=XLSX.readFile('testData1.xlsx');
let first_sheet_name = workbook.SheetNames[0];
let address_of_cell1 = 'B1';
let worksheet = workbook.Sheets[first_sheet_name];
let desired_cell1 = worksheet[address_of_cell1];
let value1_from_excel = desired_cell1.v;
///////////////////////////////////////////////////////


describe('demo calculator tests', function () {


     homepage.get('http://juliemr.github.io/protractor-demo/');

     browser.sleep(9000);
     
     it('Addition test', function () {

          homepage.enterFirstNumber(value1_from_excel);

          browser.sleep(9000);

          homepage.enterOperation(0);

          browser.sleep(9000);

          homepage.enterSecondNumber('1');

          browser.sleep(9000);

          homepage.clickGo();

          homepage.verifyResult('5');

          browser.sleep(9000);

     })
     it('Substraction test', function () {

          homepage.enterFirstNumber(value1_from_excel);

          browser.sleep(9000);

          homepage.enterOperation(4);

          browser.sleep(9000);

          homepage.enterSecondNumber('1');

          browser.sleep(9000);

          homepage.clickGo();

          homepage.verifyResult('3');

          browser.sleep(9000);

     })
     it('Division test', function () {

          homepage.enterFirstNumber(value1_from_excel);

          browser.sleep(9000);

          homepage.enterOperation(1);

          browser.sleep(9000);

          homepage.enterSecondNumber('2');

          browser.sleep(9000);

          homepage.clickGo();

          homepage.verifyResult('2');

          browser.sleep(9000);

     })
     it('Multiplication test', function () {

          homepage.enterFirstNumber(value1_from_excel);

          browser.sleep(9000);

          homepage.enterOperation(3);

          browser.sleep(9000);

          homepage.enterSecondNumber('2');

          browser.sleep(9000);

          homepage.clickGo();

          homepage.verifyResult('8');

          browser.sleep(30000);

     })   
})