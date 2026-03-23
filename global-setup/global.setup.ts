import { chromium, firefox, webkit } from '@playwright/test';
import { AuthFlow } from '@modules/auth/auth.flow';
import { HomePage } from '@shared/pages/HomePage';
import { AuthPage } from '@modules/auth/auth.page';

async function login(browserType, file) {

    const browser = await browserType.launch();

    const page = await browser.newPage();
    const homePage = new HomePage(page);
    const authFlow = new AuthFlow(new AuthPage(page));

    await page.goto('https://demo1.cybersoft.edu.vn/');
    await homePage.getTopBarNavigation().navigateLoginPage();
    await authFlow.login('5cfa633b-ccfb-4735-882a-38ff7c308b07', 'Test123456@', true);

    await page.context().storageState({
        path: file
    });

    await browser.close();

}

async function globalSetup() {

    await login(chromium, 'storage/chromium.json');
    await login(firefox, 'storage/firefox.json');
    await login(webkit, 'storage/webkit.json');

}

export default globalSetup;