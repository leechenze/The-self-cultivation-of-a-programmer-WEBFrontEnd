const fs = require("fs");
const path = require("path");
const Mock = require("mockjs");
const JSON5 = require("json5");


// 读取JOSN文件;
function getJsonFile(filePath) {
    // 读取指定的JSON文件;
    var json = fs.readFileSync(path.join(__dirname, filePath), "utf-8");
    // 解析并返回
    return JSON5.parse(json);
}

// 函数导出;
module.exports = function (app) {
    if (process.env.MOCK == 'true') {
        // 监听http请求;
        app.get("/user/userinfo", (rep, res) => {
            // 每次响应请求时读取 mock data的json文件
            let json = getJsonFile("./userInfo.json5");
            res.json(Mock.mock(json));
        })
    }
}