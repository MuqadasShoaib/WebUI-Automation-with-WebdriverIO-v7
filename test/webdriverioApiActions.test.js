const internetPage = require('../pages/internet.page')
const { expect } = require('chai');

describe('WebdriverIO API Actions', function () {
    // it('should hover on figure 1', async () => {
    //     await browser.url(`${browser.options.baseUrl}/hovers`);
    //     await internetPage.hoverOnFigure(3);
    //     expect(await internetPage.getFigureDetailsText(3)).to.equal("name: user1");
        
    // });


    // it('should hover on figure 2', async () => {
    //    await browser.url(`${browser.options.baseUrl}/hovers`)
    //    await  internetPage.hoverOnFigure(4)
    //     expect( await internetPage.getFigureDetailsText(4)).to.equal("name: user2");

    // })

    // it('should hover on figure 3',async () => {
    //    await browser.url(`${browser.options.baseUrl}/hovers`)
    //    await internetPage.hoverOnFigure(5)
    //     expect(await internetPage.getFigureDetailsText(5)).to.equal("name: user3");

    // })

    it('should send keyboard Value Tab',async () => {
        await browser.url(`${browser.options.baseUrl}key_presses`)
        await internetPage.clickTargetAsync()
        await internetPage.sendKeysToTargetAsync("\uE004")
        expect(await internetPage.getResultTextAsync()).to.equal("You entered: TAB");
        browser.pause(3000)
     })

     it('should send keyboard Value Shift',async () => {
        await browser.url(`${browser.options.baseUrl}key_presses`)
        await internetPage.clickTargetAsync()
        await internetPage.sendKeysToTargetAsync("\uE008")
        expect(await internetPage.getResultTextAsync()).to.equal("You entered: SHIFT");
        browser.pause(3000)
     })

     it('should send keyboard Value Backspace',async () => {
        await browser.url(`${browser.options.baseUrl}key_presses`)
        await internetPage.clickTargetAsync()
        await internetPage.sendKeysToTargetAsync("\uE003")
        expect(await internetPage.getResultTextAsync()).to.equal("You entered: BACK_SPACE");
        browser.pause(3000)
     });
    
        
    });
    
