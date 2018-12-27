const puppeteer = require("puppeteer");
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6 Plus'];
let page = null;

async function run(){
    const browser = await puppeteer.launch({
         // headless:false,
           args: ['--no-sandbox', '--disable-setuid-sandbox'],
            executablePath: './chromium/chrome.exe',
    });

    page = await browser.newPage();

    await page.emulate(iPhone);
    await page.goto("https://m.qichacha.com/search?key=%E4%B8%B4%E6%B1%9F%E5%B8%82%E8%B1%86%E7%93%A3");
    const results = page.evaluate(() => {
          const data = [];
          const elements = document.querySelectorAll('.list-wrap>a');
          for (const el of elements) {
              data.push({
                "href":el.href,
                    "name":el.querySelector(".list-item-name").innerText,
                    "img":el.querySelector("img").src,
            });
          }
          return data;
        });

   console.log(await results);
   await page.close();
   await browser.close();

}
run()
