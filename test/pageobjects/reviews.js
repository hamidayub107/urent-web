class Reviews {
    get btnWriteReview () {
        return $('a=Write Review');
    }

    get btnEditReview () {
        return $('a=Edit Review');
    }

    get tripRating () {
        return $$('i[aria-posinset="2"]')[1];
    }

    get inputTripReview () {
        return $('textarea[placeholder="Review for vehicle"]');
    }

    get hostRating () {
        return $$('i[aria-posinset="2"]')[2];
    }

    get inputHostReview () {
        return $('textarea[placeholder="Review for host"]');
    }

    get btnSave () {
        return $('button=Save');
    }

    get flastAlert () {
        return $('div[class="notification-container--top-right"]');
    }

    async openWriteReview () {
        await this.btnWriteReview.waitForDisplayed();
        await this.btnWriteReview.click();
    }

    async openEditReview () {
        await this.btnEditReview.waitForDisplayed();
        await this.btnEditReview.click();
        await this.btnEditReview.waitForDisplayed();
        await this.btnEditReview.click();
    }

    async setTripRating () {
        await this.tripRating.waitForDisplayed();
        await this.tripRating.click();
    }

    async setTripReview (tripreview) {
        await this.inputTripReview.waitForDisplayed();
        await this.inputTripReview.setValue(tripreview);
    }

    async setHostRating () {
        await this.hostRating.waitForDisplayed();
        await this.hostRating.click();
    }

    async setHostReview (hostreview) {
        await this.inputHostReview.waitForDisplayed();
        await this.inputHostReview.setValue(hostreview);
    }

    async submit() {
        await this.btnSave.waitForClickable();
        await this.btnSave.click();
    }  

}

module.exports = new Reviews();