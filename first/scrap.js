const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
  headless:false,
  executablePath: '/Users/pooh/Downloads/chromium/Chromium.app/Contents/MacOS/Chromium' });
  const page = await browser.newPage();
  
  await page.goto('https://github.com');
  await page.screenshot({path: 'yqq.png'});
  
  browser.close();
}

run();
