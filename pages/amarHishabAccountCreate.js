const { expect } = require('@playwright/test');

exports.amarHishabAccountCreatePage = class amarHishabAccountCreatePage{
    myUrl = `https://erpstaging.brac.net/node/mfDashboard#!/savingsAccount/create`;
    
    constructor(page){
        this.page = page;

        this.projectNameSelector = page.locator(`//*[@id="project_info_id"]`);
        this.voCodeSelector = page.locator(`//*[@id="group_number"]`);
        this.voCodeFinderSelector = page.locator(`//*[@id="group_number"]/parent::div/following-sibling::div/a/img`);
        this.memberNumberSelector = page.locator(`//*[@id="membershipNumber"]`);
        this.memberNumberFinderSelector = page.locator(`//*[@id="membershipNumber"]/parent::div/following-sibling::div/a/img`)
        this.mobileNumberSelector = page.locator(`//*[@id="currentAccountMobile"]`);

        this.accountTypeSingleSelector = page.locator(`//*[@id="isSingleAccountType"]`);
        this.accountTypeJointSelector = page.locator(`//*[@id="isJointAccountType"]`);

        this.otpSendToSelfSelector = page.locator(`//*[@id="otpSelfSection"]`);
        this.otpSendToBothSelector = page.locator(`//*[@id="otpBothSection"]`);
        this.otpSendToAnySelector = page.locator(`//*[@id="otpAnySection"]`);

        this.savingsProductSelector = page.locator(`//*[@id="productId"]`);
    }
     
    async gotoPage(){
        await this.page.goto(this.myUrl);
    }

    async selectProjectName(text){
        var projSelector = this.projectNameSelector;
        await expect(projSelector).toBeVisible();
        await projSelector.selectOption(text);

        var selectedValue = await projSelector.inputValue();
        console.log('Selected value: ', selectedValue);

        this.page.screenshot('MyProject.png');
    }
}