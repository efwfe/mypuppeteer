const puppeteer = require('puppeteer');

(async()=>{
    const pathToExtension = "/Users/pooh/codes/nodes/extensions";
    const browser = await puppeteer.launch({
        headless:false,
        executablePath: '/Users/pooh/Downloads/chromium/Chromium.app/Contents/MacOS/Chromium',
        args:[
          `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`
        ]
    });
    const page = await browser.newPage();
    await page.goto("https://intoli.com");
})()