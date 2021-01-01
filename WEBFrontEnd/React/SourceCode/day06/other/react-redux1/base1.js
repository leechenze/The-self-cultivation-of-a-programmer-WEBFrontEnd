/*
  react-redux基础6  开始使用react-redux  数据的展示
*/
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import { Provider } from 'react-redux'
import App1 from "./App1"


const defaultState = {
    num1: 20
}

// 请一个仓库管理员，必须是一个函数
const reducer = (state = defaultState, action) => {

    return state
}

//创建一个仓库， 把仓库管理员请来管理这个仓库
const store = createStore(reducer)


const App = (
    //1、所有组件在Provider组件下
    <Provider store={store}>
        <App1 />
    </Provider>
)


ReactDOM.render(
    App
    , document.getElementById('root'));



