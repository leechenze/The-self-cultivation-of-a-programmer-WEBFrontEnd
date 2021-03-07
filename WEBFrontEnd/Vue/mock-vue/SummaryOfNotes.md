## 博学之, 审问之, 慎思之, 明辨之, 笃行之;
## 壹、贰、叁、肆、伍、陆、柒、捌、玖、拾;



### 创建Vue

    vue create mock-vue;
    
### 安装依赖
安装axios发送ajax;

    cnpm install axios --save

使用mock.js生成随机数据;

    cnpm install mockjs --save-dev

使用 JSON5 解决json文件无法添加注释的问题;

    cnpm install json5 --save-dev

### 目录结构

    mock-vue
        mock    自行新建的目录, 操作mock相关的一系列代码;
            testJSON5.js
                const fs = require("fs");
                const path = require("path");
                const JSON5 = require("json5");

                let json = fs.readFileSync(path.join(__dirname, './userInfo.json5'), 'utf-8');
                console.info(json);
                json = JSON5.parse(json);
                console.info(json);
            testMock.js
                const Mock = require('mockjs');
                let id = Mock.mock('@id');
                let obj = Mock.mock({
                    id: '@id',
                })
                let actualObj = Mock.mock({
                    id: "@id",      // 随机生成id
                    username: "@cname()",   // 随机生成name
                    date: "@date()",    // 随机生成时间日期
                    avatar: "@image('200x200', 'red', '#fff', 'avatar')",   // 随机生成图片; 参数(size, backgroundColor, fontColor, content);
                    description: "@paragraph()", // 生成描述
                    ip: "@ip()", // 生成ip
                    email: "@email()",   // 生成邮箱地址
                })
                console.log(actualObj)
            userInfo.json5
                {
                    id: "@id", // 随机生成id
                    username: "@cname()", // 随机生成name
                    date: "@date()", // 随机生成时间日期
                    avatar: "@image('200x200', 'red', '#fff', 'avatar')", // 随机生成图片; 参数(size, backgroundColor, fontColor, content);
                    description: "@paragraph()", // 生成描述
                    ip: "@ip()", // 生成ip
                    email: "@email()", // 生成邮箱地址
                }
            index.js    页面中实现mock应用的js, 也是vue.config.js配置中指向的配置文件;
                const fs = require("fs");
                const path = require("path");
                const Mock = require("mockjs");
                const JSON5 = require("json5");

                // 读取JOSN文件;
                function getJsonFile(filePath) {
                    // 读取指定的JSON文件;
                    var json = fs.readFileSync(path.join(__dirname, 'filePath'), "utf-8");
                    // 解析并返回
                    return JSON5.parse(json);
                }

                // 函数导出;
                module.exports = function (app) {
                    // 监听http请求;
                    app.get("./user/userinfo", (rep, res) => {
                        // 每次响应请求时读取 mock data的json文件
                        let json = getJsonFile("./userInfo.json5");
                        res.json(Mock.mock(json));
                    })
                }

        node_modules
        public
        src
        .gitignore
        babel.config.js
        package.json
        README.md
        SummaryOfNotes.md
        vue.config.js     自行创建, 配置webpack 进行服务请求的拦截, 不再请求服务器,而是请求本地的mock服务;
            module.exports = {
                devServer: {
                    before: require('./mock/index.js'),
                }
            }
        .env.development    VUE配置项目中环境变量, 来控制是否使用MOCK服务, process.env.MOCK即可访问全局变量;

