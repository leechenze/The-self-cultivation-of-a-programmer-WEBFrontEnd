// 定义函数接口
    // interface Config {
    //     (value1:string, value2:string):string;
    // }

    // var setData:Config = function (value1:string, value2:string):string {
    //     return value1 + ' ' + value2;
    // }

    // console.log(setData('name', 'hilarie'));








// 定义泛型函数接口
    // interface Config {
    //     <T>(value1:T):T;
    // }
    // var getData:Config = function <T>(value1:T):T {
    //     return value1;
    // }

    // console.log(getData<string>('asdf'));
    // console.log(getData<number>(123));
    // console.log(getData<any[]>(['asdf',123,true,null]));
    // console.log(getData<object>({name:'hilarie'}));






// 定义泛型函数接口方式二;
    // interface Config<T> {
    //     (value:T):T;
    // }

    // var myGetData:Config<string> = function <T>(value:T):T {
    //     return value;
    // }
    // console.log(myGetData('asdf'));

    // var myGetData1:Config<number> = function <T>(value:T):T {
    //     return value;
    // }
    // console.log(myGetData1(123));

    // // 或是

    // function getData<T>(value:T):T {
    //     return value;
    // }
    // var myGetData2:Config<number> = getData;
    // console.log(myGetData1(123));
    






    
    
    
// 泛型类接口:
    // 泛类: 可以帮助开发中避免代码及对不特定数据类型的支持和类型校验, 
    // 1.定一个类
    // 2.把类作为参数来约束数据传入的类型;
    
    // 定义一个user类和articlecate类, 作用于映射数据库的字段;
    // 定义一个mysqldb的类, 作用于操作数据库;
    // 然后把user类和articlecate类 作为参数传入到mysqldb中;


        // // 定义User类, 或可以理解为一个接口(映射), 用来约束mysqldb的add方法中传入的参数;
        // class User {

        //     username:string | undefined;
        //     password:string | undefined;
            
        // }


        // // 在进行定义一个文章分类的类
        // // 定义一个文章分类articleCate的映射;
        // class ArticleCate {

        //     title:string | undefined;
        //     desc:string | undefined;
        //     status:number | undefined;
            
        // }
        




        // // 定义操作user接口(映射)的mysqldb类;
        // // class MysqlDb {
        // //     add(user:User):boolean {
        // //         console.log(user);
        // //         return true;
        // //     }
        // // }
        
        // // var user = new User();
        // // user.username = 'hilarie';
        // // user.password = '123';
        // // var mysqldb = new MysqlDb();
        // // console.log(mysqldb.add(user));



        // // 定义操作articlecate接口(映射)的mysqldb的类
        // class MysqlDb {
        //     add(info:ArticleCate):boolean {
        //         console.log(info);
        //         return true;
        //     }
        // }
        
        // var article = new ArticleCate();
        // article.title = '范冰冰李晨泽热恋';
        // article.desc = '新闻';
        // article.status = 123;
        // var mysqldb = new MysqlDb();
        // console.log(mysqldb.add(article));


        




    // 以上步骤问题显而易见, 每每操作一个数据库表时, 都需要在mysqldb表中重新指定一下传入的数据类型(User或ArticleCate);
    // 多了太多冗余的代码, 诸如此类情况, 可以使用泛类接口来实现只封装一次mysqldb, 动态对类类型进行校验;

        // 定义User类(接口);
        class User {

            username:string | undefined;
            password:string | undefined;
            
        }


        // 在进行定义一个文章分类的类(接口);
        // 这个类, 在实例化的时候增加属性, 所以使用构造函数传入实现;
        class ArticleCate {

            title:string | undefined;
            desc:string | undefined;
            status:number | undefined;
            
            // 定义一个默认参数params对象 为原始的一些参数;
            constructor(params: {
                title:string | undefined,
                desc:string | undefined,
                status?:number | undefined,
            }) {
                this.title = params.title;
                this.desc = params.desc;
                this.status = params.status;
            }
            
        }
    


        // 封装myaqldb类;
        class MysqlDb<T> {
            add(msg:T):boolean {
                console.log(msg);
                return true;
            }
        }
        
        // 实例化用户类;
        var user = new User();
        user.username = 'hilarie';
        user.password = '123';
        var mysqldbuser = new MysqlDb<User>();
        console.log(mysqldbuser.add(user))

        
        // 实例化文章类;
        var article = new ArticleCate({
            title: 'trump 赢得连任',
            desc: 'trump 击败 hilarie 赢得 连任'
        })
        
        var mysqldbarticle = new MysqlDb<ArticleCate>();
        console.log(mysqldbarticle.add(article))
        


        