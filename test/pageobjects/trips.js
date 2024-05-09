class Trips {
    get btnSmlCancel () {
        return $('button=Cancel');
    }

    get ddReasons () {
        return $('div=Select Reason');
    }

    get btnCancel () {
        return $('button[class="ui red button"]');
    }

    get btnReject () {
        return $('button=Reject');
    }

    get btnConfirm () {
        return $('button=Confirm');
    }

    get btnOk () {
        return $('button=OK');
    }

    get flashAlert () {
        return $('div[class="notification-container--top-right"]');
    }

    get btnAllTrips () {
        return $('a=All Trips');
    }

    async pendingCancel () {
        await this.btnSmlCancel.waitForDisplayed();
        await this.btnSmlCancel.click();
        await this.ddReasons.waitForDisplayed();
        await this.ddReasons.click();
        await browser.keys("\uE007");
        await this.btnCancel.waitForDisplayed();
        await this.btnCancel.click();
    }

    async pendingReject () {
        await this.btnReject.waitForDisplayed();
        await this.btnReject.click();
        await this.ddReasons.waitForDisplayed();
        await this.ddReasons.click();
        await browser.keys("Down arrow");
        await browser.keys("\uE007");
        await this.btnCancel.waitForDisplayed();
        await this.btnCancel.click();
    }

    async pendingAccept () {
        await this.btnConfirm.waitForDisplayed();
        await this.btnConfirm.click();
        await this.btnOk.waitForDisplayed();
        await this.btnOk.click();
    }

    async openAllTrips () {
        await this.btnAllTrips.waitForDisplayed();
        await this.btnAllTrips.click();
    }
}

module.exports = new Trips();