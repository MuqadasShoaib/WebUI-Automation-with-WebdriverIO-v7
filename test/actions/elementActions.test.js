const { expect, assert } = require('chai'); 
const internetPage = require('../../pages/internet.page');

const logindata = require('../../data/logindata')
describe(' Test element actions', function () {
    it('should click element', async () => {
        await browser.url('/');
        await internetPage.clickOnLinkAsync();
    
        // Use 'await' to get the resolved value of the current URL
        const currentUrl = await browser.getUrl();
    
        // Use 'expect' for assertions
        expect(currentUrl).to.equal('https://the-internet.herokuapp.com/abtest');
    })
    it('should get Text', async () => {
        await browser.url('/')

        expect(await internetPage.getSpecificElementText(1)).equals('A/B Testing');
    });
    it('should click checkbox', async () => {
       await  internetPage.clickLink(6)
       await internetPage.clickCheckbox(1);
        expect(await internetPage.checkboxes(1).isSelected()).equals(true);
    });
    it('should uncheck checkox', async () => {
        await internetPage.clickCheckbox(1)
         expect(await internetPage.checkboxes(1).isSelected()).equals(false)
    })

    it('should enter username', async() => {
      await  browser.url(`${browser.options.baseUrl}login`)
      await  internetPage.enterUsernameAsync('Julia')
      const currentUsername = await internetPage.username.getValue()
      expect(currentUsername).equals('Julia')
    })

    it('should enter password',async () => {
        await browser.url(`${browser.options.baseUrl}login`)
        await  internetPage.enterPasswordAsync(logindata.password)
        let  currentPassword = await internetPage.password.getValue()
        expect(currentPassword).equals(logindata.password)
    })
     
    it('should clear Value',async () => {
       await internetPage.username.click()
       await  internetPage.username.clearValue()
       expect(await internetPage.username.getValue(), '');
    })


    

    

})
