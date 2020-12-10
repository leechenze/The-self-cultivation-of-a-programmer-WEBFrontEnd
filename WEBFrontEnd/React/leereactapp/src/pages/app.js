import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "../assets/fonts/iconfont.css"

import LoginPage from './LoginPage'
import HomePage from './HomePage'
import ListPage from './ListPage'
import DetailPage from './DetailPage'


export default class App extends Component {
    render() {
        return (
            // <LoginPage />
            // <HomePage />
            // <ListPage />
            <DetailPage />
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));