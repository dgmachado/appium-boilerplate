import HomeScreen from '../screenobjects/HomeScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        let playNowButton = await HomeScreen.playNowButton();
        playNowButton.waitForDisplayed({
            timeout: 20000,
        });
    });

    it('should open and animate alert popup', async () => {
        let playNowButton = await HomeScreen.playNowButton();
        playNowButton.click();

        let animateButton = await HomeScreen.animateButton();
        animateButton.waitForDisplayed({
            timeout: 20000,
        });
        animateButton.click();

        // Add a pause, just to make sure the animation is done
        await driver.pause(4000);
        let closeButton = await HomeScreen.closeButton();
        closeButton.click();
    });

    it('should open menu', async () => {
        let navBarLeftButton = await HomeScreen.navBarLeftButton();
        navBarLeftButton.click();

        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toContain('Do you want open menu?');

        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });    

    it('should open find popup', async () => {
        let navBarRightButton = await HomeScreen.navBarRightButton();
        navBarRightButton.click();

        let searchTitleLabel = await HomeScreen.searchTitleLabel();
        searchTitleLabel.waitForDisplayed({
            timeout: 20000,
        });

        let searchIconButton = await HomeScreen.searchIconButton();
        searchIconButton.click();

        let playNowButton = await HomeScreen.playNowButton();
        playNowButton.waitForDisplayed({
            timeout: 20000,
        });
        playNowButton.click();

        let searchInput = await HomeScreen.searchInput();
        searchInput.setValue("Spider-Man");

        let navBarLeftButton = await HomeScreen.navBarLeftButton();
        navBarLeftButton.click();
    });    
});
