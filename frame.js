const puppeteer = require('puppeteer');

puppeteer.launch({
  executablePath: './chromium/chrome.exe',
  headless: false,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
}).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.google.com/chrome/browser/canary.html');
  dumpFrameTree(page.mainFrame(), '');
  await browser.close();

  function dumpFrameTree(frame, indent) {
    console.log(indent + frame.url());
    for (let child of frame.childFrames())
      dumpFrameTree(child, indent + '  ');
  }
});
