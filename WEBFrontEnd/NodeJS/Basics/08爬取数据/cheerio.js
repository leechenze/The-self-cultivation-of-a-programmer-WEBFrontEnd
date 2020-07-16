/*
 * @Author: your name
 * @Date: 2020-07-15 23:15:33
 * @LastEditTime: 2020-07-15 23:24:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \The-self-cultivation-of-a-programmer\WEBFrontEnd\NodeJS\Basics\08爬取数据\cheerio.js
 */ 


// cheerio 是node的抓取页面模块, 为服务器特别定制的一个jQuery核心实现. 适合各种web爬虫程序;
// cheerio 就是服务器端的jQuery, 用法也一摸一样, jquery有多好用, 在这里服务器的爬虫就有多好用~~~;

// 获取HTML文档内容, 内容获取和jquery是一样的;
const cheerio = require('cheerio'),
    axios = require('axios'),
    fs = require('fs'),
    url = require('url');


let httpUrl = 'https://www.doutula.com/article/list/?page=2';

axios.get(httpUrl).then((res) => {
    // console.log(res.data);
    // cheerio解析html文档, 规定使用cheerio加载html文档, 即可使用$对象(cherrio == jquery);
    let $ = cheerio.load(res.data);
    // 获取每一页中的a链接🔗模块;
    $('#home .col-sm-9 a.list-group-item').each((ind, ele) => {
        // 获取每一页中的a链接地址;
        let pageUrl = $(ele).attr('href');
        // 获取每一个a链接模块中的图片地址;
        // parseLink(pageUrl, '.pic-content .artile_des img', 'src');
    })
})

// 参数为(请求地址, 要爬取的元素选择器, 要爬取的元素选择器的属性);
async function parseLink(url, selectorArr, getAttr) {
    let res = await axios.get(url);
    let $ = cheerio.load(res.data);
    $(selectorArr).each((ind, ele) => {
        let imgUrl = $(ele).attr(getAttr);
        console.log(imgUrl);
    })
}








