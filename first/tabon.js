const puppeteer = require('puppeteer');
const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' +
  'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
// set useragent
function serPro(page){
  page.setUserAgent(userAgent);
  page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', {
    get: () => false,
    });
  });
  
  // Pass the Permissions Test.
  page.evaluateOnNewDocument(() => {
  const originalQuery = window.navigator.permissions.query;
  return window.navigator.permissions.query = (parameters) => (
    parameters.name === 'notifications' ?
      Promise.resolve({ state: Notification.permission }) :
      originalQuery(parameters)
      );
    });

  // Pass the Chrome Test.
  page.evaluateOnNewDocument(() => {
  // We can mock this in as much depth as we need for the test.
  window.navigator.chrome = {
    runtime: {},
    // etc.
    };
  });
};

(async () => {
  const browser = await puppeteer.launch({
      headless:false,
      executablePath: '/Users/pooh/Downloads/chromium/Chromium.app/Contents/MacOS/Chromium',
      args: ['--no-sandbox'],
       });


  browser.on('targetcreated', async function(target){
    console.log('New Tab Created');
    // const page = target.page();
    const len = (await browser.pages()).length;
    const all = (await browser.pages());
    for(var i=0; j=len,i<j; i++){
      console.log(i);
      await setTimeout(serPro(all[i]), 3000);
    // console.log("current page count ", last); 
      //await serPro(all[i]);
  };
    
  })

  // get current tab count
  // console.log("current page count ", (await browser.pages()).length); // 3

  // tab 1
  const page = await browser.newPage();
  // await serPro(page);
  // lets see if tab increased
  // console.log("current page count ", (await browser.pages()).length); // 3

  const page2 = await browser.newPage();
  // await serPro(page2);
  
  const page3 = await browser.newPage();
  // await serPro(page3);
  // use destructuring for easier usage
  const [tabOne, tabTwo,tabThree,tabfour] = (await browser.pages());
  // console.log("current page count ", (await browser.pages()).length); // 3
  
  // use the tabs aka Page objects properly
  // await tabfour.goto('https://intoli.com/blog/not-possible-to-block-chrome-headless/chrome-headless-test.html');
  console.log("tabfour Title ",await tabOne.title()); // Example Domain

  // use the tabs aka Page objects properly
  await tabTwo.goto('http://wsjs.saic.gov.cn');
  console.log("Tab Two Title ",await tabTwo.title()); // Example Domain

  await tabThree.goto('https://intoli.com/blog/not-possible-to-block-chrome-headless/chrome-headless-test.html');
  console.log("tabThree Title ",await tabThree.title()); // Example Domain

  // await tabOne.evaluate(() => {
  //   window.open('http://www.example.com', '_blank');
  // });
  // await tabOne.waitFor(2000); // wait for a while
  // console.log("current page count ", (await browser.pages()).length); // 3

  // close the browser
  // await browser.close();
})();
