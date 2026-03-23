import { test, expect } from "@fixtures/custom-fixtures";
import { loadJson } from '@utils/json.loader';
import { RegisterTestData } from '@modules/register/register.type';
const testData = loadJson<RegisterTestData[]>(
    'register/register.data.json'
);
// register test KHÔNG dùng storage
test.use({ storageState: undefined });
test.describe('@register @regression Register Suite with user information', () => {

    testData.forEach((data) => {

        test(`${data.caseId} - ${data.description}`, async ({ homePage, registerFlow, registerValidator }) => {
            await test.step(`Launch broswer and navigate to URL`, async () => {
                await homePage.goTo('https://demo1.cybersoft.edu.vn/');
            });
            await test.step(`Navigate to register page`, async () => {
                await homePage.getTopBarNavigation().navigateRegisterPage();
            });
            await test.step(`Perform register with user information`, async () => {
                await registerFlow.register(data);
            });
            await test.step(`Validate register result`, async () => {
                await registerValidator.validate(data);
            });

        });

    });

});