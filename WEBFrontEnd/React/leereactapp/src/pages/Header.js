import React, { Component } from 'react'
import { NavBar, Icon, SearchBar } from 'antd-mobile';
import "../assets/styles/Header.less"

import ImgPackage from "../components/ImgPackage"
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavBar
                    leftContent={
                        <ImgPackage key="0" src="logo.png" height={30} />
                    }
                >
                    <SearchBar placeholder="Search" maxLength={8} />
                </NavBar>
            </div>
        )
    }
}
