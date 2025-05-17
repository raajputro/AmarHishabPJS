const { expect } = require('@playwright/test');

exports.amarHishabERPLoginPage = class amarHishabERPLoginPage{

    myUrl = `https://erpstaging.brac.net`;
    
    constructor(page){
        this.page = page;

        this.userNameSelector = page.locator(`//*[@id="username"]`);
        this.passWordSelector = page.locator(`//*[@id="password"]`);

        this.loginBtnSelector = page.locator(`//*[@id="kc-login"]`);
    }

    async gotoPage(){
        await this.page.goto(this.myUrl);
    }

    async inputUserName(text){
        var elem = this.userNameSelector;
        await expect(elem).toBeVisible();
        await elem.fill(text);
    }

    async inputPassWord(text){
        var elem = this.passWordSelector;
        await expect(elem).toBeVisible();
        await elem.fill(text);
    }

    async clickLoginBtn(){
        var elem = this.loginBtnSelector;
        await expect(elem).toBeVisible();
        await elem.click();
    }
}