// 模块:
    // 就是把公共功能单独抽离成一个文件作为一个模块;
    // 模块里面的变量 函数 类等默认是是有的; 如果要在外部访问模块中的数据(变量, 函数, 类);
    // 需要通过exprot 暴露模块中的数据(变量, 函数, 类);
    // 暴露后通过import 引入模块即可使用模块中暴露的数据(变量, 函数, 类);


// 现在转换后是一个ES6的代码,不能被浏览器识别, 用node执行, 不在浏览器执行;
// 普通导入 as 关键字用来重命名;导入的变量,函数,类等;
// import {getData as get, save, dburl as url} from './modules/db';
// console.log(get());
// console.log(save());
// console.log(url);






// 默认导出方式导入;
// import db from './modules/db';
// console.log(db.getData());
// console.log(db.save());
// console.log(db.dburl);