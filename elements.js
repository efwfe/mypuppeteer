const puppeteer = require('puppeteer');

puppeteer.launch({
  executablePath: './chromium/chrome.exe',
  headless: false,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  }).then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://google.com');
    const inputElement = await page.$('input[type=submit]');
    await inputElement.click();
    // ...
  });
