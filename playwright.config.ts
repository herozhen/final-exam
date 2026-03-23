import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  outputDir: 'test-result/test-artifacts',
  timeout: 300000, // test timeout (mặc định 30s)
  expect: {
    timeout: 10000
  },
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,  // retry 2 lần nếu chạy trên CI, còn local thì retry 1 lần
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: 'test-result/html-report' }],
    ['allure-playwright'],
    ['json', { outputFile: 'test-result/json-test-results.json' }],
    ['junit', { outputFile: 'test-result/junit-test-results.xml' }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    actionTimeout: 10000,
    screenshot: 'only-on-failure',
    video: {
      mode: 'retain-on-failure',  // record video 
      size: { width: 1280, height: 720 },
    },
  },

  /* Configure projects for major browsers */
  globalSetup: './global-setup/global.setup.ts',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: 'storage/chromium.json' },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'], storageState: 'storage/firefox.json' },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'], storageState: 'storage/webkit.json' },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
