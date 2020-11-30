import React, { Component } from 'react'

import "../assets/styles/HomePage.less"

import Header from '../components/Header'
import Banner from '../components/Banner'

export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                {/* Header */}
                <Header />
                {/* Carousel */}
                <Banner />
            </div>
        )
    }
}
