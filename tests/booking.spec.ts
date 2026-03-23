import { test, expect } from "@fixtures/custom-fixtures";
import { loadJson } from '@utils/json.loader';
import { BookingData } from "@modules/booking/booking.type";


const testData = loadJson<BookingData[]>(
    'booking/booking.data.json'
);
// login test KHÔNG dùng storage
test.use({ storageState: undefined });
test.describe('@basic Booking movies without logging-in username and password', () => {
    testData.forEach((data) => {
        test(`${data.caseId} - ${data.description}`, async ({ homePage, moviesFlow, bookingFlow, bookingValidator }) => {
            await test.step(`Launch broswer and navigate to URL`, async () => {
                await homePage.goTo('https://demo1.cybersoft.edu.vn/');
            });
            await test.step(`Select movie ${data.movie.movie}, select cinema ${data.movie.cinema} and select data ${data.movie.date}`, async () => {
                await moviesFlow.selectMovie(data);
                console.log('Selected movie with data:', data);
            });
            await test.step(`Select seats ${data.seats.join(', ')}`, async () => {
                const result = await bookingFlow.selectSeatsFlow(data);
                await bookingValidator.setResult(result);
                await bookingValidator.validateData(data);
            });
            await test.step(`Booking seats`, async () => {
                await bookingFlow.completeBooking();
            });
            await test.step(`Validate booking result`, async () => {
                await bookingValidator.validateCase(data);
            });
        });

    });

});


const testBookingWithLoginData = loadJson<BookingData[]>(
    'booking/booking.login.data.json'
);
test.describe('@auth Booking movies with logging-in username and password', () => {
    testBookingWithLoginData.forEach((data) => {
        test(`${data.caseId} - ${data.description}`, async ({ homePage, moviesFlow, bookingFlow, bookingValidator, authFlow }) => {
            await test.step(`Launch broswer and navigate to URL`, async () => {
                await homePage.goTo('https://demo1.cybersoft.edu.vn/');
            });
            await test.step(`Navigate to login page`, async () => {
                await homePage.getTopBarNavigation().navigateLoginPage();
            });
            await test.step(`Perform login with username: ${data.username} and password: ${data.password}`, async () => {
                await authFlow.login(data.username, data.password, data.remember);
            });
            await test.step(`Select movie ${data.movie.movie}, select cinema ${data.movie.cinema} and select data ${data.movie.date}`, async () => {
                await moviesFlow.selectMovie(data);
                console.log('Selected movie with data:', data);
            });
            await test.step(`Select seats ${data.seats.join(', ')}`, async () => {
                const result = await bookingFlow.selectSeatsFlow(data);
                await bookingValidator.setResult(result);
                await bookingValidator.validateData(data);
            });
            await test.step(`Booking seats`, async () => {
                await bookingFlow.completeBooking();
            });
            await test.step(`Validate booking result`, async () => {
                await bookingValidator.validateCase(data);
            });
        });

    });

});


const testBookingRandomData = loadJson<BookingData[]>(
    'booking/booking.random.data.json'
);
test.describe('@random Booking movies with logging-in username and password and random seats', () => {
    testBookingRandomData.forEach((data) => {
        test(`${data.caseId} - ${data.description}`, async ({ homePage, moviesFlow, bookingFlow, bookingValidator, authFlow }) => {
            await test.step(`Launch broswer and navigate to URL`, async () => {
                await homePage.goTo('https://demo1.cybersoft.edu.vn/');
            });
            await test.step(`Navigate to login page`, async () => {
                await homePage.getTopBarNavigation().navigateLoginPage();
            });
            await test.step(`Perform login with username: ${data.username} and password: ${data.password}`, async () => {
                await authFlow.login(data.username, data.password, data.remember);
            });
            await test.step(`Select movie ${data.movie.movie}, select cinema ${data.movie.cinema} and select data ${data.movie.date}`, async () => {
                await moviesFlow.selectMovie(data);
                console.log('Selected movie with data:', data);
            });
            await test.step(`Select seats`, async () => {
                const result = await bookingFlow.selectSeatsAuto(data);
                await bookingValidator.setResult(result);
                await bookingValidator.validateData(data);
            });
            await test.step(`Booking seats`, async () => {
                await bookingFlow.completeBooking();
            });
            await test.step(`Validate booking result`, async () => {
                await bookingValidator.validateCase(data);
            });
        });

    });

});