// index.js项目的入口文件(index命名固定);

// 引入核心模块;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Jsxsyntax from './JSXSyntax';
import ReactDOMAndNativeDOM from './ReactDOM&NativeDOM';
import TernaryVarArray from './Ternary&Var&Array';
import EventUsage from './EventUsage';
import BidirectionalDataBing from './BidirectionalDataBing';
import TabColumnExample from './TabColumnExample';
import Props from './Props';
import KeyUsage from './KeyUsage';
import VerifyPropsValueType from './VerifyPropsValueType';
import ContextUsage from './ContextUsage';
import ChildValueToParent from './ChildValueToParent';
import ComponentLifecycle from './ComponentLifecycle';
import ControlledAndUncontrolled from './ControlledAndUncontrolled'


let docDom = document.createElement('div', {title: 'docDOM'}, 'docDOM');
let reactDom = React.createElement('div', {title: 'reactDOM'}, 'reactDOM');


// 把对应的内容渲染到root标签上;
ReactDOM.render(
    // <Jsxsyntax></Jsxsyntax>,
    // <ReactDOMAndNativeDOM></ReactDOMAndNativeDOM>,
    // docDom,
    // reactDom,
    // <TernaryVarArray></TernaryVarArray>,
    // <EventUsage></EventUsage>,
    // <BidirectionalDataBing></BidirectionalDataBing>,
    // <TabColumnExample></TabColumnExample>,
    // <Props></Props>,
    // <KeyUsage></KeyUsage>,
    // <VerifyPropsValueType></VerifyPropsValueType>,
    // <ContextUsage></ContextUsage>,
    // <ChildValueToParent></ChildValueToParent>,
    // <ComponentLifecycle></ComponentLifecycle>,
    <ControlledAndUncontrolled></ControlledAndUncontrolled>,
    document.querySelector('#root')
);



// 生命周期的章节;
// setTimeout(() => {
//     ReactDOM.render(
//         <div>Hello World</div>,
//         document.querySelector('#root')
//     )
// },3000);




