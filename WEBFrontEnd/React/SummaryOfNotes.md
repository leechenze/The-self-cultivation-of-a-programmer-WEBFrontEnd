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
        
    

        
    
    
        



### JSX中插入变量三元运算和数组(TernaryVarArray)

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
        




### 安装React扩展(InstallReactExtensions)

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







### 事件使用(EventUsage)

    import React, { Component } from 'react'

    export default class EventUsage extends Component {

        constructor(props) {
            super(props)

            // 定义组件状态的数据;
            this.state = {
                num: 20,
            }

        }

        handleClick() {
            console.log('点击了按钮');
        }

        addNum() {

            this.setState({
                num: this.state.num + 1,
            })
        }

        redNum() {

            this.setState({
                num: this.state.num - 1,
            })
            
        }

        render() {
            return (
                <div id="eventusage">
                    <button onClick={this.handleClick}>button</button>
                    <p>{this.state.num}</p>
                    <button onClick={this.addNum.bind(this)}>addNum</button>
                    {/* 不实用bind绑定this时,亦可使用箭头函数矫正this; */}
                    <button onClick={() => this.redNum()}>redNum</button>
                </div>
            )
        }
    }












### 双向数据绑定(BidirectionalDataBing);


    import React, { Component } from 'react'

    export default class BidirectionalDataBing extends Component {
        constructor(props) {
            super(props);
            this.state = {
                val: 'initData',
            }
        }

        handleChange(e) {
            // 获取每次输入时的value
            console.log(e.target.value);
            this.setState({
                val: e.target.value
            })
        }
        
        render() {
            return (
                <div id="bidirectionaldatabing">
                    {/* 双向数据绑定需要绑定onchange事件, 否则会报警告 */}
                    <input type="text" value={this.state.val} onChange={this.handleChange.bind(this)}/>
                    {/* 亦可使用箭头函数, 但注意需要传递事件对象e, 不同于上面bing(this)的方式会隐式的传递事件对象e */}
                    <input type="text" value={this.state.val} onChange={(e) => this.handleChange(e)}/>
                    <p>{this.state.val}</p>
                </div>
            )
        }
    }









### 表格栏案例(TabColumnExample)

    import React, { Component } from 'react';
    import './assets/css/tab.css';
    export default class TabColumnExample extends Component {

        constructor(props) {
            super(props);
            this.state = {
                num: 2
            }
        }

        handleClick(curIndex) {
            // handleClick的curIndex既是在调用时传入的索引;
            this.setState({
                num: curIndex
            })
        }
        
        render() {
            return (
                <div className="tabcolumnexample">
                    <div className="tab_btns">
                        <input type="button" value="按钮1" className={this.state.num == 1 ? "active" : ''} onClick={this.handleClick.bind(this, 1)} />
                        <input type="button" value="按钮2" className={this.state.num == 2 ? "active" : ''} onClick={this.handleClick.bind(this, 2)} />
                        <input type="button" value="按钮3" className={this.state.num == 3 ? "active" : ''} onClick={this.handleClick.bind(this, 3)} />
                    </div>
                    <div className="tab_cons">
                        <div className={this.state.num == 1 ? "current" : ''} >按钮1对应的内容</div>
                        <div className={this.state.num == 2 ? "current" : ''} >按钮2对应的内容</div>
                        <div className={this.state.num == 3 ? "current" : ''} >按钮3对应的内容</div>
                    </div>
                </div>
            )
        }
    }













### props的使用(Props);

    在子组件中 this.props 既是 调用这个组件时身上的所有属性 (例如: this.props.title);
    在子组件中 this.props.children 既是 父组件下的子元素 (双标签父组件中的内容: <Header>parent assembly content</Header>);
    在子组件中static defaultProps 既是 声明的默认属性, 如果父组件身上未传入值时, 使用props的默认值;
    

    
    import React, { Component } from 'react'

    // 子组件
    class Header extends Component {

        static defaultProps = {
            bgc: 'brown',
            title: 'default title'
        }
        
        render() {
            return (
                <header style={{width: '100%', height: '60px', lineHeight: '60px', backgroundColor: this.props.bgc}}>
                    {this.props.title}
                    <span style={{width: '100px', display: 'inline-block'}}></span>
                    {this.props.children}
                </header>
            )
        }
    }





    // 父组件
    export default class Props extends Component {
        constructor(props) {
            super(props);

            this.state = {
                title: 'home page title',
            }
        }
        render() {
            return (
                <div id="props">
                    <Header title={this.state.title} bgc="#cff"/>
                    <Header title="about page title" bgc="pink"/>
                    <Header>parent assembly content</Header>
                </div>
            )
        }
    }












### React中Key的使用(KeyUsage)

    import React, { Component } from 'react'

    export default class KeyUsage extends Component {
        constructor(props) {
            super(props);

            this.state = {
                list: [
                    { id: 1, value: '第一个值' },
                    { id: 2, value: '第二个值' },
                    { id: 3, value: '第三个值' },
                ]
            }

        }

        handlerClick() {
            this.setState({
                list: [
                    { id: 4, value: '第四个值' },
                    { id: 1, value: '第一个值' },
                    { id: 2, value: '第二个值' },
                    { id: 3, value: '第三个值' },
                ]
            })
        }

        render() {
            return (
                <div id="keyusage">
                    <button onClick={this.handlerClick.bind(this)}>button</button>
                    <ul>
                        {
                            this.state.list.map((item, ind) => {
                                return (
                                    // key值作用: 在项目中一般指定的是当前的id值, 有利于提高更新效率, 减少不必要的DOM操作;
                                    // <li key={ind}>
                                    <li key={item.id}>
                                        {item.value}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
    }















### 子组件中验证props属性值类型(VerifyPropsValueType);

    注意子组件中的 static propTypes 是一个固定的静态属性, 用来验证或规定props的值类型;

    import React, { Component } from 'react'
    // 引入prop-types(props类型验证);
    import PropTypes from 'prop-types'

    class Header extends Component {
        
        static propTypes = {
            // 要验证的属性名;
            // title: PropTypes.string,
            title: PropTypes.number,
        }
        
        render() {
            return (
                <div>
                    {this.props.title}
                </div>
            )
        }
    }

    export default class VerifyPropsValueType extends Component {
        render() {
            return (
                <div id="verifypropsvaluetype">
                    <Header title={123}></Header>
                </div>
            )
        }
    }














### context ==> props Multistage transmit (context 解决父子组件跨级多级的数据传输)(ContextUsage);
    
    React 组件之间的通信是基于props的数据传递, 数据需要一级一级从上往下传递, 如果组件级别过多传递就会非常麻烦, React中的 context 可以解决 组件的跨级值传递;
    

    import React, { Component } from 'react'
    import PropTypes from 'prop-types'


    class GrandChild extends Component {

        // 子组件中声明context中的属性的类型;
        static contextTypes = {
            title: PropTypes.string,
        }
        
        render() {
            return (
                <div>
                    {/* 传统的方式进行子组件传值 */}
                    {/* {this.props.title} */}


                    {this.context.title}
                </div>
            )
        }
    }

    class Child extends Component {
        render() {
            return (
                <div>
                    {/* 传统的方式进行子组件传值 */}
                    {/* <GrandChild title={this.props.title}></GrandChild> */}

                    <GrandChild></GrandChild>
                </div>
            )
        }
    }

    export default class ContextUsage extends Component {
        // 在父组件中规定属性类型;
        static childContextTypes = {
            title: PropTypes.string
        }
        
        // 父组件中规定通过context传递给子孙组件的值;
        getChildContext() {
            return {
                title: 'context transmit title'
            }
        }
        
        render() {
            return (
                <div id="contextusage">
                    {/* 传统的方式进行子组件传值 */}
                    {/* <Child title="home page content"></Child> */}

                    <Child></Child>
                </div>
            )
        }
    }

    















### 子组件传值给父组件(ChildValueToParent);
    // 子组件传值给父组件;
    react中子组件向父组件传值 是通过在父组件中声明好修改的方法后, 通过props将此方法传递给子组件来调用;
    以此方式来实现对于父组件中的值的操作;    

    import React, { Component } from 'react'

    class Child extends Component {
        constructor(props) {
            super(props);

        }
        numChildHandle() {
            // 点击按钮时调用父组件上通过属性传递过来的方法;
            this.props.numfatherHandle();
        }
        strChildHandle() {
            this.props.strFatherHandle('leechense');
        }
        render() {
            return (
                <div>
                    <button onClick={this.numChildHandle.bind(this)}>numBtn</button>
                    <button onClick={this.props.numfatherHandle.bind(this)}>numBtn</button>
                    {this.props.children}
                    <button onClick={this.strChildHandle.bind(this)}>numBtn</button>
                    <button onClick={this.props.strFatherHandle.bind(this, 'lineLeechense')}>numBtn</button>
                </div>
            )
        }
    }


    export default class ChildValueToParent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                num: 20,
                str: 'asdf',
            }
        }

        // 父组件中创建一份方法给子组件调用;
        numfatherHandle() {
            this.setState({
                num: this.state.num + 1,
            })
        }
        strFatherHandle(value) {
            this.setState({
                str: value,
            })
        }

        render() {
            return (
                <div id="childvaluetoparent">
                    <Child numfatherHandle={this.numfatherHandle.bind(this)}
                            strFatherHandle={this.strFatherHandle.bind(this)}>
                        <br/>
                        {this.state.num}
                        <br/>
                        {this.state.str}
                        <br/>
                    </Child>
                </div>
            )
        }
    }













### React组件声明周期;
    