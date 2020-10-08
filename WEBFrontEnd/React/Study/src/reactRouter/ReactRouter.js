import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute, IndexRedirect, Link} from 'react-router';
// 引入对应的路由组件
import List from './List'
import Home from './Home'
import Detail from './Detail'

export default class ReactRouter extends Component {
    render() {
        return (
            <div id="reactrouter">
                <ul>
                    {/* <li><a href="#/index/home">首页</a></li>
                    <li><a href="#/index/list">列表页</a></li>
                    <li><a href="#/index/detail/316">详情页</a></li> */}

                    <li><Link to="#/index/home">首页</Link></li>
                    <li><Link to="#/index/list">列表页</Link></li>
                    <li><Link to="#/index/detail/316">详情页</Link></li>
                    
                </ul>
                <hr/>
                {/* 路由中的外层的 Route其实就是ReactRouter这个组件, 所以 this.props.children 获取的就是它下面的Home和List */}
                {/* 其实组件之间的嵌套就是路由之间的嵌套, 也完全可以把Router这个路由标签写到组件中来, 写法很多样化 */}
                {this.props.children}
            </div>
        )
    }
}

// 定义一个路由;
let routes = <Router history={hashHistory}>
    {/* Route 既是 ReactRouter 这个组件 */}
    <Route path="/index" component={ReactRouter}>
        {/* 路由重定向: IndexReact 在保持/app路径不变的情况下, 设置默认展示的页面 */}
        {/* <IndexRoute component={Home} /> */}
        {/* 路由重定向: IndexRedirect 在访问/index时, 直接重定向到 "/index/home"*/}
        <IndexRedirect to="/index/home" />
        {/* Route 既是 Home 和 List 这两个组件的选项, 根据url的变化加载对应的组件 */}
        <Route path="/index/home" component={Home}></Route>
        <Route path="/index/list" component={List}></Route>
        <Route path="/index/detail/:newId" component={Detail}></Route>
    </Route>
</Router>;

// 不再在index.js中渲染了, 迁移到这里进行渲染, 第一个参数改为变量 routes;
ReactDOM.render(routes, document.querySelector('#root'));


