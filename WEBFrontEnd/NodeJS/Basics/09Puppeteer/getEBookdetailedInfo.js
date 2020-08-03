let puppeteer = require('puppeteer');
let axios = require('axios');


(async function () {
    // 定义puppeteer的配置选项;
    let puppeteerOption = {
        // 设置有界面模式下的视窗宽高;
        defaultViewport: {
            width: 1400,
            height: 800,
        },
        // {headless: false}: 设置为有界面, {headless: true}: 设置为无界面, 无界面浏览器性能更高更快, 有界面一般用于调试;
        headless: false,
        // 设置放慢每个步骤的毫秒数, 如果debug调试时可以放开这一项;
        // slowMo: 250  
    }
    let browser = await puppeteer.launch(puppeteerOption);


    // 目标: 获取https://sobooks.cc 所有电子书的书名和链接;
    let httpUrl = "https://sobooks.cc";
    // 进入网站, 获取整个网站的列表页总页数;
    async function getAllNum() {
        let page = await browser.newPage();
        // 进入到sobooks.cc的页面;
        await page.goto(httpUrl);
        // 获取页面元素进行操作;
        let pageNum = await page.$eval('.pagination li:last-child span', (element) => {
            let elementHTML = element.innerHTML.substring(1,element.innerHTML.length - 2).trim();
            return elementHTML;
        });
        return parseInt(pageNum);
    };
    let pageNum = await getAllNum();



    // 获取列表页的所有链接;
    

    // 进入每个电子书的详情页,获取下载电子书的网盘地址;


    // 将获取的数据保存到本地(book.txt)文档中;

})();
