import React, { Component } from 'react'

export default class EventUsage extends Component {

    constructor(props) {
        super(props)

        // 定义组件状态的数据;
        this.state = {
            num: 20,
        }

    }

    handleClick() {
        console.log('点击了按钮');
    }

    addNum() {

        this.setState({
            num: this.state.num + 1,
        })
    }

    redNum() {

        this.setState({
            num: this.state.num - 1,
        })
        
    }

    render() {
        return (
            <div id="eventusage">
                <button onClick={this.handleClick}>button</button>
                <p>{this.state.num}</p>
                <button onClick={this.addNum.bind(this)}>addNum</button>
                {/* 不实用bind绑定this时,亦可使用箭头函数矫正this; */}
                <button onClick={() => this.redNum()}>redNum</button>
            </div>
        )
    }
}
