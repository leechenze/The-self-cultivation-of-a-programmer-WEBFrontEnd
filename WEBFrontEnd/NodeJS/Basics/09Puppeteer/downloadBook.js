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
    
    // 进入到下载链接页选择下载格式, 这里选择了.epub格式;
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

        // 等待页面中js通过ajax访问后台之后获取链接地址请求回来的内容;
        await page.waitForSelector('#table_files tbody .even a',{visible: true});
        // 等待ajax请求完成之后才能获取到a标签元素, 然后获取a标签的href链接;
        let elementAHref = await page.$eval('#table_files tbody .even a', (element) => {
            return element.getAttribute('href');
        });
        bookLinkPage(elementAHref, bookObj.title);
        page.close();
    }

    downloadBook();


    // 下载电子书;
    async function bookLinkPage(linkUrl,bookTitle) {
        let page = await browser.newPage();

        // 启用拦截获下载地址;
        await page.setRequestInterception(true);
        // 监听请求事件, 并对请求进行拦截;
        page.on('request', interceptedRequest => {
            // 通过url模块解析请求地址;
            let urlObj = url.parse(interceptedRequest.url());
            if(urlObj.hostname == 'u066.93-cucc-dd.tv002.com') {
                // 终止电子书下载请求;
                interceptedRequest.abort();

                let ws = fs.createWriteStream(`./books/${bookTitle}.epub`)
                axios.get(urlObj.href, {responseType:"stream"}).then((res) => {
                    res.data.pipe(ws);
                    res.data.on('close', () => {
                        console.log(`下载完成: ${bookTitle}.epub`);
                        ws.close();
                        page.close();
                        // 递归调用,循环下载;
                        downloadBook();
                    })
                })
                
                
            }else{
                interceptedRequest.continue();
            }
        })


        await page.goto(`https://306t.com${linkUrl}`);        
        // 等待页面中js通过ajax访问后台之后获取链接地址请求回来的内容;
        await page.waitForSelector('.btn.btn-outline-secondary.fs--1',{visible: true});
        // 点击下载按钮, 进行拦截下载地址,下载到./books目录下;
        await page.$eval('.btn.btn-outline-secondary.fs--1', (element) => {
            element.click();
        })


        // 监听请求完成;
        // await page.on('requestfinished', (req) => {
        //     console.log(`下载已完成${req.url()}`);
        // })
    }
    
    
    
    
    
})();