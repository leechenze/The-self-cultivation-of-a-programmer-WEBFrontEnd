import React, { Component } from 'react'
import "../assets/styles/FormInput.less"


export default class FormInput extends Component {
    render() {
        return (
            <div className="form-input" >
                {/* 字体图标 */}
                <i className={`iconfont icon-${this.props.iconClass}`}></i>
                {/* 输入框 */}
                <input type={this.props.type} name="" id="" placeholder={this.props.placeholder} />
            </div>
        )
    }
}
