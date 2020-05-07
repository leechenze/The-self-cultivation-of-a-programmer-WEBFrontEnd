// 默认暴露 可以暴露任何数据类型; 暴露什么数据就接收什么数据;
// export default () => {
//     console.log('默认暴露的箭头函数module3');
// }

// 默认暴露的模块只能出现暴露一次, 暴露两次会报错, 所以通常将一些数据放到对象中默认暴露出去;
export default {
    msg : '默认暴露',
    foo() {
        console.log(this.msg);
    }
}