// 暴露模块 统一暴露;
function foo2() {
    console.log('foo() modules2')
}

function bar2() {
    console.log('bar() modules2')
}

// export {foo,bar};
export {foo2, bar2};