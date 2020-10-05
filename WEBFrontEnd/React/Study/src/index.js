// index.js项目的入口文件(index命名固定);

// 引入核心模块;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Jsxsyntax from './component/JSXSyntax';
import ReactDOMAndNativeDOM from './component/ReactDOM&NativeDOM';
import TernaryVarArray from './component/Ternary&Var&Array';
import EventUsage from './component/EventUsage';
import BidirectionalDataBing from './component/BidirectionalDataBing';
import TabColumnExample from './component/TabColumnExample';
import Props from './component/Props';
import KeyUsage from './component/KeyUsage';
import VerifyPropsValueType from './component/VerifyPropsValueType';
import ContextUsage from './component/ContextUsage';
import ChildValueToParent from './component/ChildValueToParent';
import ComponentLifecycle from './component/ComponentLifecycle';
import ControlledAndUncontrolled from './component/ControlledAndUncontrolled'
import ReactRouter from './reactRouter/ReactRouter'




let docDom = document.createElement('div', {title: 'docDOM'}, 'docDOM');
let reactDom = React.createElement('div', {title: 'reactDOM'}, 'reactDOM');


// 把对应的内容渲染到root标签上;
// ReactDOM.render(
//     // <Jsxsyntax></Jsxsyntax>,
//     // <ReactDOMAndNativeDOM></ReactDOMAndNativeDOM>,
//     // docDom,
//     // reactDom,
//     // <TernaryVarArray></TernaryVarArray>,
//     // <EventUsage></EventUsage>,
//     // <BidirectionalDataBing></BidirectionalDataBing>,
//     // <TabColumnExample></TabColumnExample>,
//     // <Props></Props>,
//     // <KeyUsage></KeyUsage>,
//     // <VerifyPropsValueType></VerifyPropsValueType>,
//     // <ContextUsage></ContextUsage>,
//     // <ChildValueToParent></ChildValueToParent>,
//     // <ComponentLifecycle></ComponentLifecycle>,
//     <ControlledAndUncontrolled></ControlledAndUncontrolled>,
//     document.querySelector('#root')
// );



// 生命周期的章节;
// setTimeout(() => {
//     ReactDOM.render(
//         <div>Hello World</div>,
//         document.querySelector('#root')
//     )
// },3000);




