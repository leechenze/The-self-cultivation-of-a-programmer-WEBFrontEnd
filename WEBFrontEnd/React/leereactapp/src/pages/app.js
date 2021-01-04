import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "../assets/fonts/iconfont.css"

import LoginPage from './LoginPage'
import HomePage from './HomePage'
import ListPage from './ListPage'
import DetailPage from './DetailPage'
import { Router,Route,hashHistory } from 'react-router'

// ReduxText
import ReduxText from '../ReactReduxTest/ReduxText'
// ReactReduxTextOne;
import ReactReduxTextOne from '../ReactReduxTest/ReactReduxTextOne/base1'
// ReactReduxTextTwo;
import ReactReduxTextTwo from '../ReactReduxTest/ReactReduxTextTwo/base2'


// export default class App extends Component {
//     render() {
//         return (
//             <LoginPage />
//             // <HomePage />
//             // <ListPage />
//             // <DetailPage />
//         )
//     }
// }
// ReactDOM.render(<App />, document.getElementById("root"));




// const baseRouter = <Router history={hashHistory}>
//     <Route path="/" component={LoginPage}></Route>
//     <Route path="/login" component={LoginPage}></Route>
//     <Route path="/home" component={HomePage}></Route>
//     <Route path="/list/:subjectId" component={ListPage}></Route>
//     <Route path="/detail" component={DetailPage}></Route>
// </Router>
// ReactDOM.render(baseRouter, document.getElementById("root"));


// // 渲染Redux实例
// ReactDOM.render(<ReduxText/>, document.getElementById("root"));
// // 渲染ReactReduxTextOne实例
// ReactDOM.render(ReactReduxTextOne, document.getElementById("root"));
// 渲染ReactReduxTextTwo实例
ReactDOM.render(ReactReduxTextTwo, document.getElementById("root"));
