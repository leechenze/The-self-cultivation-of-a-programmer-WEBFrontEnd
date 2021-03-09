let LcApp = require('./lcApp');
let app = new LcApp();

// 此处的更改相当与更改了static的目录名;
app.staticDir = '/statictext';

// 路由监听;
app.on('/', function (req, res) {
    res.setHeader("Content-Type", 'text/html; charset=utf-8');
    // res.end("<h1>首页</h1><img src='./static/QQImage2.jpg' />");
    res.end("<h1>首页</h1><img src='./statictext/QQImage2.jpg' />");
})
app.on('/gnxw', function (req, res) {
    res.setHeader("Content-Type", 'text/html; charset=utf-8');
    if(req.pathObj.base == 'index.html'){
        res.end('国内新闻首页');
    }else{
        res.end('国内新闻其他页');
    }
})
app.on('/ylxw', function (req, res) {
    res.setHeader("Content-Type", 'text/html; charset=utf-8');
    res.end('娱乐新闻');
})

// 静态服务器, 改在构造函数中进行封装;
// app.on('/static', function (req, res) {
    
// })

// 服务启动;
app.run(80, ()=>{
    console.info(`服务已启动: http://192.168.3.23:80`)
})