import HomeScreen from '../screenobjects/HomeScreen';
import MovieDetailsScreen from '../screenobjects/MovieDetailsScreen';

describe('Movie Detail Interations,', () => {
    beforeEach(async () => {
        let playNowButton = await HomeScreen.playNowButton();
        playNowButton.waitForDisplayed({
            timeout: 20000,
        });
    });

    it('should open film detail screen', async () => {
        let frozenBanner = await HomeScreen.frozenBanner();
        frozenBanner.click();
        let detailsAndMoreButton = await HomeScreen.detailsAndMoreButton();
        detailsAndMoreButton.waitForDisplayed({
            timeout: 20000,
        });
        detailsAndMoreButton.click();
        let durationLabel = await MovieDetailsScreen.durationLabel();
        durationLabel.waitForDisplayed({
            timeout: 20000,
        });
    });   
});
