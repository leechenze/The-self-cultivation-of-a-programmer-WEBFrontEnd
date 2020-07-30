
// cheerio 是node的抓取页面模块, 为服务器特别定制的一个jQuery核心实现.适合各种web爬虫程序;
// cheerio 就是服务器端的jQuery, 用法也一摸一样, jquery有多好用, 在这里服务器的爬虫就有多好用~~~;
// 安装cheerio:    cnpm install cheerio;



// 获取HTML文档内容, 内容获取和jquery是一样的;
const cheerio = require('cheerio'),
    axios = require('axios'),
    fs = require('fs'),
    url = require('url'),
    path = require('path');




// 封装延迟函数为promise对象
function lcWait(milliSeconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('成功执行延迟函数, 延迟: ' + milliSeconds);
        },milliSeconds);
    })
}



spider();
// 爬取所有页面图片;
async function spider() {

    // 获取页面的长度(有几个页面);
    let httpUrl = 'https://www.doutula.com/article/list/?page=2';
    let res = await axios.get(httpUrl);
    let $ = cheerio.load(res.data);
    let PageSize = $('.pagination li.page-item').eq($('.pagination li').length - 2).find('a').text();

    for (let i = 1; i <= parseInt(PageSize); i++) {
        // 因为页数太多所以502错误, 这里先执行一条; 
        // if (i == 1) {
        //     getPageList(i);
        // }

        // 使用延迟函数获取所有数据;
        await lcWait(3000);
        getPageList(i);
    }
}


// 请求每一页的数据
async function getPageList(pageNum) {

    let httpUrl = 'https://www.doutula.com/article/list/?page=' + pageNum;

    axios.get(httpUrl).then((res) => {
        console.log(res.data);
        // cheerio解析html文档, 规定使用cheerio加载html文档, 即可使用$对象(cherrio == jquery);
        let $ = cheerio.load(res.data);
        // 获取每一页中的a链接🔗模块;
        $('#home .col-sm-9 a.list-group-item').each(async (ind, ele) => {
            // 获取每一页中的a链接地址;
            let pageALinkUrl = $(ele).attr('href');
            // 获取每一页中的a链接模块标题;
            let pageALinktitle = $(ele).find('.random_title').text();
            // 匹配所有无数次零个或n个为数字的字符;
            let reg = /(.*?)\d/igs;
            // reg匹配每一页中的a链接模块标题;
            pageALinktitle = reg.exec(pageALinktitle)[1];
            // 创建目录用来存储爬取到的图片;
            fs.mkdir('./images/' + pageALinktitle, (err) => {
                if (err) {
                    throw Error(err);
                } else {
                    console.log(`创建${pageALinktitle}目录成功`);
                }
            });
            // 使用延迟函数获取所有数据;
            await lcWait(50);
            // 获取每一个a链接模块中的图片地址;
            parseLink(pageALinkUrl, '.pic-content .artile_des img', 'src', pageALinktitle);
        })
    })
}



// 参数为(请求地址, 要爬取的元素选择器, 要爬取的元素选择器的属性);
async function parseLink(url, selectorArr, getAttr, writeDirName) {
    let res = await axios.get(url);
    let $ = cheerio.load(res.data);
    $(selectorArr).each((ind, ele) => {
        // 获取图片链接;
        let imgUrl = $(ele).attr(getAttr);
        // 获取图片扩展名
        let imgExtName = path.extname(imgUrl);
        // 创建写入文件流(路径写入的路径和扩展名);
        let ws = fs.createWriteStream(`./images/${writeDirName}/${writeDirName}-${ind}${imgExtName}`, { flag: 'a' });
        // { responseType: 'stream' } 这个参数规定以流的形式写入;
        axios.get(imgUrl, { responseType: 'stream' }).then(function (res) {
            res.data.pipe(ws);
            // 监听当写入完成时关闭;
            res.data.on('close', () => {
                // 关闭写入流;
                ws.close();
            })
        })
    })
}

