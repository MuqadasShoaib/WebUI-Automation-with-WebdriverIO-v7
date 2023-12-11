const internetPage = require('../pages/internet.page')
const { expect } = require('chai');
describe('Switch to Iframe', function () {
    it('Should switch to iframe',async() => {
       await browser.url(`${browser.options.baseUrl}iframe`)
       await  internetPage.h3Header.waitForDisplayed()
       await internetPage.iframe.waitForDisplayed()
       //console.log(await internetPage.iframe)
       await browser.switchToFrame( await internetPage.iframe)
    //    await internetPage.sendTextToBodyAsync('This is the text in the iframe body')
        // expect('This is the text in the iframe body').to.equal(await internetPage.iframeBody.getText());

    });
});