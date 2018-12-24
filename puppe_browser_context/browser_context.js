const puppeteer = require("puppeteer");
(async()=>{
  const browser = await puppeteer.launch({
        executablePath: './chromium/chrome.exe',
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        })

    // Create a new incognito browser context
  const context = await browser.createIncognitoBrowserContext();
  // Create a new page inside context.

  const page = await context.newPage();

  await page.goto('https://example.com');
  // Dispose context once it's no longer needed.

})()
