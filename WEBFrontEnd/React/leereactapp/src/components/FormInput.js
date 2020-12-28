import React, { Component } from 'react'
import "../assets/styles/FormInput.less"


export default class FormInput extends Component {
    render() {
        // console.log(this.props);     ==>     {"type":"password","iconClass":"mima4","placeholder":"密码","value":"sdf"}
        return (
            <div className="form-input" >
                {/* 字体图标 */}
                <i className={`iconfont icon-${this.props.iconclass}`}></i>
                {/* 输入框 */}
                {/* <input type={this.props.type} name="" id="" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} /> */}
                {/* 简写形式 {...this.props} */}
                <input {...this.props} />
            </div>
        )
    }
}
