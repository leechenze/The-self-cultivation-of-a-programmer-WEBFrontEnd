let puppeteer = require('puppeteer');



async function test() {
    // 启动浏览器: 返回浏览器实例;
    // let browser = puppeteer.launch();
    // {headless: false}: 设置为无界面, {headless: true}: 设置为有界面;
    // 无界面浏览器性能更高更快, 有界面一般用于调试;
    let browser = await puppeteer.launch({headless: false});
    
    // 打开页面;
    let page = (await browser).newPage();
    // 设置加载的网站地址;
    (await page).goto('http://www.baidu.com');

}

test();