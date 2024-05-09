class Garage {

    get btnAddVehicle () {
        return $('button=Add Vehicle');
    }

    get catCar () {
        return $('h4=Cars');
    }

    get btnPlus () {
        return $('i[class="teal plus large icon"]');
    }

    get input () {
        return $('input[name="vehile_images"]');
    }

    get btnOkay () {
        return $('button=Okay');
    }

    get btnNext () {
        return $('button=Next');
    }

    async openAddVehicle () {
        await this.btnAddVehicle.waitForDisplayed();
        await this.btnAddVehicle.click();
    }

    async selectCars () {
        await this.catCar.waitForDisplayed();
        await this.catCar.click();
    }

    async imgUpload () {
        // await this.btnPlus.waitForDisplayed();
        // await this.btnPlus.click();
        // const path = require('path');
        // const filePath = path.join(__dirname, '../img/1.jpg');
        // const remoteFilePath = browser.uploadFile(filePath);
        // const fileInput = $('input[type="file"]');

        // browser.execute(function() {
        //    document.getElementsByName('vehile_images')[0].style.display = 'block';
        // });
        // this.input.waitForDisplayed();
        
        // fileInput.chooseFile(['/Users/macbook/UbidzAutomation/img/1.jpg', '/Users/macbook/UbidzAutomation/img/1.jpg']);
        // this.input.chooseFile(filePath);
        // await browser.execute(function(filePath){
        //     var fileInput = document.querySelector('input[type="file"]');
        //     var file = new File([filePath], 'fileName');
        //     var dataTransfer = new DataTransfer();
        //     dataTransfer.items.add(file);
        //     fileInput.files = dataTransfer.files;
        // }, '/Users/macbook/UbidzAutomation/img/1.jpg');

        // this.input.setValue(remoteFilePath);
    }

    async moveNext () {
        await this.btnNext.waitForDisplayed();
        await this.btnNext.click();
    }

}

module.exports = new Garage();