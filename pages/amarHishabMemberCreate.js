const { expect } = require('@playwright/test');

const {pageInteractions} = require('../utils/pageInteractions');

exports.amarHishabMemberCreatePage = class amarHishabMemberCreatePage{

    myUrl = `https://erpstaging.brac.net/node/mfDashboard#!/memberInfo/index`;
    
    constructor(page){
        this.page = page;

        this.smartCardIdSelector = page.locator(`//*[@id="smartCardId"]`);
        this.projectInfoSelector = page.locator(`//*[@id="project_info_id"]`);
        this.categorySelector = page.locator(`//*[@id="memberClassificationId"]`);
        this.voCodeSelector = page.locator(`//*[@id="group_number"]`);

        this.firstNameSelector = page.locator(`//*[@id="fName"]`);
        this.genderSelector = page.locator(`//*[@id="personalInfoDomainGenderId"]`);
        this.maritalSelector = page.locator(`//*[@id="personalInfoDomainMaritalStatusId"]`);
        this.dobSelector = page.locator(`//*[@id="personalInfoInstanceDateOfBirth"]`);
        this.occupationSelector = page.locator(`//*[@id="personalInfoDomain.occupationId"]`);

        this.memberFatherSelector = page.locator(`//*[@id="memberFatherName"]`);
        this.memberMotherSelector = page.locator(`//*[@id="memberMotherName"]`);

        this.presentAddressSelector = page.locator(`//*[@id="address_0"]`);
        this.presentAddDistSelector = page.locator(`//*[@id="city_0Div_input"]`);
        this.presentAddPoOfSelector = page.locator(`//*[@id="thana_0Div_input"]`);
        this.presentAddZipcSelector = page.locator(`//*[@id="zipCode_0"]`);
        this.permAddPresAddSelector = page.locator(`//*[@id="isSameAsPresentAddress"]`);

        this.savingsProductSelector = page.locator(`//*[@id="savingsProductId"]`);
        this.targetAmountSelector = page.locator(`//*[@id="targetAmount"]`);

        this.saveButtonSelector = page.locator(`//*[@id="saveButtonId"]`);
    }

    pInterAct = new pageInteractions(this.page);

    async gotoPage(){
        await this.page.goto(this.myUrl);
    }

    async setSmartCardID(text){
        var randomNumnber = text || this.pInterAct.randomNumberGenerator(10000000000,99999999999);
        this.pInterAct.setTextBoxValue(this.smartCardIdSelector,randomNumnber);    
        console.log('Created SCID: ', randomNumnber);
    }

    async setProjectName(text){
        this.pInterAct.setValueFromDropDown(this.projectInfoSelector, text);
    }

    async setCategoryName(text){
        this.pInterAct.setValueFromDropDown(this.categorySelector, text);
    }

    async setVoCode(text){
        this.pInterAct.setTextBoxValue(this.voCodeSelector,'2060');     // hard coded VO
    }

    async setFirstName(text){
        this.pInterAct.setTextBoxValue(this.firstNameSelector, text);
    }

    async setGender(text){
        this.pInterAct.setValueFromDropDown(this.genderSelector,text);
    }

    async setMaritalStatus(text){
        this.pInterAct.setValueFromDropDown(this.maritalSelector,text);
    }
    
    async setDOB(text){
        this.pInterAct.setTextBoxValue(this.dobSelector,'01-01-1981');  // hard coded dob
    }

    async setOccupation(text){
        this.pInterAct.setValueFromDropDown(this.occupationSelector, text);
    }

    async setFatherName(text){
        this.pInterAct.setTextBoxValue(this.memberFatherSelector, text);        
    }

    async setMotherName(text){
        this.pInterAct.setTextBoxValue(this.memberMotherSelector, text);
    }

    async setAddress(address,district,thana,zip){
        this.pInterAct.setTextBoxValue(this.presentAddressSelector,address);
        this.pInterAct.setValueFromDropDown(this.presentAddDistSelector,district);
        this.pInterAct.setValueFromDropDown(this.presentAddPoOfSelector,thana);
        this.pInterAct.setTextBoxValue(this.presentAddZipcSelector,zip);
        this.pInterAct.setCheckBox(this.permAddPresAddSelector);
    }
    
    async setSavingsProduct(text){
        this.pInterAct.setValueFromDropDown(this.savingsProductSelector, text);
    }

    async clickSaveButton(){
        this.pInterAct.pressButton(this.saveButtonSelector);
    }



}