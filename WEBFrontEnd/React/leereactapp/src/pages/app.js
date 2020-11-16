import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LoginPage from './LoginPage'


export default class App extends Component {
    render() {
        return (
            <LoginPage />
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));