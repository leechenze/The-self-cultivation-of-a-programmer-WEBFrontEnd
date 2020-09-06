## 一、路由传参

在上一天的案例中操作，(/src/router/02_react_router)

#### 1.1、定义路由，在path上声明参数规则

```jsx
<Route path='detail/:newsId'  component={Detail}  >
```

#### 1.2、使用连接地址的时候，传参

```jsx
<a href="#/app/detail/99">
```

#### 1.3、在路线对应的视图组件中，使用this.props获取

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



## 二、其他路由组件

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



## 三、项目技术点介绍及Node环境

《叩丁狼咨询移动端项目》前端技术点介绍：

使用react作为前端框架
使用create-react-app脚手架创建工程
使用react-router实现前端路由部署
使用redux，react-redux进行状态管理
使用Normalize.css进行初始规范化样式
直接使用less进行样式管理
使用阿里的蚂蚁金服移动端UI框架antd-mobile的各种组件
封装自己的react组件
使用第三方组件
进行前后端的联调
项目部署上线

node环境如下：

node -v (10.15.0)

npm -v (6.4.1)  

## 四、项目库环境——create-react-app脚手架安装

#### 4.1、安装官方脚手架（用来项目搭建）

cnpm install -g create-react-app

 

#### 4.2、在项目目录创建工程

create-react-app kdlzx

 

#### 4.3、进入安装目录

cd  kdlzx

 

#### 4.4、启动项目查看内容

yarn start



## 五、项目集成less

1、解包脚手架

​	yarn eject   或者  npm run eject

**解包之后,  先尝试启动项目**,  如果发现类似报错    Cannot find module '@babel/plugin-transform-react-jsx'

1. 删除项目下node_modules文件夹
2. yarn add start  （重新下载node_modules）
3. yarn start

2、安装less环境:

​	1）（**！！已经安装了yarn的就跳过这一步**）安装React团队提供yarn包管理工具

​		D:\react\kdlzx>**npm i yarn -g**

​	2） 安装less环境

​		D:\react\kdlzx>**yarn add less less-loader -D**

3、把less加载器配置到webpack配置文件中

在config文件夹中的webpack.config.js文件：

![1571092484656](.\assets_d03\1571092484656.png)

![1571094139428](.\assets_d03\1571094139428.png)

代码：

```
const lessModuleRegex = /\.less$/;
```

```
			// less加载器 
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  //暂不配置
                },
                'less-loader'
              ),
            },
```



## 六、准备项目目录结构

进入项目文件夹：

1、src目录下，只保留index.js文件，其他全部删除

2、src目录下，新建assets文件夹  (存放静态资源)，并在其中新建fonts/styles/images等目录

3、src目录下，新建components文件夹   (存放组件代码)

4、src目录下，新建pages文件夹  (存放页面代码)

5、在pages文件夹新建App.js文件

6、在App.js中 rcc 触发组件代码， 复制index.js中的ReactDOM.render(<App />, document.getElementById('root')); 到App.js的最后

7、在App.js中补充 import ReactDOM from 'react-dom' 

8、在index.js中，引入App：

```
//入口文件，就像一个清单一样

//引入顶级组件
import './pages/App'

//引入全局样式
```

9、启动项目 npm start/yarn start



## 七、测试less：

在src/assets/styles/ 目录下新建core.less，别写测试代码：

```less
@charset 'utf-8';

@color: #f00;

body{
    background: @color;
}
```



在src/index.js 中引入全局样式：

```jsx
import './assets/styles/core.less'
```

启动项目  npm start



## 八、登录页面准备

在src/pages下新建LoginPage.js 文件 (rcc 回车，然后引入外部样式，书写div容器内容):  

```jsx
// 1、引入核心模块
import React, { Component } from 'react'

// 2、引入外部样式
import '../assets/styles/loginPage.less'

// 3、声明并且导出组件类
export default class LoginPage extends Component {
    render() {
        return (
            <div className="login-page">
                login页面
            </div>
        )
    }
}
```

在src/assets/styles/目录下新建loginPage.less ，书写：

```less
@charset 'utf-8';

.login-page{
     
    color:#fff;
    background-color: #00439c;
}
```

在src/pages下的App.js中 (导入登录页，返回Login页面)：

```jsx
import LoginPage from './LoginPage'

		return (
            <LoginPage/>   
        )
```

看到效果：

![1571121305198](.\assets_d03\1571121305198.png)



## 九、重置样式、设置页面高度

项目中初始化样式采用 Normalize.css

<http://necolas.github.io/normalize.css/> 

终端中，项目目录下安装 Normalize.css：

D:\react\kdlzx>**yarn add normalize.css**

![1571121866825](.\assets_d03\1571121866825.png)

安装成功后，在src/pages下的index.js中:

```js
//重置样式
import 'normalize.css'
```



![1571121803912](.\assets_d03\1571121803912.png)



接下来设置页面高度：

在src/assets/styles/core.less中：

```less
@charset 'utf-8';

html,body,#root{ height: 100%;}
```

在src/assets/styles/loginPage中, 添加高度样式：

```less
@charset 'utf-8';

.login-page{
    height: 100%;
    color:#fff;
    background-color: #00439c;
}
```

设置后的页面：



![1571122383484](.\assets_d03\1571122383484.png)

## 十、logo图片的完成

LoginPage.js中：

```jsx
import Img from '../components/Img'

...

		  <div className="login-page">
                {/* 1、图片 */}
                <Img src="logo.png" />

                {/* 2、表单域 */}
                <form>

                </form>
            </div>
```

loginPage.less中：

```less
@charset "utf-8";

.login-page{
    /*外观*/
    height:100%;
    color: #fff;
    background-color: #00439c;
    /*布局*/
    overflow: hidden;

    .img-div{
        /*外观*/
        width: 145px;
        /*布局*/
        margin: 100px auto 0;

    }
}
```



## 十一、表单组件的编写

LoginPage.js中:

```jsx
import FormInput from '../components/FormInput'

				{/* 2、表单域 */}
                <form className="login-form">
                    {/* 用户名 */}
                    <FormInput/>
                    {/* 密码 */}
                    <FormInput/>
                    {/* 登录 */}
                    {/* 忘记密码 */}
                    {/* 免费注册、游客登录 */}
                </form>
```

接下来需要编写FormInput组件，在src/components目录下新建FormInput.js：

```jsx
import React, { Component } from 'react'
import '../assets/styles/formInput.less'

export default class FormInput extends Component {
    render() {
        return (
            <div className="input-group">
                {/* 左侧图标 */}
                <i>图</i>
                {/* 右侧输入框 */}
                <input type="text"/>
            </div>
        )
    }
}
```

在src/assets/styles目录下新建formInput.less:

```less
@charset 'utf-8';

.input-group{
    width: 100%;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 6px;

    display: flex;  // 弹性布局
    margin-bottom: 20px;

    i{
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    input{
        color:#fff;
        outline: none;   //去掉聚焦框
        background: transparent;  //背景透明
        border:0 none;

        flex:1;

    }
}
```

![1571156624786](.\assets_d03\1571156624786.png)



## 十二、字体图标

把字体文件和iconfont.css文件拷贝到src/assets/fonts/iconfont目录中：

在FormInput.js组件中，引入样式，添加两个类 iconfont icon-shouji：

```jsx
import '../assets/fonts/iconfont/iconfont.css'

				{/* 左侧图标 */}
                <i className="iconfont icon-shouji"></i>

```

在formInput.less中设置字体图标大小：

```less
	i{
        width: 40px;
        line-height: 40px;
        font-size:26px;
    }
```



## 十三、组件复用

在FormInput.js组件中，设置两个需要替换成props属性，icon类名和input类型：

```jsx
		   <div className="input-group">
                {/* 左侧图标 */}
                <i className={"iconfont icon-"+this.props.iconClass}></i>
                {/* 右侧输入框 */}
                <input type={this.props.type}/>
            </div>
```

在LoginPage.js中，为两个组件设置属性：

```jsx
			   <form className="login-form">
                    {/* 用户名 */}
                    <FormInput iconClass="shouji" type="text"/>
                    {/* 密码 */}
                    <FormInput iconClass="mima" type="password"/>
                    {/* 登录 */}
                    {/* 忘记密码 */}
                    {/* 免费注册、游客登录 */}
                </form>
```

![571246157073](.\assets_d03\1571246205146.png)



设置placeholder样式：

```less
input::-webkit-input-placeholder { /* WebKit browsers 适配谷歌 */
	color: #fff;
	opacity: 0.6;
}
```



## 十四、按钮组件——登录按钮

LoginPage.js中：

```jsx
			   <form className="login-form">
    
                    ...
    
                    {/* 登录 */}
                    <FormBtn />
                    {/* 忘记密码 */}
                    {/* 免费注册、游客登录 */}
                </form>
```

FormBtn.js中：

```jsx
import React, { Component } from 'react'
import '../assets/styles/formBtn.less'

export default class FormInput extends Component {
    render() {
        return (
            <button className="form-btn">登录</button>
        )
    }
}

```

formBtn.less中：

```less
@charset "utf-8";

.form-btn{
	display: block;
	width: 100%;
	height: 40px;
	border: 1px solid #fff;
	border-radius: 6px;
	color:#fff;
	background: transparent;
}
```



## 十五、按钮组件——忘记密码

LoginPage.js中：

```jsx
				   {/* 登录 */}
                    <FormBtn>登录</FormBtn>
                    {/* 忘记密码 */}
                    <FormBtn type="ordinary">忘记密码</FormBtn>
```

FormBtn.js中：

```jsx
   render() {
        return (
            this.props.type === "ordinary"?
            <p className="form-btn-p">{this.props.children}</p>:
            <button className="form-btn">{this.props.children}</button>
        )
    }
```

formBtn.less中：

```less
.form-btn-p{
    text-align: left;
}
```



## 十六、按钮组件——免费注册、游客登录

LoginPage.js中：

```jsx
				   {/* 登录 */}
                    <FormBtn block={true}>登录</FormBtn>
                    {/* 忘记密码 */}
                    <FormBtn type="ordinary">忘记密码</FormBtn>
                    {/* 免费注册、游客登录 */}
                    <FormBtn>免费注册</FormBtn>&emsp;
                    <FormBtn>游客登录</FormBtn>
```

FormBtn.js中：

```jsx
   render() {
        let is_block_class = "";
        this.props.block? is_block_class=" block":is_block_class="";
        return (
            
            this.props.type === "ordinary"?
            <p className="form-btn-p">{this.props.children}</p>:
            <button className={"form-btn" + is_block_class}>{this.props.children}</button>
        )
    }
```

formBtn.less中重新改写.form-btn类：

```less
.form-btn{
    height: 40px;
    border: 1px solid #fff;
    border-radius: 6px;
    color:#fff;
    background: transparent;    
    
    &.block{   //同时具有form-btn和block类名的样式
        width: 100%;
        
        display: block;
        
    }
    
}
```

