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

        export default class Jsxsyntax extends Component {
            render () {
                return (
                    <div id="jsxsyntax">
                        
                        <p style={{color: 'red', fontSize: '20px'}}>Jsx Syntax attention matters</p>
                        
                    </div>
                )
            }
        }

        注意如果在JSX中写入行内样式时, 需要在外层加入一层{}, 表示{}中书写JavaScript代码, 而在内层再次传入一个{};
        样式代码写入到这个对象中, 需要注意样式的写法也不相同, {color: 'red', fontSize: '20px'},
        多个样式要用逗号隔开, 所有拥有连字符的属性需要改为驼峰书写(font-size ==> fontSize);

        
        
        
        
    