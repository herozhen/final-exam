import { test, expect } from "@fixtures/custom-fixtures";
import { loadJson } from '@utils/json.loader';
import { LoginTestData } from '@modules/auth/auth.type';
const testData = loadJson<LoginTestData[]>(
    'auth/login.data.json'
);
// login test KHÔNG dùng storage
test.use({ storageState: undefined });
test.describe('@auth @regression Login Suite with username and password', () => {

    testData.forEach((data) => {

        test(`${data.caseId} - ${data.description}`, async ({ homePage, authFlow, authValidator }) => {
            await test.step(`Launch broswer and navigate to URL`, async () => {
                await homePage.goTo('https://demo1.cybersoft.edu.vn/');
            });
            await test.step(`Navigate to login page`, async () => {
                await homePage.getTopBarNavigation().navigateLoginPage();
            });
            await test.step(`Perform login with username: ${data.username} and password: ${data.password}`, async () => {
                await authFlow.login(data.username, data.password, data.remember);
            });
            await test.step(`Validate login result`, async () => {
                await authValidator.validate(data);
            });        

        });

    });

});