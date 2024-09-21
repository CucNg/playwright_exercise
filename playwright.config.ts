
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 5,
  reporter: [['html', {
    open: 'never',
    host: '0.0.0.0',
    port: 9223, 
  }]],
  use: {
    trace: 'on',
    headless: true,
    
    // storageState: './auth.json',
  },
  
  // globalSetup: './tests/02-demo-setup-teardown/global-setup.ts',
  // globalTeardown: './tests/02-demo-setup-teardown/global-teardown.ts',

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // Dependencies setup/teardown --------------------------------------------------
    {
      name: "setup",
      testDir: "./tests",
      // testDir: "./tests/03-demo-pom-fixture",
      testMatch: "dependencies-setup.ts",
      teardown: "teardown",
    },
    {
      name: "teardown",
      testDir: "./tests",
      // testDir: "./tests/03-demo-pom-fixture",
      testMatch: "dependencies-teardown.ts",
      use: { storageState: "./auth.json" },
    },
    {
      name: 'chromium',
      dependencies: ["setup"],
      use: { ...devices['Desktop Chrome'], storageState: "./auth.json" },
    },
    // ------------------------------------------------------------------------
  ],
});

