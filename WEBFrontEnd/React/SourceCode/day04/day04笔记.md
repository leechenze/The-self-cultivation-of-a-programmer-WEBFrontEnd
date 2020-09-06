## 一、Antd-Mobile介绍



常用的reactUI组件例如：antd-design、bootstrap、material、element-ui

Ant Design Mobile 一个基于 Preact / React / React Native 的 UI 组件库

`antd-mobile` 是 [Ant Design](http://ant.design/) 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务 

ant-design官网：<https://ant.design/index-cn> 

antd-mobile官网：<https://mobile.ant.design/index-cn> 

antd-mobile组件文档：<https://mobile.ant.design/docs/react/introduce-cn> 



## 二、项目集成Antd-Mobile

1、安装antd-mobile：

项目目录下：   (如果没有安装yarn的话，先安装npm install -g yarn)

```
 yarn add antd-mobile    或者   npm install antd-mobile  
```

以下2到4步参考antd-mobile组件文档的首页来完成：

2、在pubilc/index.html中引入 FastClick, 在head中插入：

```html
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }
    if(!window.Promise) {
        document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }
</script>
```

3、src目录下新建test文件夹，test下新建Test1Button.js文件

```jsx
import React from 'react'  //快捷键imr
import ReactDOM from 'react-dom' //快捷键imrd

import { Button } from 'antd-mobile';   
ReactDOM.render(<Button>Start</Button>, document.getElementById('root')); 
```

4、src/index.js中，注释以前的顶部组件，换成测试用组件导入，及其样式

```jsx
// 引入顶级组件(后期的 路由组件)
// import './pages/App';

//测试ant mobile的集成
import './test/Text1Button'

//样式的引入
import 'normalize.css'
import './assets/styles/core.less'

//各种引入
//ant mobile样式引入
import 'antd-mobile/dist/antd-mobile.css'; 
```

5、如果出现警告：[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080

则在core.less文件中添加修复样式：

```
body{ touch-action: pan-y; } 
```



## 三、头部组件——Logo

在src/pages下新建HomePage.js

```jsx

import React, { Component } from 'react'
import Header from "../components/Header"

// 2、引入外部样式
import '../assets/styles/header.less'


// 3、声明并且导出组件类
export default class LoginPage extends Component {
   
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}
```

在src/components中新建Header.js  （引用antd-mobile的NavBar导航栏组件）

```	jsx
import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import Img from "../components/Img"
import "../assets/styles/header.less"

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavBar

                    leftContent={[
                        <Img key="0" src="logo.png" alt=""/>,
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        // <Icon key="1" type="ellipsis" />,
                    ]}
                    // mode="light"
                    // icon={<Icon type="left" />}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >NavBar</NavBar>

            </div>
        )
    }
}
```

在src/styles下新建global.less

```less
@charset "utf-8";

/*设置全局基色*/
@base-color:#00439c;
```

在src/styles下新建header.less

```less
@charset "utf-8";
@import './global.less';

.header{
    .am-navbar{
        background-color: @base-color;
    }
    .img-div img{
        height: 30px;
    }
}
```

## 四、头部组件——搜索框

Header.js 中：   （引用antd-mobile的SearchBar搜索栏组件）

```jsx
import React, { Component } from 'react'
import { NavBar, SearchBar } from 'antd-mobile';
import Img from "../components/Img"
import "../assets/styles/header.less"

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavBar
                    leftContent={[
                        <Img key="0" src="logo.png" alt=""/>,
                    ]}
                ><SearchBar placeholder="搜你想搜的" /></NavBar>
            </div>
        )
    }
}

```

header.less的.header类中，继续添加样式：

```less
.header{
    ...

    .am-navbar-right,.am-navbar-left{
        flex:0;
    }

    .am-search{
        flex:1;
        background-color: @base-color;

        .am-search-input{  /*form下的div元素*/
            flex:0 1 auto;
        }

        .am-search-cancel{   /* “取消” 的文字样式*/
            color:#fff;
        }
    } 
}
```



## 五、banner

HomePage.js中

```jsx
import Banner from "../components/Banner"
            <div>
                {/* 页头 */}
                <Header />
                {/* 广告位Banner */}
                <Banner />
            </div>
```

components中新建Banner.js（引用antd-mobile的Carousel 走马灯组件）

```jsx
import React from 'react'

import { Carousel, WingBlank } from 'antd-mobile';
// 【1】、引入banner图片文件
import Banner1 from "../assets/images/banner1.png"
import Banner2 from "../assets/images/banner2.png"
import Banner3 from "../assets/images/banner3.png"
import "../assets/styles/banner.less"

export default class Banner extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        //  【2】 、使用banner图片文件
        data: [Banner1, Banner2, Banner3],
      });
    }, 100);
  }
  render() {
    return (
      <div className="banner">
          <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="###"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                // 【3】 、指定val值
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      </div>
    );
  }
}

```

assets/style中新建banner.less

```less
@charset 'utf-8';

.banner{
    .am-wingblank.am-wingblank-lg{
        margin: 0;
    }
}
```



## 六、学科导航

HomePage.js中

```jsx
import Subject from "../components/Subject"
		   <div>
                {/* 页头 */}
                <Header />
                {/* 广告位Banner */}
                <Banner />
                {/* 学科导航 */}
                <Subject />
            </div>
```

components中新建Subject.js中  （引用antd-mobile的Flex布局）

```jsx
import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import "../assets/styles/subject.less"

export default class Subject extends Component {
    render() {
        return (
            <div class="subject">
                <Flex>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:0}}></i>
                            <p>Jave EE</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-50}}></i>
                            <p>全栈UI设计</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-100}}></i>
                            <p>H5前端</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-150}}></i>
                            <p>Python</p>
                        </a>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-200}}></i>
                            <p>iOS</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-250}}></i>
                            <p>大数据</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-300}}></i>
                            <p>C++</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item></Flex.Item>
                </Flex>
            </div>
        )
    }
}

```

assets/style中新建subject.less

```less
@charset "utf-8";

.subject{
    background-color: #fff;
    padding-bottom: 15px;
   
    a{
        display: block;
        padding-top: 15px;
        i{
            margin: 0 auto;
            width: 50px;
            height: 56px;
            background-color: #ccc;
            display: block; 
            background: url("../images/subjectIcons.png");
            background-size: 350px;
            
        }
        p{
            text-align: center;
            margin-bottom: 0;
        }
    }
    
}

```



## 七、小列表

HomePage.js中，准备数据：

```js
const sub_list_data = [
    {
        img: 't0110974b6f051c1e5a.gif',
        title: '用于构建用户界面的 JavaScript 库',
        des: '组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离',
    },
    {
        img: 't0177ec8627c04e438b.gif',
        title: '渐进式的JavaScript 框架',
        des: '不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩',
    },
    {
        img: 't0135a6567622271196.gif',
        title: '一套框架多种平台 移动端&桌面端',
        des: '学会用 Angular 构建应用，把这些代码和能力复用在多种不同平台的应用上',
    },
    {
        img: 't0110974b6f051c1e5a.gif',
        title: '用于构建用户界面的 JavaScript 库',
        des: '组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离',
    },
    {
        img: 't0177ec8627c04e438b.gif',
        title: '渐进式的JavaScript 框架',
        des: '不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩',
    }
];
```

HomePage.js中，jsx结构：   (引用antd-mobile的Flex布局)

```jsx
export default class HomePage extends Component {

    constructor(props) {
        super(props);

    
        this.state = {
            subList:sub_list_data
        };

    }
    render() {
        return (
            <div>
                {/* 页头 */}
                <Header />
                {/* 广告位Banner */}
                <Banner />
                {/* 学科导航 */}
                <Subject />
                {/* 小列表 */}
                <div className="home-sub-list">
                    <div className="list-header">相关资讯</div>
                    
                    {
                        this.state.subList.map((obj, k)=>(
                            <div className="list-item">
                                <Flex>
                                    <Flex.Item>
                                        <Img alt="" src={obj.img}/>
                                    </Flex.Item>
                                    <Flex.Item>
                                        <h3>{obj.title}</h3>
                                        <p>{obj.des}</p>
                                    </Flex.Item>
                                </Flex>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

```



subList.less中

```less
@charset 'utf-8';

.home-page{
    
    background-color: #fff;

    .home-sub-list{
        h3,p{
            margin: 0;
            padding: 0;
        }
        padding: 0 15px 0;
        border-top: 1px solid #ddd;
    
        .list-header{
            padding: 15px 0 6px;
            font-size:20px;
            border-bottom: 1px solid #ddd;
        }

        .list-item{
            border-bottom: 1px solid #ddd;
            padding: 12px 0;
        }
    
        .list-item-left{
            width: 80px;
            flex:0 1 auto;  
            margin-right: 5px;

            img{
                width: 80px;
                display: block;
            }
        }
        
        h3{
            font-size: 16px;
            margin-bottom: 10px;
            overflow: hidden;
            text-overflow: ellipsis;    /*表示文本超出时候用 “...” 来代替*/
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
        p{
            line-height: 1.666em;
            overflow: hidden;
            text-overflow: ellipsis;    /*表示文本超出时候用 “...” 来代替*/
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    }
}
```



## 八、标签页

HomePage.js中 ： （引用antd-mobile的Flex布局 Tabs 标签页 和 Item列表）

```jsx
			   <div className="home-tab">
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                    <div style={{ backgroundColor: '#fff' }}>
                        <Flex className="home-tab-item">
                            <Flex.Item className="home-tab-item-left">
                                <Img src="20191025091907842.gif" />
                            </Flex.Item>
                            <Flex.Item className="home-tab-item-right">
                                <h3>
                                传三星计划为Galaxy S11配置可卷曲显示屏和可旋转摄像头
                                </h3>
                                <div className="txt_info">
                                    <i className="iconfont icon-shijian"></i>
                                    <span>2小时前</span>
                                    <div className="right">
                                        <i className="iconfont icon-liulan"></i>
                                        <span>63</span>
                                    </div>
                                </div>
                            </Flex.Item>
                        </Flex>
                        <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                        <Item arrow="horizontal" onClick={() => {}}>三星S11系列国行型号曝光 具备90Hz刷新率</Item>
                        <Item arrow="horizontal" onClick={() => {}}>华为多屏协同技术机型公布 共15款</Item>
                        <Item arrow="horizontal" onClick={() => {}}>40英寸红米电视曝光 售价可能在千元以内</Item>
                        <Item arrow="horizontal" onClick={() => {}}>华为手环4发布 售价199元</Item>
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>
                        <Flex className="home-tab-item">
                            <Flex.Item className="home-tab-item-left">
                                <Img src="20191025104209413.gif" />
                            </Flex.Item>
                            <Flex.Item className="home-tab-item-right">
                                <h3>
                                传丰田计划与铃木合作在印度推出紧凑型电动汽车
                                </h3>
                                <div className="txt_info">
                                    <i className="iconfont icon-shijian"></i>
                                    <span>4小时前</span>
                                    <div className="right">
                                        <i className="iconfont icon-liulan"></i>
                                        <span>85</span>
                                    </div>
                                </div>
                            </Flex.Item>
                        </Flex>
                        <Item arrow="horizontal" onClick={() => {}}>传丰田计划与铃木合作在印度推出紧凑型电动汽车</Item>
                        <Item arrow="horizontal" onClick={() => {}}>外媒：欧盟考虑对自动驾驶政策松绑，特斯拉Autopilot有望上市</Item>
                        <Item arrow="horizontal" onClick={() => {}}>GoFun出行：已经在全国54个城市实现盈利</Item>
                        <Item arrow="horizontal" onClick={() => {}}>丰田e-4me概念车亮相2019东京车展 科技感十足</Item>
                        <Item arrow="horizontal" onClick={() => {}}>外媒：2020年第一季度结束，特斯拉上海工厂单月产能可达1.4万辆</Item>
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>
                        <Flex className="home-tab-item">
                            <Flex.Item className="home-tab-item-left">
                                <Img src="20191025092136621.gif" />
                            </Flex.Item>
                            <Flex.Item className="home-tab-item-right">
                                <h3>
                                恒大新能源汽车全球研究总院落户上海 许家印出席活动
                                </h3>
                                <div className="txt_info">
                                    <i className="iconfont icon-shijian"></i>
                                    <span>3小时前</span>
                                    <div className="right">
                                        <i className="iconfont icon-liulan"></i>
                                        <span>13</span>
                                    </div>
                                </div>
                            </Flex.Item>
                        </Flex>
                        <Item arrow="horizontal" onClick={() => {}}>手机+AIOT“双引擎” 持续赋能小米各业务线</Item>
                        <Item arrow="horizontal" onClick={() => {}}>BluePrism进军中国市场  开启RPA行业新赛道</Item>
                        <Item arrow="horizontal" onClick={() => {}}>金融科技迎转型关键期，向前金服迭代升级智能风控平台“听风者”</Item>
                        <Item arrow="horizontal" onClick={() => {}}>周鸿祎：必须以作战视角看待网络安全</Item>
                        <Item arrow="horizontal" onClick={() => {}}>开启人工智能绚烂新世界 微软小冰年度大会发布Avatar Framework</Item>
                    </div>
                    </Tabs>
                </div>
```

homePage.less中：

```less
.home-tab{
    margin-top: 5px;
    .am-list-item .am-list-line{
        padding-right: 0;
        margin-right: 15px;
    }
    .am-tabs-default-bar-tab-active{
        color:@base-color;
    }
    .am-tabs-default-bar-underline{
        border-color:@base-color;
    }
    .am-tabs-default-bar-tab{
        font-size:18px;
    }

    .home-tab-item{
        margin: 10px 15px 5px;
        .home-tab-item-left{
            flex:0 1 auto;
            width: 120px;
            img{
                width: 120px;
                display: block;
            }
        }    

        .home-tab-item-right{
            h3{
                font-size:16px;
                line-height:1.4em;
                margin-top: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
            .txt_info{
                color:#ccc;
                .right{
                    float: right;
                }
                i{
                    margin-right: 6px;
                }
                span{
                    color:#aaa;
                }
            }
            
        }
    }
    
}

```



## 九、页脚(header组件的复用)

HomePage.js中：

```jsx
<Header isFooter={true}/>
```

Header.js组件中：

```jsx
		   <div className="header">
                <NavBar
                mode="light"
                leftContent={this.props.isFooter?"":[
                    
                    <img key="0" src={logoImg} alt=".." className="header-logo"/>
                ]}

                >
                    {
                        this.props.isFooter?
                        <div style={{flex:"1",textAlign:"right"}}><img key="0" src={logoImg} alt=".." className="header-logo" /></div>:
                        <SearchBar placeholder="搜你想搜的"  />
                    }
                </NavBar>
            </div>
```



最后企业文字：

```
				{/* 页脚 */}
                <Header isFooter={true}/>
                <div className="footer">
                    <p>© 2018-2019 ICP备案：粤ICP备17147191号</p>
                    <p>广州狼码教育科技有限公司</p>
                    <p>办公电话：020-85628002</p>
                    <p>地址：广州市天河区棠下大地商务港D栋603</p>
                </div>
```

