import React, { Component } from 'react'
import ImgPackage from '../components/ImgPackage'
import Header from '../components/Header'
import MyListViews from '../components/MyListViews'

export default class ListPage extends Component {
    render() {
        return (
            <div className="list-page">
                {/* Header */}
                <Header />
                {/*  */}
                <div className="sub-list">
                    <div className="sub-list-header">相关咨询</div>
                    <MyListViews />
                </div>
                
                
            </div>
        )
    }
}
