import React, { Component } from 'react'
import '../assets/styles/LoginPage.less'
// import LogoImg from '../assets/images/logo.png'
// const LogoImg = require("../assets/images/logo.png");


// 组件引入
import ImgPackage from '../components/ImgPackage'
import FormInput from '../components/FormInput'



export default class LoginPage extends Component {
    render() {
        return (
            <div className="login-page">
                {/* 第一部分: logo */}
                {/* <img src={LogoImg} alt="" /> */}
                {/* <img src={require("../assets/images/logo.png")} alt="" /> */}
                {/* 封装组件 */}
                <ImgPackage src="logo.png" />
                
                {/* 第二部分: form */}
                <form className="login-form">
                    {/* 用户名输入框 */}
                    <FormInput />
                    <FormInput />
                    {/* 密码输入框 */}
                    
                </form>
            </div>
        )
    }
}
