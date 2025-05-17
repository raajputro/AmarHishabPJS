const { expect } = require('@playwright/test');

exports.pageInteractions = class pageInteractions{
    constructor(page){
        this.page = page;
    }

    async randomNumberGenerator(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;        
    }

    async setTextBoxValue(elem, text){
        await expect(elem).toBeVisible();
        await elem.fill(text);
    }

    async setValueFromDropDown(elem, text){
        await expect(elem).toBeVisible();
        await elem.selectOption(text);
    }

    async setCheckBox(elem){
        await expect(elem).toBeVisible();
        await elem.check();
        await expect(elem).toBeChecked();
    }

    async pressButton(elem){
        await expect(elem).toBeVisible();
        await elem.click();
    }
}