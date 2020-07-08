// 由于全程用node执行, 就不再留用html文件了;

// 模块化之后比较绕, 认真读代码之后还是比较好理解的; 看不明白可以看上一章节12中可以读取代码; 没有模块分离的封装;
// 封装后的结构目录;
    // index.ts
    // model
    //     db.ts
    // modules
    //     user.ts
    //     article.ts

// 引入User模块执行添加操作;
import {User, userModel} from './model/user'

var user = new User();
user.username = 'hilarie';
user.password = '123456';
userModel.add(user);



// 引入Article模块执行添加操作;
import {ArticleCate,articlelModel} from './model/article'
var article = new ArticleCate({
                            title:'李晨泽范冰冰热恋',
                            desc:'国际新闻',
                            status:123,
                        });
articlelModel.add(article);
