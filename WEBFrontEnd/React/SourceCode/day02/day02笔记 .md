## 一、子组件中限制传进来的props属性的数据类型 

子组件中可以限制传进来的props属性值的数据类型，需要先安装prop-types模块

```
npm install --save prop-types

或者

yarn add prop-types (如果没有安装yarn的话，先安装npm install -g yarn)
```

实现步骤：

1、先导入import PropTypes from 'prop-types'

2、在子组件中定义静态属性propTypes：

​    static propTypes = {

​        //props属性名：PropTypes.类型

​        title: PropTypes.类型

​    }

```jsx
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 子组件
class Header extends Component {

    static propTypes = {
        title: PropTypes.string
    }
    render() {
        return (
            <div style={{height:40, backgroundColor:'blue', textAlign:"center", color: "#fff"}}>
                {this.props.title}
            </div>
        )
    }
}


// 父组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Header title="首页" />
            </div>
        )
    }
}
```



## 二、使用context进行props属性值的多级传递  

React 组件之间的通信是基于 props 的数据传递，数据需要一级一级从上到下传递。如果组件级别过多传递就会过于麻烦。React中Context配置可以解决组件跨级值传递。

```
实现步骤：
     1. 在父组件中，声明数据类型和值
            1.1 声明上下文数据类型
                static childContextTypes = {
                    数据名： 数据类型
                }
            1.2 向上下文控件中存值
                getChildContext(){
                    return {
                    	数据：值
                    }
                }

    2. 在“无论哪一级别”子组件中，只需声明需要的全局上下文数据，就可自动注入子组件的context属性中
        static contextTypes = {
             数据名： 数据类型
        }

        在子组件中使用：
            {this.context.con}
```



```jsx
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChildChild extends Component {

    static contextTypes = {
        con: PropTypes.string
    }
    render() {
        return (
            <div>
                子组件中的子组件————{this.context.con}
            </div>
        )
    }
}

// 子组件
class Child extends Component {
    render() {
        return (
            <div>
                <ChildChild/>
            </div>
        )
    }
}


// 父组件
export default class App extends Component {

    static childContextTypes = {
        con: PropTypes.string
    }

    getChildContext(){
        return {
            con: "爷爷组件"
        }
    }

    render() {
        return (
            <div>
                <Child/>
            </div>
        )
    }
}
```



## 三、React生命周期

生命周期：就是指一个对象的生老病死。 React的生命周期指从组件被创建到销毁的过程。掌握了组件的生命周期，就可以在适当的时候去做一些事情。

React生命周期可以分成三个阶段：

1、实例化(挂载阶段)：对象创建到完全渲染

2、存在期(更新期)：组件状态的改变

3、销毁/清除期：组件使用完毕后，或者不需要存在与页面中，那么将组件移除，执行销毁。

![00](.\assets_d02\00.png)

#### 3.1、实例化/挂载阶段

constructor()

componentWillMount()

render()

componentDidMount()

```jsx
export default class App3 extends Component {
    // 生命周期第一个阶段： 挂载/初始化阶段
    constructor(props){
        console.log("1.1 constructor: 构造初始化")
        // 调用父类构造方法
        super(props)

        // 初始化状态数据
        this.state = {

        }
        // 事件函数this的绑定
        this.handleClick = this.handleClick.bind(this)

    }

    UNSAFE_componentWillMount(){
        console.log("1.2 componentWillMount")
        //做一些准备性的工作，比如提示正在加载
    }

    componentDidMount() {
        console.log("1.4 componentDidMount")
        //异步加载数据
    }
    

    handleClick(){
        alert("点击了p标签")
    }

    render() {
        console.log("1.3 render")
        return (
            <div>
                <p onClick={this.handleClick}>这是一个展示生命周期的组件</p>
                <p onClick={this.handleClick}>这是一个展示生命周期的组件</p>
                <p onClick={this.handleClick}>这是一个展示生命周期的组件</p>
            </div>
        )
    }
}
```



#### 3.2、存在期/更新期

存在期:且件已经渲染好并且用户可以与它进行交互。通常是通过一次鼠标点击、手指点按者键盘事件来触发一个事件处理器。随着用户改变了组件或者整个应用的state，便会有新的state流入组件树，并且我们将会获得操控它的机会。

componentWillReceiveProps()

shouldComponentUpdate()

componentWillUpdate()

render()

componentDidUpdate()



在上面的组建中继续书写生命周期函数：

```jsx
	render() {
        console.log("1.3/2.4 render")
        return (
            <div>
                <p onClick={this.handleClick}>这是一个展示生命周期的组件</p>
                <p onClick={this.handleClick}>这是一个展示生命周期的组件</p>
                <p onClick={this.handleClick}>这是一个展示生命周期的组件{this.state.num}</p>
            </div>
        )
    }

	handleClick(){
        this.setState({
            num:22
        })
    }
	
    // 生命周期第二个阶段  存在期/更新期
    componentWillReceiveProps(){
        console.log("2.1 componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("2.2 shouldComponentUpdate 可以判断修改前后的值是不是一样，不一样才去执行render。减少不必要的render，优化更新性能")
        console.log("旧的值：", this.state.num)
        console.log("新的值：", nextState.num)

        // return true   则执行render
        // return false   则不执行render
        //这里返回值是布尔值，但不应该写死，
        //而是判断新旧两个值是不是不相等，不相等就要执行render(就要返回true)
        return this.state.num !== nextState.num

    }
    componentWillUpdate(nextProps, nextState) {
        console.log("2.3 componentWillUpdate 更新前的生命周期回调")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("2.5 componentDidUpdate 更新后的生命周期回调")
    }
```

以上执行的是组件内部state数据更新前后的生命周期函数，

其实，**对于组件的props属性值发生改变的时候，同样需要更新视图，执行render**

**componentWillReceiveProps() 这个方法是将要接收新的props值的时候执行**，而props属性值从父组件而来，所以需要定义父组件：

```jsx
class App3 extends Component {
    ...
    
	//生命周期第二个阶段  存在期/更新期
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("2.1 componentWillReceiveProps 这个方法props属性值更新的时候才会执行，更新state数据则不会执行这个方法")
        
        console.log(nextProps)
    }
	...
    shouldComponentUpdate(nextProps, nextState) {
        console.log("2.2 shouldComponentUpdate 可以判断修改前后的值是不是一样，不一样才去执行render。减少不必要的render，优化更新性能")

        // return true   则执行render
        // return false   则不执行render
        //这里返回值是布尔值，但不应该写死，
        //而是判断新旧两个值是不是不相等，不相等就要执行render(就要返回true)
        return (this.state.num !== nextState.num || this.props.fatherNum !== nextProps.fatherNum)  //不仅仅是state数据跟新时候需要执行render，props属性的值更新的时候也要执行render，所以要多加一个判断条件

    }
}

export default class Father extends Component{
    constructor(props){
        // 调用父类构造方法
        super(props)

        // 初始化状态数据
        this.state = {
            fatherNum:0
        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                fatherNum:10
            })
        }, 2000);
    }
    

    render(){

        return(
            <App3 fatherNum={this.state.fatherNum}/>
        )
    }
}
```



#### 3.3、销毁期

componentWillUnmount()  销毁组件前做一些回收的操作

```jsx
	componentDidMount() {
        console.log("1.4 componentDidMount")
        console.log("------------------------------------------")

        //异步加载数据
        document.addEventListener("click", this.closeMenu);
    }
    closeMenu(){
        console.log("click事件 closeMenu")
    }

	// 生命周期第三个阶段  卸载期/销毁期
    componentWillUnmount() {
        console.log("3.1 componentWillUnmount 做一些回收的操作")
        document.removeEventListener("click", this.closeMenu);
    }
```



index.js中3秒后重新渲染页面：

```jsx
setTimeout(() => {
    ReactDOM.render(
        <div>hello world</div>
        , document.getElementById('root'));
}, 3000);
```



#### 3.4、生命周期小结

React组件的生命周期
	3大阶段10个方法
        	1、初始化期（执行1次）
        	2、存在期  （执行N次）
        	3、销毁期  （执行1次）

小结：
	componentDidMount ：  发送ajax异步请求

​	shouldComponentUpdate ： 判断props或者state是否改变，目的：优化更新性能



## 四、不受控组件和受控组件

#### 4.1、不受控组件

​	组件中表单元素没有写value值，与state数据无关，不受组件管理。(不推荐)

```jsx
//不受控组件
import React, { Component } from 'react'

export default class App4 extends Component {

        
    handleClick(){
        console.log(this.refs.username.value)
        console.log(this.refs.password.value)
    }
    render() {
        return (
            <div>
                {/* 这种组件和组件本身state数据没有关系，所以不受组件管理，称为不受控组件(无约束组件)*/}
                {/* 这种写法的每个表单元素的验证在登录按钮的点击事件完成，用户体验很差 */}
                用户名：<input type="text" ref="username"/> <br/> <br/>
                密&emsp;码：<input type="text" ref="password"/><br/> <br/>
                <button onClick={this.handleClick.bind(this)}>登录</button>
            </div>
        )
    }
}

```

#### 4.2、受控组件

​	组件中表单元素的value值受组件的state数据控制，并且该表单元素有onChange事件，我们可以在事件中对该表单做实时验证，验证值是否合法然后做相应的操作(推荐)

```jsx
//受控组件
import React, { Component } from 'react'

export default class App4 extends Component {

    constructor(props){
        // 调用父类构造方法
        super(props)

        // 初始化状态数据
        this.state = {
            value:"admin"
        }
        // 事件函数this的绑定
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e){
        console.log(e.target.value)
        //可以在这个方法内部做一些实时验证，验证值是否合法做响应的操作
        this.setState({
            value:e.target.value
        })
    }
    render() {
        return (
            <div>
               
                用户名：<input type="text" value={this.state.value} onChange={this.handleChange}/> <br/> <br/>
                密&emsp;码：<input type="text" /><br/> <br/>
                <button>登录</button>
            </div>
        )
    }
}

```

#### 4.3、小结

React中的表单组件，分为2类：
        1. 不受控组件（和状态无关）
            	1.1 在input标签组件中，使用ref属性，来代表组件标识
            	1.2 组件渲染后，会自动把有ref属性的dom对象，挂到this.refs上
            	this.refs = {
                	ref名1 ： dom对象
                	ref名2 ： dom对象
            	}
           	1.3 在需要的场景（一般指回调），使用this.refs来获取需要的对象，然后再做dom操作

​	2、 受控组件（和状态紧密相关）
        	2.1 初始化状态
        	2.2 在input标签的value属性上，绑定状态（输入框的默认值和状态有关）
        	2.3 在input标签上维护onChange属性，触发时即时修改状态
        	2.4 自动：当状态修改，立即触发声明周期的render方法，显示最先的状态值

使用：
    如果对值的控制度不高，直接不受控组件
    如果要严格把控值的操作，受控可以做表单验证等严格的逻辑(推荐)



## 五、路由原理

SPA： Single Page Application

例如：<https://music.163.com/#/> 

现实生活中的路由：用来管理网络和计算机之间的关系

程序中的路由：用来管理**url地址**和**视图**之间的关系

路由原理：

​	1、准备视图(html)

​	2、准备路由的路线(可以是一个对象，键名是路线名称和值是视图地址)

​	3、通过hash地址的路线，获取“视图地址”

​	4、在指定标签中，加载需要的视图页面



代码演示：

![01](.\assets_d02\01.png)

router.html

```html
	<!-- 1、定义视图，(点击)改变哈希地址 -->
    <ul>
        <li><a href="#/index">首页</a></li>  
        <li><a href="#/list">列表页</a></li>
        <!-- 注意：href填的是hash地址，这里的 #/ 不要去掉 ，为的是不改变域名(地址栏中#前面的为域名)-->
    </ul>
    <div id="routerView"></div>

    <script>
        // 2、定义路由
        let louter = {
            //路由名称     视图页面
            "#/index": "./index.html",
            "#/list": "./list.html"
        }
        // 通过 louter[键名] 来获取值
        console.log(louter["#/index"])
    
        //3、检测哈希地址的改变(事件监听)
        window.addEventListener('hashchange',()=>{
            console.log("location.hash为: ", location.hash)   //location.hash可以获取哈希地址
            // 可以看出location.hash就是我们的键，我们可以通过 louter[键名] 来获取值，即获取视图页面

            let url = louter[location.hash]
            // console.log(url)
            // 加载对应视图
            // 在<div id="routerView"></div>中load加载需要的视图页面
            $("#routerView").load(url)

        })
        

    </script>
```

记得在head中添加jq

```html
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
```



## 六、react路由搭建

#### 6.1、安装react路由

yarn add react-router@3.2.0

#### 6.2、在路由配置模块中，引入路由

```jsx
import {
    Router,
    Route,
    hashHistory
} from 'react-router';
```

#### 6.3、配置路由器

```jsx
const router= <Router history={hashHistory}>  {/*路由器*/}
      	<Route> {/*路线*/}
     		<Route path="" component={}/>
		</Route>
      
      </Router>
```

其中，Router是路由器，路由器包含了所有路线；Route是路线，路线记录了路线名称和组件的对应关系

#### 6.4、引入相关组件

引入路线中需要用到的组件

```js
import Index from './Index'
import List from './List'
```

Index.js首页模块:

```jsx
import React, { Component } from 'react'

export default class Index extends Component {
  constructor(props){
    super(props)

    console.log('Index初始化 ！！')
  }
  render() {
    return (
      <h1>
        欢迎进入首页
      </h1>
    )
  }
}

```

List.js列表页模块：

```jsx
import React, { Component } from 'react'

export default class List extends Component {
  constructor(props){
    super(props)

    console.log('List初始化 ！！')
  }
  render() {
    return (
      <h1>
        列表页
      </h1>
    )
  }
}
```



#### 6.5、渲染路由

```js
ReactDom.render(
    router,
    document.querySelector('#root')
)
```

#### 6.6、完整代码示例

App.js中

```jsx
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//1、安装路由

//yarn add react-router@3.2.0

//2、引入路由
import {
    Router,
    Route,
    hashHistory
} from 'react-router';

//4、引入react路由中需要用到的组件
import Index from './Index'
import List from './List'




export default class App extends Component {
    render() {
        return (
            <ul>
                <li><a href="#/index">去往首页</a></li>
                <li><a href="#/list">去往列表页</a></li>
            </ul>
        )
    }
}

//3、配置react路由
const router1 = <Router history={hashHistory}>
        <Route path='/'  component={App}  />
        <Route path='/index'  component={Index}  />
        <Route path='/list'  component={List}  />
    </Router>


ReactDOM.render(
    //5、渲染路由
    router1
    , document.getElementById('root'));
```

index.js中

```js
// 路由原理
// import './day02/App';
```



## 七、嵌套路由

#### 7.1、步骤

步骤1、可以在Route中嵌套子路由

```jsx
<Route path='/app'  component={App}>
    <Route path='/app/index'  component={Index}  />
    <Route path='/app/list'  component={List}  />
</Route>
```

步骤2、在父路线的组件中，使用 {this.props.children}来获取子路线组件视图（必须当子组件激活时，才会去创建对应的子组件，并挂到this.props.children）

在视图组件中：

```jsx
		   <div>
                <h1>我是顶级组件</h1>
                <ul>
                    <li><a href="#/app/index">去往首页</a></li>
                    <li><a href="#/app/list">去往列表页</a></li>
                </ul>    
                <hr/>
                {this.props.children}
            </div>		
```

#### 7.2、优点

1、可以实现页面的局部刷新

2、按需加载子组件

3、子组件可以使用相对路径，继承父路线来作为前缀

即上面步骤1也可以写成 ：相对路径的写法

```jsx
<Route path='/app'  component={App}>
    <Route path='index'  component={Index}  />    {/* 相对路径的写法 */}
    <Route path='list'  component={List}  />    {/* 相对路径的写法 */}
</Route>
```

## 八、路由传参

#### 8.1、定义路由，在path上声明参数规则

```jsx
<Route path='detail/:newsId'  component={Detail}  >
```

#### 8.2、使用连接地址的时候，传参

```jsx
<a href="#/app/detail/99">
```

#### 8.3、在路线对应的视图组件中，使用this.props获取

```js
this.props.routeParams.newsId
```

在Detail.js中：

```jsx
import React, { Component } from 'react'

export default class Detail extends Component {
  constructor(props){
    super(props)

    console.log('Detail初始化 ！！')
  }
  render() {
    return (
      <h1>
        详情页
        {
          this.props.routeParams.newsId
        }
      </h1>
    )
  }
}
```



## 九、其他路由组件

IndexRoute、IndexRedirect和Link组件

1、导入

```js
import {
    Router,
    Route,
    hashHistory,
    IndexRoute,
    IndexRedirect,
    Link
} from 'react-router';
```

2、IndexRoute 组件的使用：

```jsx
// <IndexRoute component = {Index}/>组件，当访问#/app 时候，在{this.props.children}默认展示Index页面
//（没有使用IndexRoute组件的情况下，{this.props.children}不展示任何页面）
const router4 = (
    <Router history={hashHistory}>
        <Route path='/app'  component={App}>
            <IndexRoute component = {Index}/>
            <Route path="index" component={Index}/>
            <Route path='list'  component={List}  />
            <Route path='detail/:newsId'  component={Detail}  />
        </Route>
        
        
    </Router>
    )
```

3、IndexRedirect 组件的使用：

```jsx
// <IndexRedirect to="index"/>重定向组件，当访问 #/app 时候，直接重定向到#/app/index
const router5 = (
    <Router history={hashHistory}>
        <Route path='/app'  component={App}>
            <IndexRedirect to="index"/>
            <Route path='index'  component={Index}  />
            <Route path='list'  component={List}  />
            <Route path='detail/:newsId'  component={Detail}  />
        </Route>
        
        
    </Router>
    )
```

4、Link 组件的使用：

```jsx
			   <ul>
                    {/* to属性的值是连接地址，不需要加# ,本质是a标签*/}
                    <li><Link to="/app/index">去往首页</Link></li>
                    <li><Link to="/app/list">去往列表页</Link></li>
                    <li><Link to="/app/detail/99">去往详情页</Link></li>
                </ul> 
```





