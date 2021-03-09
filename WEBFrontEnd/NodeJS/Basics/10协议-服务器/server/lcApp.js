let http = require('http');
let path = require('path');
let url = require('url');
let fs = require('fs');

class LcApp {
    constructor() {
        this.server = http.createServer();
        this.reqEvent = {};
        // 声明静态目录的含义是为了可以在index.js中操作
        // new LcApp().staticDir = 'asd' 实现目录更改;
        this.staticDir = '/static';
        
        this.server.on('request', (request, response) => {
            let pathObj = path.parse(request.url);
            console.log(pathObj);
            if (pathObj.dir in this.reqEvent) {
                request.pathObj = pathObj;
                this.reqEvent[pathObj.dir](request, response);
                // 判断静态目录的访问;
            } else if (pathObj.dir == this.staticDir) {
                response.setHeader('Content-Type', this.getContentType(pathObj.ext));
                // 请求访问的是声明的 staticDir 目录, 这个目录名称自己定义;
                // 但实际的访问目录是 ./static/${pathObj.base};
                let rs = fs.createReadStream(`./static/${pathObj.base}`);
                rs.pipe(response);
            } else {
                response.setHeader("Content-Type", 'text/html; charset=utf-8');
                response.end('<h1>404! 页面丢失了!~~ </h1>')
            }
        })
    }
    on(url, handle) {
        this.reqEvent[url] = handle;
    }
    run(port, callback) {
        this.server.listen(port, callback);
    }
    getContentType(extName) {
        switch (extName) {
            case '.jpg':
                return "image/jpeg"
            case '.html':
                return "text/html charset=utf-8"
            case '.js':
                return "text/javascript; charset=utf-8"
            case '.json':
                return "text/json; charset=utf-8"
            case '.gif':
                return "image/gif"
            case '.css':
                return "text/css"
        }
    }
}


module.exports = LcApp;