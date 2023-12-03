import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/angularpractice/',
    specPattern: 'cypress/tests/**/**.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/commands.ts',
    retries: 0,
    // retries: {runMode: 2, openMode: 0},
    watchForFileChanges: false,
    waitForAnimations: true,
    execTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    video: false,
  },
})
