let puppeteer = require('puppeteer');
let axios = require('axios');
let url = require('url');
let fs = require('fs');
let {fsRead, fsWrite} = require('./rwFN');
const { at } = require('lodash');


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
        // 设置延迟;
        timeout: 0,
    }
    let browser = await puppeteer.launch(puppeteerOption);
    


    // 封装延迟函数为promise对象
    function lcWait(milliSeconds) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('成功执行延迟函数, 延迟: ' + milliSeconds);
            },milliSeconds);
        })
    }
    

    // 解析book.txt文件中的每一项书链接地址;
    async function parseText() {
        // 读取文本内容;
        let textContent = await fsRead('./book.txt');
        // 正则匹配json字符串对象;
        let reg = /(\{.*?\})/igs;
        let tempRes,
            bookArr = [];
        while(tempRes = reg.exec(textContent)){
            // 获取匹配结果;
            let jsonStr = await tempRes[1];
            // 将字符串解析成对象;
            let jsonObj = await JSON.parse(jsonStr);
            bookArr.push(jsonObj);
        }
        return bookArr;
    }
    
    let bookArr = await parseText(), index = 0;
    async function downloadBook() {
        // 根据索引值下载书;
        // 如果索引值超出bookArr的个数时结束;
        if(index == bookArr.length) {
            return "完成";
        }
        let bookObj = await bookArr[index];
        index++;
        // 打开新页面下载书籍;
        let page = await browser.newPage();
        await page.goto(bookObj.href);
        
    }
    
    downloadBook();
    
})();