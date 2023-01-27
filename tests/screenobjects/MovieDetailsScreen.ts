import AppScreen from './AppScreen';

class MovieDetailsScreen extends AppScreen {
    constructor () {
        super('~Movie-Detail-screen');
    }

    async durationLabel():Promise<any> {
        if (driver.isAndroid) {
            return await $(`//*[@text="duration"]`);
        } else {
            return await $('~duration');
        }
    }
}

export default new MovieDetailsScreen();
