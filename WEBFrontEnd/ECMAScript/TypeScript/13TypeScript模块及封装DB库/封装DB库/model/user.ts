// 首先引入封装的数据库操作;
import db from '../modules/db'

// 定义一个User类和数据表做映射;
class User{
    username:string | undefined;
    password:string | undefined;
}

var userModel = new db.MySqlDB<User>();

export {
    User,
    userModel,
}




