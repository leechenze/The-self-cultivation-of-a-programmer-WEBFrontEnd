let puppeteer = require('puppeteer'),
    cheerio = require('cheerio');
const { padEnd } = require('lodash');

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
        headless: false,
        // 设置放慢每个步骤的毫秒数;
        slowMo: 250
    }
    let browser = await puppeteer.launch(puppeteerOption);

    // 打开页面;
    let page = await browser.newPage();
    // 设置加载的网站地址;
    await page.goto('https://www.dytt8.net/index.htm');
    

    
    // // 获取页面内容(通过goto打开页面进行跳转);
    // let elements = await page.$$eval('#menu .contain ul li a', (elements) => {
    //     // 创建一个数组搜集元素信息(地址,内容);
    //     var eles = [];
    //     elements.forEach((item, ind) => {
    //         if(item.getAttribute('href') != '#'){
    //             let eleObj = {
    //                 href: item.href,
    //                 text: item.innerText,
    //             }
    //             eles.push(eleObj);
    //         }
    //     })
    //     return eles;
    // });
    // // 打开国内页面;
    // let gnPage = await browser.newPage();
    // await gnPage.goto(elements[2].href);






    // 获取页面对象(通过点击页面进行跳转);
    // let elementHandle = await page.$$('#menu .contain ul li a');
    // elementHandle[2].click();
    
    
    
    
    // 通过表单输入进行搜索;
    // 获取搜索框;
    let inputEle = await page.$('.searchl .formhue');
    // 光标聚焦在输入框;
    await inputEle.focus();
    // 往输入框输入内容;
    await page.keyboard.type('蝙蝠侠');
    // 获取点击按钮;
    let btnEle = await page.$('.searchr input[name=Submit]');
    // 按钮触发点击;
    await btnEle.click();
    
}

test();