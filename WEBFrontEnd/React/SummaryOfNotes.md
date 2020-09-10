## 博学之, 审问之, 慎思之, 明辨之, 笃行之;
## 壹、贰、叁、肆、伍、陆、柒、捌、玖、拾;

---   

## 脚手架安装和创建项目

### 全局安装;
```
    cnpm install create-react-app -g
```

### 创建项目;



```
    cnpm install create-react-app -g
```

### Hello React

    index.js项目的入口文件(index命名固定);

    react 和 react-dom 核心模块的引入:
        import React from 'react'
        import ReactDOM from 'react-dom'
    
    ReactDOM.render(param1,param2);
    param1: 需要渲染的内容;
    param2: 渲染到那个容器(HTML元素)中;

    将对应的内容渲染到id为root的元素中;

        ReactDOM.render(
            <div>Hello React</div>,
            document.querySelector('#root')
        );
    
    需要注意的是param1来作为根标签使用, 不能出现第二个;
    
    
### 书写React组件

    ReactDOM.render(
        <div>
            <div>Hello</div>
            <div>World</div>
            <div>Hello</div>
            <div>React</div>
            <div>Hello</div>
            <div>Angular</div>
            <div>Hello</div>
            <div>Vue</div>
        </div>,
        document.querySelector('#root')
    );
    
    index.js 入口文件是项目的 "清单文件" 通常书写需简洁, 为了对项目的结构一目了然;
    所以render的第一个参数(需要渲染的内容), 需要将它提取出来作为一个单独的组件, render函数直接渲染这个外部引入的组件;
    
    

    创建App.js, 作为入口文件中渲染的组件;

        组件中的组件声明都是ES6的语法, 不再次叙述;

            定义一个组件;
            class App extends React.Component {
                渲染函数
                render() {
                    如果返回值只是一句或一个标签时, 可以省略return (); 
                    通常组件中是有很多内容, 所以通常需要在render函数中 给个 return (), 类如下写法;
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


            导出组件;
            export default App;


    index.js

        在index.js文件中引入App.js组件;
            import App from './App'

        将App组件渲染到#root根组件中, <App></App> 或 <App /> 写法都可以, 这是一个组件作为第一个参数, 在render函数中的固定写法;
        组件通常都是大写开头, render函数的第一个参数就是通过检测开头是否大小写开完成对组件还是div标签的检测;
        
            ReactDOM.render(
                <App></App>,
                document.querySelector('#root')
            );
        
        
    



### JSX语法糖
    
    实际上这个组件中的这个写法(html和js)揉在一起写这种写法就是JSX, JSX就是一个看起来很像是XML的JavaScript语法扩展, 
    React中的 JSX 会被babel编译为 JavaScript;

    JSX特点:
        执行更快, 因为他在编译为JavaScript后 进行了代码优化;
        具有类型安全, 在编译过程中便能发现错误;
        使用JSX编写模版更加简单, 方便, 快速;

    

    新建JSXSyntax.js文件;
    
        import React, {Component} from 'react';
        注意, 一般除了js文件在引入时可以忽略后缀, 样式文件不要忽略后缀;
        import './assets/css/JSXSyntax.css';
        import QqImage1 from './assets/images/QQImage1.png';

        export default class Jsxsyntax extends Component {
            render () {
                return (
                    <div id="jsxsyntax">
                        
                        {/* 注释内容 */}
                        <p style={{color: 'red', fontSize: '30px'}}>Jsx Syntax attention matters</p>
                        <p className="p">Jsx Syntax attention matters</p>
                        <img src={QqImage1} alt=""/>
                        <br/><br/><br/>
                        <label htmlFor="username">
                            用户名: <input type="text" id="username" />
                        </label>
                        
                    </div>
                )
            }
        }

        注意如果在JSX中写入行内样式时, 需要在外层加入一层{}, 表示{}中书写JavaScript代码, 而在内层再次传入一个对象{};
        样式代码写入到这个对象中, 需要注意样式的写法也不相同, {color: 'red', fontSize: '20px'},
        多个样式要用逗号隔开, 所有拥有连字符的属性需要改为驼峰书写(font-size ==> fontSize);
        
        在标签上声明类名改写为 className="类名";
        表单元素 label标签的 for属性, 改写为 htmlFor="Id";

        引入图片QqImage1, img的src写法 在外层加入{}表示在JSX中书写JavaScript代码;
        然后src={QqImage1} 即可, 而引入的 QqImage1 等同于一个变量;
        
        注释内容写法: {/* 注释内容 */};
        因为注释格式是js格式, html格式的注释会报错, 所以但凡是 js代码 千篇一律,只需加一个{}即可;
        
        

    Src下新建assets/css/JSXSyntax.css文件;
        .p{
            color: blue;
            font-size: 50px;
        }
    
    



### 虚拟DOM和原生DOM分析;

    虚拟DOM高效原因分析:
        虚拟DOM(就是所谓的JSX语法)本质就是一个JavaScript对象, 当数据和状态发生了变化, 会自动同步到虚拟DOM中, 然后再将仅变化的部分同步到DOM中(整个过程不需要重新渲染DOM树);
        并且原生DOM对象身上的属性, 拥有二百六十八个属性, 而虚拟DOM对象身上的属性仅仅只有7个, 所以这是促成其高效的很大原因;
    
    
    新建ReactDOM&NativeDOM组件
        import React from 'react';

        let docDom = document.createElement('div', {style:"color:blue"}, 'docDOM');
        let reactDom = React.createElement('div', {style:"color:red"}, 'reactDOM');

        let docDomLength = docDom.length || docDom.size || 0;
        let reactDomLength = reactDom.length || reactDom.size || 0;

        for(let key in docDom) {
            docDomLength++;
        }
        for(let key in reactDom) {
            reactDomLength++;
        }


        export default class ReactDomAndNativeDOM extends React.Component {
            render () {
                console.log(docDom);
                console.log(reactDom);
                return (
                    <div id="ReactDomAndDocDOM">
                        <p>
                            The reactDOM length is {reactDomLength}
                        </p>
                        <p>
                            The DocDOM length is {docDomLength}
                        </p>
                    </div>
                )
            }
        }
    
    index.js
        
        let docDom = document.createElement('div', {title: 'docDOM'}, 'docDOM');
        let reactDom = React.createElement('div', {title: 'reactDOM'}, 'reactDOM');

        ReactDOM.render(
            reactDom,
            document.querySelector('#root')
        );

        以上写法使用JSX语法等同于: 
        
        ReactDOM.render(
            <div title="reactDOM">reactDOM</div>,
            document.querySelector('#root')
        );

        所以JSX语法使得避免了很多虚拟DOM的操作, 方便简洁!
        注意render函数渲染的是虚拟DOM(ReactDOM), 原生DOM无法进行渲染, 并会报错;
        
    

        
    
    
        



### JSX中插入变量三元运算和数组

    新建Ternary&Var&Array.js

        循环遍历li时, 每一个li身上的属性key需要指定一个其索引(唯一值), 否则警告错误;

        import React,{Component} from 'react';

        let name = 'clinton',
            age = 20,
            list = [10, 20, 30, 40];
        export default class TernaryVarArray extends Component {
            render () {
                return (
                    <div id="ternaryvararray">
                        <p>姓名: {name}</p>
                        <p>年龄: {age}</p>
                        <p>是否大于十八岁: {age > 18 ? '是':'否'}</p>


                        <ul>
                            {
                                list.map((item, ind) => {
                                    return (
                                        <li key={ind}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        }
        




### 安装React扩展

    InstallReactExtensions.js

        import React, { Component } from 'react'

        export default class InstallReactExtensions extends Component {
            render() {
                return (
                    <div>
                        安装扩展 ES7 React/Redux/GraphQL/React-Native snippets
                        使用 rcc 快速生成生成组件代码;
                    </div>
                )
            }
        }


