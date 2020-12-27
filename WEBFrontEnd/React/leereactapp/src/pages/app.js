import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "../assets/fonts/iconfont.css"

import LoginPage from './LoginPage'
import HomePage from './HomePage'
import ListPage from './ListPage'
import DetailPage from './DetailPage'
import { Router,Route,hashHistory } from 'react-router'

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


const baseRouter = <Router history={hashHistory}>
    <Route path="/" component={LoginPage}></Route>
    <Route path="/login" component={LoginPage}></Route>
    <Route path="/home" component={HomePage}></Route>
    <Route path="/list" component={ListPage}></Route>
    <Route path="/detail" component={DetailPage}></Route>
</Router>

ReactDOM.render(baseRouter, document.getElementById("root"));