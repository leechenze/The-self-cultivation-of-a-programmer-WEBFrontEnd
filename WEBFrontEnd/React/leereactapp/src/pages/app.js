import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "../assets/fonts/iconfont.css"

import LoginPage from './LoginPage'
import HomePage from './HomePage'
import ListPage from './ListPage'
import DetailPage from './DetailPage'
import { Router, Route, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


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




const defaultState = {
    subject_data: [],
}
const reducer = (state = defaultState, action) => {
    if(action.type == 'init_subject_data'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.subject_data = action.value;
        return newState;
    }
    return state;
}
const store = createStore(reducer);
const baseRouter = <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={LoginPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/list/:subjectId" component={ListPage}></Route>
        <Route path="/detail" component={DetailPage}></Route>
    </Router>
</Provider>
ReactDOM.render(baseRouter, document.getElementById("root"));




// // 渲染Redux实例
// ReactDOM.render(<ReduxText/>, document.getElementById("root"));
// 渲染ReactReduxTextOne实例
// ReactDOM.render(ReactReduxTextOne, document.getElementById("root"));
// 渲染ReactReduxTextTwo实例
// ReactDOM.render(ReactReduxTextTwo, document.getElementById("root"));
