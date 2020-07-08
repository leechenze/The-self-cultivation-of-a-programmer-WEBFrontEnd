

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



export default {
    MySqlDB,
    MsSqlDB,    
}