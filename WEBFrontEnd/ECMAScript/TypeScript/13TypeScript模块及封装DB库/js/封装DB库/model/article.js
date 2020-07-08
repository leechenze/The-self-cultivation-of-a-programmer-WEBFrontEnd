"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlelModel = exports.ArticleCate = void 0;
// 首先引入封装的数据库操作;
var db_1 = __importDefault(require("../modules/db"));
// 在进行定义一个文章分类的类
// 定义一个文章分类articleCate的映射;
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
exports.ArticleCate = ArticleCate;
var articlelModel = new db_1.default.MsSqlDB();
exports.articlelModel = articlelModel;
