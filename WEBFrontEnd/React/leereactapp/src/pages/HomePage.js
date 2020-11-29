import React, { Component } from 'react'

import "../assets/styles/HomePage.less"

import Header from './Header'

export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Header />
            </div>
        )
    }
}
