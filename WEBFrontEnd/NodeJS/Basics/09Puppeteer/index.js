let puppeteer = require('puppeteer');



async function test() {
    // 启动浏览器: 返回浏览器实例;
    // let browser = puppeteer.launch();
    let puppeteerOption = {
        // 设置有界面模式下的视窗宽高;
        defaultViewport: {
            width: 1400,
            height: 800,
        },
        // {headless: false}: 设置为有界面, {headless: true}: 设置为无界面, 无界面浏览器性能更高更快, 有界面一般用于调试;
        headless: false
    }
    let browser = await puppeteer.launch(puppeteerOption);

    // 打开页面;
    let page = await browser.newPage();
    // 设置加载的网站地址;
    await page.goto('http://www.baidu.com');
    // 网页截图;
    await page.screenshot({path: 'screenshot.jpg'});

    // 获取页面内容;
    page.$$eval('#s-top-left > a', (elements) => {
        console.log(elements);
    })
    page.$eval('#s-top-left', (element) => {
        console.log(element);
    })
    
    // 监听页面的输出;
    page.on('console', (param) => {
        console.log(param);
    })
    
}

test();