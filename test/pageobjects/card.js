class Card {
    get menuCreditCard () {
        return $('li=Credit Cards');
    }

    get btnAddNewCard () {
        return $('button=Add New card'); //In case of existing cards list
    }

    // get btnAddNewCard () {
    //     return $('button=Add a credit card'); //In case of empty card list
    // }

    get inputCardHolderName () {
        return $('#cardholdername');
    }

    get iframe () {
        return $('iframe[title="Secure card payment input frame"]')
    }

    get inputCardNumber () {
        return $("input[name='cardnumber']");
    }

    get inputExpiry () {
        return $("input[name='exp-date']");
    }

    get inputCvc () {
        return $("input[name='cvc']");
    }

    get btnAddPay () {
        return $('button=Add & Pay 2 AED');
    }

    get flashAlert () {
        return $('#snackbar')
    }

    async openCreditCard () {
        await this.menuCreditCard.waitForDisplayed();
        await this.menuCreditCard.click();
    }
    
    async openAddCard () {
        await this.btnAddNewCard.waitForDisplayed();
        await this.btnAddNewCard.click();
    }

    async setCardHolderName (chname) {
        await this.inputCardHolderName.waitForDisplayed();
        await this.inputCardHolderName.setValue(chname);
    }

    async switchFrame () {
        await browser.pause(5000);
        await browser.switchToFrame(6);
    }

    async setCardNumber (cardnumber) {
        await browser.pause(5000);
        //browser.switchTo().frame(this.iframe);
        // await browser.switchToFrame(6);
        await this.inputCardNumber.waitForDisplayed();
        await this.inputCardNumber.setValue(cardnumber);
        await browser.switchToParentFrame();
    }

    async setExpiry (expiry) {
        await browser.pause(2000);
        await browser.switchToFrame(6);
        await this.inputExpiry.waitForDisplayed();
        await this.inputExpiry.setValue(expiry);
        await browser.switchToParentFrame();
    }

    async setCvc (cvc) {
        await browser.pause(2000);
        await browser.switchToFrame(6);
        await this.inputCvc.waitForDisplayed();
        await this.inputCvc.setValue(cvc);
        await browser.switchToParentFrame();
    }

    async addAndPay () {
        await this.btnAddPay.waitForClickable();
        await this.btnAddPay.click();
    }
}

module.exports = new Card();