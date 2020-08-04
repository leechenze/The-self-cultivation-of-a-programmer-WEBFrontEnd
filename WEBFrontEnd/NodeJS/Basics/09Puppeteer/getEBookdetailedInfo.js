let puppeteer = require('puppeteer');
let axios = require('axios');
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
        page.close();
        return parseInt(pageNum);
    };



    // 获取列表页的链接(num值代表当前第几页);
    async function pageList(num) {
        let pageListUrl = 'http://sobooks.cc/page/' + num;

        let page = await browser.newPage();
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
        pageArr.forEach((pageObj,ind) => {
            getPageInfo(pageObj.href, page.title);
        });
    }
    pageList(1);

    
    // 进入每个电子书的详情页,获取下载电子书的网盘地址;
    async function getPageInfo(pageObjHref, pageObjTitle) {
        let page = await browser.newPage();
        await page.goto(pageObjHref);
        // 获取下载标签(百度网盘, 城通网盘);
        let aTag = await page.$('.dltable tr:nth-of-type(3) a:last-child');
        // 获取下载地址;
        console.log(aTag);
        // let AHref = await aTag.getProperty('href');
        // console.log(AHref);
    }

    // 将获取的数据保存到本地(book.txt)文档中;

})();
