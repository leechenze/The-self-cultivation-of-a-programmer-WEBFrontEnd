"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义操作mysql数据库的类, 注意要实现泛型接口, 这个类也应该是个泛型类;
var MySqlDB = /** @class */ (function () {
    function MySqlDB() {
        console.log('数据库建立连接');
    }
    MySqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MySqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MySqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MySqlDB.prototype.get = function (id) {
        var list = [
            {
                title: 'xxx',
                desc: 'xxxx',
                id: 1,
            },
            {
                title: 'xxx',
                desc: 'xxxx',
                id: 2,
            },
            {
                title: 'xxx',
                desc: 'xxxx',
                id: 3,
            },
            {
                title: 'xxx',
                desc: 'xxxx',
                id: 4,
            }
        ];
        return list;
    };
    return MySqlDB;
}());
// 定义操作mssql数据库的类;
var MsSqlDB = /** @class */ (function () {
    function MsSqlDB() {
        console.log('数据库建立连接');
    }
    MsSqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MsSqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDB.prototype.get = function (id) {
        var list = [
            {
                title: 'xxx',
                desc: 'xxxx',
                id: 1,
            },
            {
                title: 'xxx',
                desc: 'xxxx',
                id: 2,
            },
            {
                title: 'xxx',
                desc: 'xxxx',
                id: 3,
            },
            {
                title: 'xxx',
                desc: 'xxxx',
                id: 4,
            }
        ];
        return list;
    };
    return MsSqlDB;
}());
exports.default = {
    MySqlDB: MySqlDB,
    MsSqlDB: MsSqlDB,
};
