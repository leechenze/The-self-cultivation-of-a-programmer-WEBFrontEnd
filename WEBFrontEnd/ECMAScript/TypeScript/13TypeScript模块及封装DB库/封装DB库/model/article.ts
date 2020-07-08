// 首先引入封装的数据库操作;
import db from '../modules/db'

// 在进行定义一个文章分类的类
// 定义一个文章分类articleCate的映射;
class ArticleCate {

    title:string | undefined;
    desc:string | undefined;
    status:number | undefined;

    constructor(params: {
        title:string | undefined;
        desc:string | undefined;
        status?:number | undefined;
    }) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}

var articlelModel = new db.MsSqlDB<ArticleCate>();

export {
    ArticleCate,
    articlelModel,
}
