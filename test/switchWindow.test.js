const internetPage = require('../pages/internet.page')
const { expect } = require('chai');

describe('Switch Window', function () {
    it('Should switch to the next window', async () => {
        await browser.url('https://the-internet.herokuapp.com/windows');
        console.log(await browser.getUrl());
        await internetPage.clickHereLink();
        
        await browser.switchWindow('https://the-internet.herokuapp.com/windows/new');
        await browser.switchWindow('New Window');
       expect(await internetPage.h3Header.isExisting()).to.equal(true);
        expect(await internetPage.h3Header.isDisplayed()).to.equal(true);
        expect(await internetPage.h3Header.getText()).to.equal('New Window');
   
    });


});