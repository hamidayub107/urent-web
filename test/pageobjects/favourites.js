class Favourites {
    get cardFav () {
        return $$('div[class="saved_card__fQZaL"]').length;
    }

    get iconSave () {
        return $('img[src="/assets/icons/Like.svg"]');
    }

    get iconSaved () {
        return $('img[src="/assets/icons/Liked.svg"]');
    }

    async getCount () {
        await browser.pause(2000);
        const count = await this.cardFav;
        console.log(count);
        return count;
    }

    async addFav () {
        await this.iconSave.waitForDisplayed();
        await this.iconSave.click();
    }

    async removeFav () {
        await this.iconSaved.waitForDisplayed();
        await this.iconSaved.click();
    }

}

module.exports = new Favourites();