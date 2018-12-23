// We'll use Puppeteer is our browser automation framework.
const puppeteer = require('puppeteer');

// This is where we'll put the code to get around the tests.
const preparePageForTests = async (page) => {
  // TODO: Not implemented yet.
}

(async () => {
  // Launch the browser in headless mode and set up a page.
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    executablePath: '/Users/pooh/Downloads/chromium/Chromium.app/Contents/MacOS/Chromium',
    headless: false,
  });
  const page = await browser.newPage();

  // Pass the User-Agent Test.
  const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' +
  'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
  await page.setUserAgent(userAgent);

  // Pass the Webdriver Test.
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', {
    get: () => false,
    });
  });
  
  // Pass the Permissions Test.
  await page.evaluateOnNewDocument(() => {
  const originalQuery = window.navigator.permissions.query;
  return window.navigator.permissions.query = (parameters) => (
    parameters.name === 'notifications' ?
      Promise.resolve({ state: Notification.permission }) :
      originalQuery(parameters)
      );
    });

  // Pass the Chrome Test.
  await page.evaluateOnNewDocument(() => {
  // We can mock this in as much depth as we need for the test.
  window.navigator.chrome = {
    runtime: {},
    // etc.
    };
  });
  
  // Prepare for the tests (not yet implemented).
  await preparePageForTests(page);

  // Navigate to the page that will perform the tests.
  const testUrl = 'http://www.baidu.cn/';
  await page.goto(testUrl);

  // Save a screenshot of the results.
  await page.screenshot({path: 'headless-test-result.png'});

  // Clean up.
  //await browser.close()
})();
