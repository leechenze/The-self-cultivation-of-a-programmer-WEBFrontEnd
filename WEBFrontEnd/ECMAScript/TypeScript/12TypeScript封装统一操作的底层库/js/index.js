"use strict";
// 功能定义一个操作数据库的库, 支持Mysql, Mssql, MongoDB;
// 要求: Mysql, Mssql, MongoDB功能相同, 具有add, update, delete get方法; 约束统一的规范,以及代码的重用;
// 解决方案: 需要约束所以需要定义接口, 需要代码重用所以需要泛型;
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
// 定义一个User类和数据表做映射;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user = new User();
user.username = 'hilarie';
user.password = '123';
var mysql = new MySqlDB();
mysql.add(user);
var mssql = new MsSqlDB();
mssql.add(user);
// 获取list表, ID是4的数据;
console.log(mssql.get(4));
