class Booking {
    get firstCar () {
        return $('.vehicle_card_vehicl_img_size__mabGF');
    }

    get ddTime () {
        return $('div=Select Time');
    }

    get ddPickup () {
        return $('div=Select');
    }

    get btnCheckout () {
        return $('button=Checkout')
    }

    get btnProceed () {
        return $('button=PROCEED');
    }

    get btnGoToCheckout () {
        return $('button=Go to Checkout');
    }

    get lblCheckbox1 () {
        return $('label=Do you accept our terms and conditions?');
    }

    get lblCheckbox2 () {
        return $('label=Do you agree any non rental charges will be deducted from your registered cards?');
    }

    get btnContinue () {
        return $('button=Continue');
    }

    get btnCardPay () {
        return $('button=Pay through card');
    }

    get flashAlert () {
        return $('#snackbar');
    }

    async selectVehicle () {
        await this.firstCar.waitForDisplayed({timeout: 20000});
        await this.firstCar.click();
    }

    async selectTime () {
        await this.ddTime.waitForDisplayed({timeout: 30000});
        await this.ddTime.click();
        await browser.pause(2000);
        await browser.keys("\uE015");
        await browser.pause(2000);
        await browser.keys("\uE007");
    }

    async selectStartTime () {
        await this.ddTime.waitForDisplayed({timeout: 30000});
        await this.ddTime.click();
        await browser.pause(2000);
        await browser.keys("\uE007");
    }

    async selectEndTime () {
        await this.ddTime.waitForDisplayed();
        await this.ddTime.click();
        await browser.pause(2000);
        await browser.keys("\uE007");
    }

    async selectPickup () {
        await this.ddPickup.waitForDisplayed();
        await this.ddPickup.click();
        await browser.keys("\uE007");
    }

    async navigateToCheckout () {
        await this.btnCheckout.waitForClickable();
        await this.btnCheckout.click();
        await this.btnProceed.waitForDisplayed();
        await this.btnProceed.click();
    }

    async navigateToPayment () {
        await this.btnGoToCheckout.waitForDisplayed();
        await this.btnGoToCheckout.click();
        await this.lblCheckbox1.waitForDisplayed();
        await this.lblCheckbox1.click();
        await this.lblCheckbox2.click();
        await this.btnContinue.waitForClickable();
        await this.btnContinue.click();
    }

    async payThroughCard () {
        await this.btnCardPay.waitForDisplayed();
        await this.btnCardPay.click();
    }

}

module.exports = new Booking();