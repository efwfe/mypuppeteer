const puppeteer = require("puppeteer");

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

(async() => {
    browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        executablePath: 'C:\\Users\\Administrator\\Downloads\\chrome-win\\chrome.exe',
        headless: false,
      });
    const page = await browser.newPage();
    const testUrl = 'http://www.baidu.cn/';
    await page.goto(testUrl);
    await delay(4000);
    await page.goto(testUrl);
    
    

})();
