class Internet {
    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElements() { return this.parent.$$('li') }
     specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }
     
     get firstLink() { return $('ul li:nth-child(1) a') }
     link(index) { return $(`ul li:nth-child(${index}) a`) }
    
     checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`) }
   

     clickCheckbox(index) {
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    }

    
    get username(){ return $('#username')}
    get password(){ return $('#password')}

    figures(index) { return $(`.example .figure:nth-child(${index}) img`) }
    figureDetails(index) { return $(`.example .figure:nth-child(${index}) .figcaption h5`) }

    get target() { return $('.example #target') }
    get result() { return $('.example #result') }

    get hereLink() { return $('.example a') }

    get iframeBody() { return $('#tinymce') }
    get iframe() { return $('#mce_0_ifr')}

    get columnA() { return $('#column-a') }
    get columnB() { return $('#column-b') }

    get columnAHeader() { return $('#column-a header') }
    get columnBHeader() { return $('#column-b header') }

    get draggable() { return $('#draggable') }
    get droppable() { return $('#droppable') }
    get droppableParagraph() { return $('#droppable p') }

    /**
     * Drag and drop
     */
      dragDraggableToDroppable() {
        this.draggable.waitForDisplayed()
        this.draggable.dragAndDrop(this.droppable)

    }


    get dropdownMenu() { return $('#dropdown') }
    get dropdownMenuOption1() { return $('#dropdown option:nth-child(2)') }
    get dropdownMenuOption2() { return $('#dropdown option:nth-child(3)') }

    /** 
     * Click the dropdown Button
     */
    clickDropdownMenu() {
        this.dropdownMenu.waitForDisplayed()
        this.dropdownMenu.click()
    }

    clickDropdownMenuOption1() {
        this.dropdownMenuOption1.waitForDisplayed()
        this.dropdownMenuOption1.click()
    }

    clickDropdownMenuOption2() {
        this.dropdownMenuOption2.waitForDisplayed()
        this.dropdownMenuOption2.click()
    }

    javascriptAlertButton(index) { return $(`.example li:nth-child(${index}) button`) }

    get exampleButton() { return $('.example button') }
    deleteButton(index) { return $(`#elements button:nth-child(${index})`) }

    get pageButton() { return $('#checkbox-example button') }


     /** 
     * Click the Page Button
     */
     clickPageButton() {
        this.pageButton.waitForDisplayed()
        this.pageButton.click()
    }
   

    /** 
     * Click the Example Button
     */
    clickExampleButton() {
        this.exampleButton.waitForDisplayed()
        this.exampleButton.click()
    }
    /**
     * Clicks the delete button
     * @param {Number} index index of the element
     */
    clickDeleteButton(index) {
        this.deleteButton(index).waitForDisplayed()
        this.deleteButton(index).click()
    }



    /**
     * Click the specified javascript alert button
     * @param {Number} index the index of the element
     */
     async clickJavascriptAlertButtonAsync(index) {
       await  this.javascriptAlertButton(index).waitForDisplayed()
        await this.javascriptAlertButton(index).click()
    }

    /**
     * Drag box A to box B
     */
     dragColumnAToColumnB() {
        this.columnA.waitForDisplayed()
        this.columnA.dragAndDrop(this.columnB)
    }
   


    /**
     * Enter text in the iframe
     * @param {String} text the text to be entered
     */
    sendTextToBody(text) {
        this.iframeBody.waitForDisplayed()
        this.iframeBody.click()
        this.iframeBody.clearValue()
        this.iframeBody.keys(text)
    }

    async sendTextToBodyAsync(text) {
    await this.iframeBody.waitForDisplayed()
    await this.iframeBody.click()
    await this.iframeBody.clearValue()
    await this.iframeBody.keys(text)
    }






     /**
     * Click the "click here" link
     */
     clickHereLink() {
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    }

     
     /**
     * scrolls to the page footer
     */
     scrollToPageFooter() {
        this.pageFooter.moveTo()
    }
    


    /**
     * Clicks the target input field
     */
    clickTarget() {
        this.target.waitForDisplayed()
        this.target.click()
    }
    async clickTargetAsync() {
        await this.target.waitForDisplayed()
        await this.target.click()
    }
    
    /**
     * Send keybord keys to Target
     * @param {String} text The keyboard text to enter
     */
    sendKeysToTarget(text) {
        this.target.waitForDisplayed()
        this.target.keys(text)
    }

    async sendKeysToTargetAsync(text) {
        await this.target.waitForDisplayed()
       await this.target.setValue(text)
    }

    /**
     * return the text of the return element
     */
    getResultText() {
        this.result.waitForDisplayed()
        return this.result.getText()
    }

    async getResultTextAsync() {
       await this.result.waitForDisplayed()
        return await this.result.getText()
    }





    /**
     * Send keybord keys to Target
     * @param {String} text The keyboard text to enter
     */
    sendKeysToTarget(text) {
        this.target.waitForDisplayed()
        this.target.keys(text)
    }


    /**
     * Hovers over the specified image
     * @param {Number} index the specific index of the image
     */
    hoverOnFigure(index) {
    this.figures(index).waitForDisplayed()
    this.figures(index).moveTo(1, 1)

    }
     /**
     * Returns the text of the figure details
     * @param {Number} index the index of the element
     */
     getFigureDetailsText(index) {
        this.figureDetails(index).waitForDisplayed()
        return this.figureDetails(index).getText()
    }
    

     /**
     * Enter the username into the field
     * @param {String} text username to be entered
     */
     enterUsername(text) {
        this.username.waitForDisplayed()
        this.username.setValue(text)
    }

    async enterUsernameAsync(text) {
        await this.username.waitForDisplayed()
        await this.username.setValue(text)
    }

    /**
     * Enter the password into the field
     * @param {String} text password to be entered
     */
    enterPassword(text) {
        this.password.waitForDisplayed()
        this.password.setValue(text)
    }
    async enterPasswordAsync(text) {
        await this.password.waitForDisplayed()
        await this.password.setValue(text)
    }

    
   



   async getLiText(){
   this.childElements.filter(async (element) =>{
        console.log(await element.getText())

    })


    }

    getSpecificElementText(index) {
        this.specificChildElement(index).waitForDisplayed()
        return this.specificChildElement(index).getText()
    }

    clickOnLink() {
        if (this.firstLink.isDisplayed() === true) {
            this.firstLink.click()
        }
        this.h3Header.waitForDisplayed()
    }

    async clickOnLinkAsync() {
        if (await this.firstLink.isDisplayed() === true) {
            await this.firstLink.click()
        }
        await this.h3Header.waitForDisplayed()
    }
    
    /**
     * Clicks on the link based on the index provided
     * @param {Number} index the index of the element
     */
    clickLink(index) {
        this.link(index).waitForDisplayed()
        this.link(index).click()
    }
}



module.exports = new Internet()

