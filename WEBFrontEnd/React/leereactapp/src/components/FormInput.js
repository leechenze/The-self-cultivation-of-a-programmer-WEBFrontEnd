import React, { Component } from 'react'
import "../assets/styles/FormInput.less"


export default class FormInput extends Component {
    render() {
        return (
            <div className="form-input" >
                {/* 字体图标 */}
                <i className="iconfont icon-shouji2"></i>
                {/* 输入框 */}
                <input type="text" name="" id=""/>
            </div>
        )
    }
}
