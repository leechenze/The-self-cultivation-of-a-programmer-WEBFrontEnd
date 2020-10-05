import React, { Component } from 'react'
import PropTypes from 'prop-types'


class GrandChild extends Component {

    // 子组件中声明context中的属性的类型;
    static contextTypes = {
        title: PropTypes.string,
    }
    
    render() {
        return (
            <div>
                {/* 传统的方式进行子组件传值 */}
                {/* {this.props.title} */}


                {this.context.title}
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                {/* 传统的方式进行子组件传值 */}
                {/* <GrandChild title={this.props.title}></GrandChild> */}

                <GrandChild></GrandChild>
            </div>
        )
    }
}

export default class ContextUsage extends Component {
    // 在父组件中规定属性类型;
    static childContextTypes = {
        title: PropTypes.string
    }
    
    // 父组件中规定通过context传递给子孙组件的值;
    getChildContext() {
        return {
            title: 'context transmit title'
        }
    }
    
    render() {
        return (
            <div id="contextusage">
                {/* 传统的方式进行子组件传值 */}
                {/* <Child title="home page content"></Child> */}

                <Child></Child>
            </div>
        )
    }
}
