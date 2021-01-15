/*
   react-redux基础7  改变状态
*/
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import { Provider } from 'react-redux'
import App2 from "./App2"


const defaultState = {
    num1: 20
}

// 请一个仓库管理员，必须是一个函数
const reducer = (state = defaultState, action) => {
    if(action.type === "up"){
        let newState = JSON.parse(JSON.stringify(state))
        newState.num1 = action.value
        return newState
    }
    return state
}

//创建一个仓库， 把仓库管理员请来管理这个仓库
const store = createStore(reducer)


const App = (
    
    <Provider store={store}>
        <App2 />
    </Provider>
)


// ReactDOM.render(
//     App
//     , document.getElementById('root'));


export default App;
