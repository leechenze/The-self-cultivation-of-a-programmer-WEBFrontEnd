let puppeteer = require('puppeteer');
let axios = require('axios');
let url = require('url');
let fs = require('fs');
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
        headless: true,
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
    

    // 目标: 获取https://sobooks.cc 所有电子书的书名和链接;
    let httpUrl = "https://sobooks.cc";
    // 进入网站, 获取整个网站的列表页总页数;
    async function getAllNum() {
        let page = await browser.newPage();

        // 启用拦截器;
        await page.setRequestInterception(true);
        // 监听请求事件, 并对请求进行拦截;
        page.on('request', interceptedRequest => {
            // 通过url模块解析请求地址;
            let urlObj = url.parse(interceptedRequest.url());
            if(urlObj.hostname == 'googleads.g.doubleclick.net') {
                //如果是谷歌广告请求,就abort(中止)请求;
                interceptedRequest.abort();
            }else{
                // 否则请求继续;
                interceptedRequest.continue();
            }
        })

        // 进入到sobooks.cc的页面;
        await page.goto(httpUrl);
        // 获取页面元素进行操作;
        let pageNum = await page.$eval('.pagination li:last-child span', (element) => {
            let elementHTML = element.innerHTML.substring(1,element.innerHTML.length - 2).trim();
            return elementHTML;
        });
        page.close();
        return parseInt(pageNum);
    };



    // 获取列表页的链接(num值代表当前第几页);
    async function pageList(num) {
        let pageListUrl = 'http://sobooks.cc/page/' + num;

        let page = await browser.newPage();

        // 启用拦截器;
        await page.setRequestInterception(true);
        // 监听请求事件, 并对请求进行拦截;
        page.on('request', interceptedRequest => {
            // 通过url模块解析请求地址;
            let urlObj = url.parse(interceptedRequest.url());
            if(urlObj.hostname == 'googleads.g.doubleclick.net') {
                //如果是谷歌广告请求,就abort(中止)请求;
                interceptedRequest.abort();
            }else{
                // 否则请求继续;
                interceptedRequest.continue();
            }
        });

        // 访问对应的列表页;
        await page.goto(pageListUrl);
        let pageArr = await page.$$eval('.card .card-item .thumb-img > a', (elements) => {
            let arr = [];
            elements.forEach((ele,ind) => {
                let itemObj = {
                    href: ele.getAttribute('href'),
                    title: ele.getAttribute('title')
                }
                arr.push(itemObj)
            });
            return arr;
        })
        // 关闭页面;
        page.close();
        // 循环数组中pageObj对象,获取详情和地址请求书记详情页;
        pageArr.forEach(async (pageObj,ind) => {
            // if(pageObj.href == "https://sobooks.cc/books/16189.html"){
            //     getPageInfo(pageObj.href, pageObj.title);
            // }
            await lcWait(5000 * ind);
            getPageInfo(pageObj.href, pageObj.title);
        });
    }
    pageList(13);

    
    // 进入每个电子书的详情页,获取下载电子书的网盘地址;
    async function getPageInfo(pageObjHref, pageObjTitle) {
        
        let page = await browser.newPage();
        // 启用拦截器;
        await page.setRequestInterception(true);
        // 监听请求事件, 并对请求进行拦截;
        page.on('request', interceptedRequest => {
            // 通过url模块解析请求地址;
            let urlObj = url.parse(interceptedRequest.url());
            if(urlObj.hostname == 'googleads.g.doubleclick.net') {
                //如果是谷歌广告请求,就abort(中止)请求;
                interceptedRequest.abort();
            }else{
                // 否则请求继续;
                interceptedRequest.continue();
            }
        })

        await page.goto(pageObjHref);
        // 获取下载标签(百度网盘, 城通网盘);
        let aTag = await page.$('.dltable tr:nth-of-type(3) a:last-child');
        // 获取下载地址;
        let aHref = await aTag.getProperty('href');
        aHref = aHref._remoteObject.value;
        aHref = aHref.split('?url=')[1];
        // 将下载下来的电子书进行记录写入到book.txt下;
        let bookContent = `{"href": ${pageObjHref}, "title":${pageObjTitle}}\n`;
        fs.writeFile('book.txt', bookContent, {flag: 'a'}, () => {
            console.log('已将电子书写入 ---- ' + pageObjTitle);
            // 关闭页面;
            page.close();
        })
    }

    // 将获取的数据保存到本地(book.txt)文档中;
    
    
    
    
    
    
})();