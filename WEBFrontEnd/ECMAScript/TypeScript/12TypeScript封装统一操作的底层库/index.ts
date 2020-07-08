// 功能定义一个操作数据库的库, 支持Mysql, Mssql, MongoDB;
// 要求: Mysql, Mssql, MongoDB功能相同, 具有add, update, delete get方法; 约束统一的规范,以及代码的重用;
// 解决方案: 需要约束所以需要定义接口, 需要代码重用所以需要泛型;



// 定义接口规范;
    interface DBI<T>{
        add(info:T):boolean;
        update(info:T, id:number):boolean;
        delete(id:number):boolean;
        get(id:number):any[];
    }

// 定义操作mysql数据库的类, 注意要实现泛型接口, 这个类也应该是个泛型类;

    class MySqlDB<T> implements DBI<T> {
        constructor() {
            console.log('数据库建立连接');
        }
        add(info: T): boolean {
            console.log(info);
            return true;
        }
        update(info: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            var list = [
                {
                    title: 'xxx',
                    desc: 'xxxx',
                    id:1,
                },
                {
                    title: 'xxx',
                    desc: 'xxxx',
                    id:2,
                },
                {
                    title: 'xxx',
                    desc: 'xxxx',
                    id:3,
                },
                {
                    title: 'xxx',
                    desc: 'xxxx',
                    id:4,
                }
            ]
            return list;
        }
    }


// 定义操作mssql数据库的类;
    
    class MsSqlDB<T> implements DBI<T> {
        constructor() {
            console.log('数据库建立连接');
        }
        add(info: T): boolean {
            console.log(info);
            return true;
        }
        update(info: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            var list = [
                {
                    title: 'xxx',
                    desc: 'xxxx',
                    id:1,
                },
                {
                    title: 'xxx',
                    desc: 'xxxx',
                    id:2,
                },
                {
                    title: 'xxx',
                    desc: 'xxxx',
                    id:3,
                },
                {
                    title: 'xxx',
                    desc: 'xxxx',
                    id:4,
                }
            ]
            return list;
        }
    }




// 定义一个User类和数据表做映射;
    class User{
        username:string | undefined;
        password:string | undefined;
    }
    var user = new User();
    user.username = 'hilarie';
    user.password = '123';
    
    var mysql = new MySqlDB<User>();
    mysql.add(user);
    var mssql = new MsSqlDB<User>();
    mssql.add(user);
    // 获取list表, ID是4的数据;
    console.log(mssql.get(4));