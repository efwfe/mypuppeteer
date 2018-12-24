const puppeteer = require("puppeteer");
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6 Plus'];
let page = null;

async function run(){
    const browser = await puppeteer.launch({
         headless:false,
        executablePath: '/Users/pooh/Downloads/chromium/Chromium.app/Contents/MacOS/Chromium',
    });

    page = await browser.newPage();

    await page.emulate(iPhone);
    await page.goto("https://m.qichacha.com");
}

run()