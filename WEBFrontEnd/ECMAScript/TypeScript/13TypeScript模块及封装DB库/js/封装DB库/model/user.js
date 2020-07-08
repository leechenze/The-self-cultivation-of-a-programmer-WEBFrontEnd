"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.User = void 0;
// 首先引入封装的数据库操作;
var db_1 = __importDefault(require("../modules/db"));
// 定义一个User类和数据表做映射;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var userModel = new db_1.default.MySqlDB();
exports.userModel = userModel;
