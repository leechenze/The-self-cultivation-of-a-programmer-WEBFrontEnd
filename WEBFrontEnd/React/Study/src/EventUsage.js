import React, { Component } from 'react'

export default class EventUsage extends Component {

    constructor (props) {
        super(props)

        // 定义组件状态的数据;
        this.state = {
            num: 20,
        }
        
    }

    handleClick() {
        console.log('点击了按钮');
    }

    addNum () {
        
        this.setState({
            num: this.state.num + 1,
        })
    }
    
    render() {
        return (
            <div id="eventusage">
                <button onClick={this.handleClick}>button</button>
                <p>{this.state.num}</p>
                <button onClick={this.addNum.bind(this)}>addNum</button>
            </div>
        )
    }
}
