import React, { Component } from 'react'
import { NavBar, Icon, SearchBar } from 'antd-mobile';
import "../assets/styles/Header.less"

import ImgPackage from "./ImgPackage"


// isDetail 详情页头部判断;
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavBar
                    leftContent={this.props.isDetail ? 
                        "":
                        <ImgPackage key="0" src="logo.png" height={30} />
                    }
                    icon={this.props.isDetail ? <Icon type="left" /> : "" }
                >
                    {this.props.isDetail ? 
                    <ImgPackage key="0" src="logo.png" height={30} /> : 
                    <SearchBar placeholder="Search" maxLength={8} />}
                </NavBar>
            </div>
        )
    }
}
