// 子组件传值给父组件;

import React, { Component } from 'react'

class Child extends Component {
    constructor(props) {
        super(props);

    }
    numChildHandle() {
        // 点击按钮时调用父组件上通过属性传递过来的方法;
        this.props.numfatherHandle();
    }
    strChildHandle() {
        this.props.strFatherHandle('leechense');
    }
    render() {
        return (
            <div>
                <button onClick={this.numChildHandle.bind(this)}>numBtn</button>
                <button onClick={this.props.numfatherHandle.bind(this)}>numBtn</button>
                {this.props.children}
                <button onClick={this.strChildHandle.bind(this)}>numBtn</button>
                <button onClick={this.props.strFatherHandle.bind(this, 'lineLeechense')}>numBtn</button>
            </div>
        )
    }
}


export default class ChildValueToParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 20,
            str: 'asdf',
        }
    }

    // 父组件中创建一份方法给子组件调用;
    numfatherHandle() {
        this.setState({
            num: this.state.num + 1,
        })
    }
    strFatherHandle(value) {
        this.setState({
            str: value,
        })
    }

    render() {
        return (
            <div id="childvaluetoparent">
                <Child numfatherHandle={this.numfatherHandle.bind(this)}
                        strFatherHandle={this.strFatherHandle.bind(this)}>
                    <br/>
                    {this.state.num}
                    <br/>
                    {this.state.str}
                    <br/>
                </Child>
            </div>
        )
    }
}
