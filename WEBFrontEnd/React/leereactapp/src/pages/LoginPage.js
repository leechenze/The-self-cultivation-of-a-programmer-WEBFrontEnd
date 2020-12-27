import React, { Component } from 'react'
import { Link } from 'react-router'
import '../assets/styles/LoginPage.less'
// import LogoImg from '../assets/images/logo.png'
// const LogoImg = require("../assets/images/logo.png");


// 组件引入
import ImgPackage from '../components/ImgPackage'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'



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
                    <FormInput type="text" iconClass="shouji2" placeholder="用户名" />
                    {/* 密码输入框 */}
                    <FormInput type="password" iconClass="mima4" placeholder="密码" />
                    {/* 登陆按钮 */}
                    <FormButton isFull={true}>登录</FormButton>
                    {/* 忘记密码 */}
                    <FormButton type="ordinary">忘记密码</FormButton>
                    {/* 免费注册 和 游客登陆 */}
                    <FormButton>免费注册</FormButton>
                    &emsp;
                    <Link to="/home"><FormButton>游客登陆</FormButton></Link>
                </form>
            </div>
        )
    }
}
