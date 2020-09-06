// App组件内容

// 引入核心模块;
import React from 'react';

// 定义一个组件;
class App extends React.Component {
    // 渲染函数
    render() {
        return (
            <div id="app">
                <div>Hello</div>
                <div>World</div>
                <div>Hello</div>
                <div>React</div>
                <div>Hello</div>
                <div>Angular</div>
                <div>Hello</div>
                <div>Vue</div>
            </div>
        )
    }
}


// 导出组件;
export default App;