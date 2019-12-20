console.log('module2 模块加载了');
// 第一种写法
// export const a = 12;
// export const b = 20;
// export const c = 30;


// 第二种写法;
const a = 12;
const b = 10;
const c = 20;

export {
    a as aa,
    b as bb,
    c as cc,
}