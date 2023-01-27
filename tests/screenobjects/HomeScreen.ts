import AppScreen from './AppScreen';

class HomeScreen extends AppScreen {
    constructor () {
        super('~Home-screen');
    }

    async playNowButton():Promise<any> {
        return await $('~playNowButton');
    }
    
    async frozenBanner():Promise<any> {
        return await $('~Frozen');
    }

    async detailsAndMoreButton():Promise<any> {
        if (driver.isAndroid) {
            return await $(`//*[@text="Details and More"]`);
        } else {
            return await $('~Details and More');
        }
    }

    async animateButton():Promise<any> {
        return await $('~animateButton');
    }

    async closeButton():Promise<any> {
        return await $('~closeButton');
    }

    async navBarLeftButton():Promise<any> {
        return await $('~navBarLeftButton');
    }

    async navBarRightButton():Promise<any> {
        return await $('~navBarRightButton');
    }

    async searchTitleLabel():Promise<any> {
        return await $('~searchTitle');
    }

    async searchIconButton():Promise<any> {
        return await $('~searchIcon');
    }

    async searchInput():Promise<any> {
        return await $('~input');
    }
}

export default new HomeScreen();
