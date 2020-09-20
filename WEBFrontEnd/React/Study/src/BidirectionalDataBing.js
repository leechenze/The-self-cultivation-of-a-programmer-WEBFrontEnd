import React, { Component } from 'react'

export default class BidirectionalDataBing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 'initData',
        }
    }

    handleChange(e) {
        // 获取每次输入时的value
        console.log(e.target.value);
        this.setState({
            val: e.target.value
        })
    }
    
    render() {
        return (
            <div id="bidirectionaldatabing">
                {/* 双向数据绑定需要绑定onchange事件, 否则会报警告 */}
                <input type="text" value={this.state.val} onChange={this.handleChange.bind(this)}/>
                <p>{this.state.val}</p>
            </div>
        )
    }
}
