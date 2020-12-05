import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import "../assets/styles/Footer.less"

import ImgPackage from "./ImgPackage"

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavBar>
                    <ImgPackage key="0" src="logo.png" height={30} />
                </NavBar>
                <p>
                    那些不朽的誓言，依旧飘散着，在光阴里，红尘里，随着尘埃，随着流水，一直无声的飘散。只是你和我不知道，只是我们再也不能像当初那样朝着天喊，朝着地吼了
                </p>
            </div>
        )
    }
}
