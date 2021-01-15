import React, { Component } from 'react'
import "../assets/styles/FormButton.less"

export default class FormButton extends Component {
    render() {
        return (
            // 使用三元进行判断是 A标签 或 按钮;
            this.props.type == "ordinary" ? 
            <a className="form-a" href="#">{this.props.children}</a> :
            <button className={`form-button ${this.props.isFull==true?'full':''}`} onClick={this.props.onClick} >{this.props.children}</button>
        )
    }
}
