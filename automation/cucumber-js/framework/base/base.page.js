const { By, until} = require('selenium-webdriver')

class Basepage{

    constructor(driver){
        this.driver = driver;
        this.timeout = 20000; //5s
    }

    async find(locator){
        return await this.driver.wait(
            until.elementLocated(By[locator.using](locator.value)),
            this.timeout
        );
    }

    async findAll(locator){
        const elements = await this.driver.findElements(By[locator.using](locator.value));        
        return elements || [];
    }

    async click(locator){
        const element = await this.find(locator);

        await this.driver.wait(
            until.elementIsVisible(element),
            this.timeout
        );

        await element.click();
    }

    async type(locator, text){
        const element = await this.find(locator);
        
        await this.driver.wait(
            until.elementIsVisible(element),
            this.timeout
        );
        await element.clear();
        await element.sendKeys(String(text));
    }
 

}

module.exports = Basepage;