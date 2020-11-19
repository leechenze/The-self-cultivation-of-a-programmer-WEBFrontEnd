import React, { Component } from 'react'
import '../assets/styles/LoginPage.css'
// import LogoImg from '../assets/images/logo.png'
// const LogoImg = require('../assets/images/logo.png');

// 引入ImgPackage组件;
import ImgPackage from '../components/ImgPackage'

export default class LoginPage extends Component {
    render() {
        return (
            <div className="login-page">
                {/* 1.logo */}
                {/* <img src={LogoImg} alt="" /> */}
                {/* <img src={require("../assets/images/logo.png")} alt="" /> */}
                
                <ImgPackage src="logo.png" />
                
                {/* 2.form */}
            </div>
        )
    }
}
