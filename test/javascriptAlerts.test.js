const { expect } = require('chai');
internetPage = require('../pages/internet.page')

describe('Javascript Alerts', function () {
    it('should get text of alert',async () => {
    await browser.url(`${browser.options.baseUrl}/javascript_alerts`);
    await internetPage.clickJavascriptAlertButtonAsync(1);
    expect(await browser.getAlertText()).to.equal('I am a JS Alert');
    console.log(await browser.getAlertText())
    
});
    

    it('should accept alert', async () => {
    await browser.acceptAlert();
    const resultText = await internetPage.getResultTextAsync();
    expect(await resultText).to.equal('You successfully clicked an alert');
    
    });


it('should dismiss alert', async () => {
    await internetPage. clickJavascriptAlertButtonAsync(2);
    await browser.dismissAlert();
    
    const resultText = await internetPage.getResultTextAsync();
    expect(await resultText).to.equal('You clicked: Cancel');
    browser.pause(3000)
});



it('should send text to the alert', async () => {
    await internetPage.clickJavascriptAlertButtonAsync(3);
    await browser.sendAlertText('This is some text');
    await browser.acceptAlert();
    
    const resultText = await internetPage.getResultTextAsync();
    expect(await resultText).to.equal('You entered: This is some text');
    browser.pause(3000);
});



});
