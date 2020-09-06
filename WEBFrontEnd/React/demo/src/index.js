// index.js项目的入口文件(index命名固定);

// 引入核心模块;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Jsxsyntax from './JSXSyntax';
import ReactDOMAndNativeDOM from './ReactDOM&NativeDOM';


let docDom = document.createElement('div', {title: 'docDOM'}, 'docDOM');
let reactDom = React.createElement('div', {title: 'reactDOM'}, 'reactDOM');


// 把对应的内容渲染到root标签上;
ReactDOM.render(
    // <Jsxsyntax></Jsxsyntax>,
    // <ReactDOMAndNativeDOM></ReactDOMAndNativeDOM>,
    // docDom,
    reactDom,
    document.querySelector('#root')
);




