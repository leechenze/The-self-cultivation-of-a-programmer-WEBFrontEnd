## 一、列表页ListView组件基本使用

列表页使用组件：

<https://mobile.ant.design/components/list-view-cn/#components-list-view-demo-basic-body> 

在pages中新建ListPage.js：

```jsx

import React, { Component } from 'react'
import Header from "../components/Header"
import MyListView from "../components/MyListView"


// 3、声明并且导出组件类
export default class ListPage extends Component {
   
    render() {
        return (
            <div>
                <Header />
                <MyListView />
            </div>
        )
    }
}
```

在components中新建MyListView.js:

```jsx
import React, { Component } from 'react'
import { ListView } from 'antd-mobile';

const data = [
    {
        img: 't0110974b6f051c1e5a.gif',
        title: '用于构建用户界面的 JavaScript 库',
        des: 'React 使创建交互式 UI 变得轻而易举',
    },
    {
        img: 't0177ec8627c04e438b.gif',
        title: '小米新品发布会定档 MIX新品亮相',
        des: 'Yeelight智能LED灯丝灯发布：复古设计 亮度可调',
    },
    {
        img: 't0135a6567622271196.gif',
        title: 'iPhone11开始出货 本周五发售',
        des: '首批售卖的iPhone 11、iPhone 11 Pro和iPhone 11 Pro Max已经从工厂送出',
    },
    {
        img: 't0110974b6f051c1e5a.gif',
        title: '用于构建用户界面的 JavaScript 库',
        des: 'React 使创建交互式 UI 变得轻而易举',
    },
    {
        img: 't0177ec8627c04e438b.gif',
        title: '小米新品发布会定档 MIX新品亮相',
        des: 'Yeelight智能LED灯丝灯发布：复古设计 亮度可调',
    },
    {
        img: 't0135a6567622271196.gif',
        title: 'iPhone11开始出货 本周五发售',
        des: '首批售卖的iPhone 11、iPhone 11 Pro和iPhone 11 Pro Max已经从工厂送出',
    },
];

export default class MyListView extends Component {
    constructor(props) {
        super(props);
        //定义数据源
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,  // 设置行数据变化的规则
        });
    
        //定义初始状态
        this.state = {
          dataSource,
          isLoading: true,
        };
      }

      componentDidMount() {
        // 模拟ajax请求获取数据
        setTimeout(() => {
            // this.rData = genData();
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(data),  //把数据对象克隆到listview数据源中
              isLoading: false,   //加载状态
            });
          }, 600);
      }
      
    
    renderRow(rowData){
        //每一行的渲染函数
        
        return <div>{rowData.title}</div>
    }

    render() {

        
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                // renderHeader={() => <span>header</span>}
                // renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                // {this.state.isLoading ? 'Loading...' : 'Loaded'}
                // </div>)}
                
                // renderSeparator={separator}
                className="am-list"
                // pageSize={4}
                useBodyScroll
                // onScroll={() => { console.log('scroll'); }}
                // scrollRenderAheadDistance={500}
                // 滚动到底部执行onEndReached方法
                // onEndReached={this.onEndReached}
                // onEndReachedThreshold={10}
            />
        )
    }
}
```



ps:我们自己的数据：

```js
const data = [
    {
        img: 't0110974b6f051c1e5a.gif',
        title: '用于构建用户界面的 JavaScript 库',
        des: 'React 使创建交互式 UI 变得轻而易举',
    },
    {
        img: 't0177ec8627c04e438b.gif',
        title: '小米新品发布会定档 MIX新品亮相',
        des: 'Yeelight智能LED灯丝灯发布：复古设计 亮度可调',
    },
    {
        img: 't0135a6567622271196.gif',
        title: 'iPhone11开始出货 本周五发售',
        des: '首批售卖的iPhone 11、iPhone 11 Pro和iPhone 11 Pro Max已经从工厂送出',
    },
];

```

## 二、列表每一项布局的书写

从上面我们已经知道randerRow函数，就是每一条数据的渲染。而这部分样式布局刚好和我们首页相关资讯一致。所以：

#### 2.1、先抽取首页循环return的部分作为组件

2.1.1、在components文件夹中新建 ListItem.js 组件:

```jsx
import React, { Component } from 'react'
import Img from "./Img"
import { Flex } from 'antd-mobile';
export default class ListItem extends Component {
    render() {
        return (

            <div className="sub_list_item">
                <Flex>
                    <Flex.Item className="sub_list_left">
                        <Img src={this.props.imgSrc} alt=""/>
                    </Flex.Item>
                    <Flex.Item className="sub_list_right">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.des}</p>
                    </Flex.Item>
                </Flex>    
            </div>

        )
    }
}

```

HomePage.js中修改为：

```jsx
			   {/* 小列表(相关资讯) */}
                <div className="sub_list">
                    <div className="sub_list_header">相关资讯</div>

                    {
                        this.state.sub_list_data.map((obj, key)=>{

                            return <div key = {key}>
                                <ListItem 
                                        imgSrc={obj.img} 
                                        title={obj.title}
                                        des={obj.des}
                                    />
                            </div>  
                        })
                    }
                </div>
```



2.1.2、抽取homePage.less中该部分样式到global.less并封装成 “函数” 可以 “调用”

global.less中增加代码：

```less
.list-item(){
    .sub_list{
        
        border-top: 1px solid #ddd;
        padding: 0 15px;
        h3,p{margin: 0;}
        .sub_list_header{
            padding: 15px 0 6px;
            font-size: 20px;
            border-bottom: 1px solid #ddd;

        }
        .sub_list_item{
            padding: 12px 0;
            border-bottom: 1px solid #ddd;

        }
        .img-div img{
            width: 80px;
            display: block;
        }

        .sub_list_left{
            flex: 0 1 auto;
            margin-right: 5px;
   
        }

        .sub_list_right{
            h3{
                margin-bottom: 10px;
                font-size: 16px;
                .max-line(1);
            }
            p{
                line-height: 1.666em;
                .max-line(2);
            }
        }
    }
    
}
```

homePage.less中：

```less
.home-page{
    
    background-color: #fff;
    
    .list-item();
    
    .home-tab{
        ...
    }
}
```

以上必须确保抽取后不能影响首页原有的样式内容

#### 2.2、列表页MyListView组件的randerRow函数中的书写

ListPage.js中：

```jsx
		   <div className="list-page">
                <Header />
                <div className="sub_list">
                    <div className="sub_list_header">相关资讯</div>

                    <MyListView />
                </div>
                
            </div>
```



randerRow函数中：

```jsx
renderRow(rowData){
   	//每一行的渲染函数
        
    return <ListItem 
               imgSrc={rowData.img} 
               title={rowData.title}
               des={rowData.des}
               />
}
```

listPage.less中：

```less
@import 'global.less';

.list-page{
    background-color: #fff;
    color:#333;

    .list-item()
}
```



## 三、滑动到底部加载更多

components的 MyListView.js中：

修改componentDidMount() 中的setTimeout() ：

```js
componentDidMount() {
        
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });

            
        }, 600);
      }
```

全局中添加genData函数：

```js
const NUM_ROWS = 10; //每次加载多少条数据
let pageIndex = 0;

function genData(pIndex = 0) {
  //循环处理数据，返回数据对象
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}
```

class MyListView中添加onEndReached函数：

```jsx
onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
          this.rData = { ...this.rData, ...genData(++pageIndex) };
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 1000);
      }
```

class MyListView中的render函数中添加row常量，并且

组件标签<ListView  renderRow={row}  onEndReached={this.onEndReached}/>：

```jsx
render() {
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <ListItem 
                        imgSrc={obj.img} 
                        title={obj.title}
                        des={obj.des}
                    />
            )
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={row}
                // renderHeader={() => <span>header</span>}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                {this.state.isLoading ? '加载中...' : '加载完成'}
                </div>)}
                
                // renderSeparator={separator}
                className="am-list"
                // pageSize={4}
                useBodyScroll
                // onScroll={() => { console.log('scroll'); }}
                // scrollRenderAheadDistance={500}
                // 滚动到底部执行onEndReached方法
                onEndReached={this.onEndReached}
                // onEndReachedThreshold={10}
            />
        )
    }
```

去掉 randerRow函数



## 四、详情页搭建

新建详情页 DetailPage.js：

```jsx
import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import "../assets/styles/detailPage.less"
import LogoImg from "../assets/images/logo.png"


export default class DetailPage extends Component {
    render() {
        return (
            <div className="detail-page">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.go(-1)}
                ><img src={LogoImg} style={{height:30}} alt="" /></NavBar>

        </div>
        )
    }
}

```

新建样式文件 detailPage.less 

```less
@import "./global.less";

.detail-page{
    .am-navbar{
        background-color: @base-color;
    }
    .am-navbar-light{
        color:#fff;
    }
}
```

## 五、详情页文章

```jsx
			<article>
                    <h1>React 用于构建用户界面的 JavaScript 库</h1>
                    <p>
                        <span>作者：<i>天上的鱼</i></span>
                        <span style={{float:"right"}}>2019-11-01</span>
                    </p>
                    <Img src="dt.gif" />
                    <content>
                        <p>
                        Props、State的概念都很清晰，组件的普通属性是指在组件中直接挂载到this下的属性。其实，Props和State也是组件的两个普通属性，因为我们可以通过this.props 和 this.state 直接获取到。那么Props、State 和 组件的其他普通属性，分别应该在什么场景下使用呢？</p>
                        <p>Props和State都是用于组件渲染的，也就是说，一个组件最终长成什么样，取决于这个组件的Props和State。Props和State的变化都会触发组件的render方法。但这两者也是有区别的。Props是只读的数据，它是由父组件传递过来的；而State是组件内部自己维护的状态，是可变的。State可以根据Props的变化而变化。如果组件中还需要其他属性，而这个属性又与组件的渲染无关（也就是render方法中不会用到），那么就可以把这个属性直接挂在到this下，而不是作为组件的一个状态。</p>
                        <p>例如，组件中需要一个定时器，每隔几秒改变一下组件的状态，就可以定义一个this.timer属性，以备在componentWillUnmount时，清除定时器。</p>
                        <p>父组件每次render方法被调用，或者组件自己每次调用setState方法，都会触发组件的render方法（前提是shouldComponentUpdate使用默认行为，总是返回true）。那么组件每次render，是不是都会导致实体DOM的重新创建呢？答案是，不是！</p>
                        <p>React之所以比直接操作DOM的JS库快，原因是React在实体DOM之上，抽象出一层虚拟DOM，render方法执行后，得到的是虚拟DOM，React 会把组将当前的虚拟DOM结构和前一次的虚拟DOM结构做比较，只有存在差异性，React才会把差异的内容同步到实体DOM上。如果两次render后的虚拟DOM结构保持一致，并不会触发实体DOM的修改。</p>    
                    </content>
                    <p>
                        <i className="iconfont icon-liulan"></i> <span>6325</span> 次观看
                        <div style={{float:"right"}}><i className="iconfont icon-jubao"></i> 我要举报</div>
                    </p>



                </article>
```

文章样式 detailPage.less中：

```less
@import "./global.less";

.detail-page{
    background-color: #fff;
    .am-navbar{
        background-color: @base-color;
    }
    .am-navbar-light{
        color:#fff;
    }
    article{
        padding: 15px;
        h1{
            margin-top: 0;
            font-size: 22px;
            text-align: center;
        }
        img{
            width: 100%;
        }    
        content{
            text-indent: 2em;
            line-height: 1.666em;
        }
    }
}
```

## 六、相关资讯小列表

DetailPage.js中：

```jex
// 准备数据：


...
    constructor(props){
        super(props)

        this.state = {
            sub_list_data: sub_list_data
        }
    }
    
    
...
			   
			   <div className="sub_list">
                    <div className="sub_list_header">相关资讯</div>

                    {
                        this.state.sub_list_data.map((obj, key)=>{

                            return <div key = {key}>
                                <ListItem 
                                        imgSrc={obj.img} 
                                        title={obj.title}
                                        des={obj.des}
                                    />
                            </div>  
                        })
                    }
                </div>
```

detailPage.less中：

```
.detail-page{
	...
	.list-item();
	
}
```

## 七、热门评论

DetailPage.js中：

```jsx
			   <div className="comment">
                    <div className="comment-header">热门评论</div>
                    <Flex  className="comment-box">
                        <Flex.Item className="box-l">
                            <div className ="avatar-box"><Img src="avatar.jpg"/></div>
                        </Flex.Item>
                        <Flex.Item className="box-r">
                            <p>
                                <strong>爱学习的孩子</strong>
                                <span style={{float:"right"}}>3 <i className="iconfont icon-dianzan"></i></span>
                            </p>
                            <p className="comment-content">
                            我们应该在组件的哪一个生命周期方法中发送网络请求呢？
                            </p>
                        </Flex.Item>
                    </Flex>
                   
                </div>
```

detailPage.less中：

```less
.comment{
        padding:5px 15px;
        .comment-header{
            padding: 15px 0 6px;
            font-size: 20px;
            border-bottom: 1px solid #ddd;

        }

        .comment-box{
            .box-l{
                margin-right: 5px;
                flex:0 1 auto;
                width: 50px;
                height: 50px;
                .avatar-box,img{
                    width: 50px;
                    height: 50px;
                }
                .avatar-box{
                    border-radius:50%;
                    overflow: hidden;
                    
                }
                
            }

            .comment-content{
                line-height: 1.4em;
            }
        }
    }
```

## 八、路由配置

项目目录下安装路由：

​	yarn add react-router@3.2.0

把App.js修改为：

```jsx
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import ListPage from "./ListPage"
import DetailPage from "./DetailPage"


const router2 = <Router history={hashHistory}>

                    <Route path="/" component={LoginPage}/>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/list" component={ListPage}/>
                    <Route path="/detail" component={DetailPage}/>

                </Router>

ReactDOM.render(router2, document.getElementById('root'));
```

再在需要跳转的位置加上a标签(或者Link)：

例如：首页跳转到列表页，在Subject.js中：

```jsx
				   <Flex.Item>
                        <a href="#/list">
                            <i style={{backgroundPositionX:-50}}></i>
                            <p>全栈UI设计</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="#/list">
                            <i style={{backgroundPositionX:-100}}></i>
                            <p>H5前端</p>
                        </a>
                    </Flex.Item>
```

