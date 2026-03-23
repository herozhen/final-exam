import { test as base } from '@playwright/test';
import { LoginDialog } from '@shared/dialogs/login.dialog';
import { HomePage } from '@shared/pages/HomePage';
import { AuthPage } from '@modules/auth/auth.page';
import { AuthFlow } from '@modules/auth/auth.flow';
import { AuthValidator } from '@modules/auth/auth.validator';
import { MoviesPage } from '@modules/movies/movies.page'
import { MoviesApi } from '@modules/movies/movies.api'
import { MoviesService } from '@modules/movies/movies.service'
import { MoviesFlow } from '@modules/movies/movies.flow'
import { MoviesValidator } from '@modules/movies/movies.validator'
import { RegisterFlow } from '@modules/register/register.flow';
import { RegisterValidator } from '@modules/register/register.validator';
import { RegisterPage } from '@modules/register/register.page';
import { RegisterDialog } from '@shared/dialogs/register.dialog';
import { BookingFlow } from '@modules/booking/booking.flow';
import { BookingValidator } from '@modules/booking/booking.validator';
import { BookingPage } from '@modules/booking/booking.page';
import { BookingDialog } from '@shared/dialogs/booking.dialog';

// Declare the types of your fixtures.
type MyFixtures = {
    authFlow: AuthFlow;
    authValidator: AuthValidator;
    authPage: AuthPage;


    registerFlow: RegisterFlow;
    registerValidator: RegisterValidator;
    registerPage: RegisterPage;

    bookingFlow: BookingFlow;
    bookingValidator: BookingValidator;
    bookingPage: BookingPage;


    moviesPage: MoviesPage;
    moviesService: MoviesService;
    moviesFlow: MoviesFlow;
    moviesValidator: MoviesValidator;
    moviesApi: MoviesApi;


    homePage: HomePage;
    loginDialog: LoginDialog;
    registerDialog: RegisterDialog;
    bookingDialog: BookingDialog;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
    /* Common feature ===================================================================== */
    loginDialog: async ({ page }, use) => {
        const dialog = new LoginDialog(page);
        await use(dialog);
    },
    registerDialog: async ({ page }, use) => {
        const dialog = new RegisterDialog(page);
        await use(dialog);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    /* Login feature ===================================================================== */
    authFlow: async ({ page }, use) => {
        const authPage = new AuthPage(page);
        await use(new AuthFlow(authPage));
    },
    authValidator: async ({ loginDialog }, use) => {
        await use(new AuthValidator(loginDialog));
    },

    /* Register feature ===================================================================== */
    registerFlow: async ({ page }, use) => {
        const registerPage = new RegisterPage(page);
        await use(new RegisterFlow(registerPage));
    },
    registerValidator: async ({ registerDialog }, use) => {
        await use(new RegisterValidator(registerDialog));
    },

    /* Booking feature ===================================================================== */
    bookingPage: async ({ page }, use) => {
        const bookingPage = new BookingPage(page);
        await use(bookingPage);
    },
    bookingFlow: async ({ page, request }, use) => {
        const bookingPage = new BookingPage(page);
        await use(new BookingFlow(bookingPage, request));
    },
    bookingDialog: async ({ page }, use) => {
        const dialog = new BookingDialog(page);
        await use(dialog);
    },
    bookingValidator: async ({ bookingPage, bookingDialog }, use) => {
        await use(new BookingValidator(bookingPage, bookingDialog));
    },

    /* Movies feature ===================================================================== */
    moviesPage: async ({ page }, use) => {

        await use(new MoviesPage(page))

    },

    moviesService: async ({ request }, use) => {

        const api = new MoviesApi(request)

        await use(new MoviesService(api))

    },

    moviesFlow: async ({ moviesService, moviesPage }, use) => {

        await use(new MoviesFlow(moviesService, moviesPage))

    },

    moviesValidator: async ({ moviesService, moviesPage }, use) => {

        await use(new MoviesValidator(moviesService, moviesPage))

    },
    moviesApi: async ({ request }, use) => {
        await use(new MoviesApi(request))
    }

});
export { expect } from '@playwright/test';