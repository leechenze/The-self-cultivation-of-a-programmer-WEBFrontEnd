import React, { Component } from 'react'
// 引入prop-types(props类型验证);
import PropTypes from 'prop-types'

class Header extends Component {

    static propTypes = {
        // 要验证的属性名;
        // title: PropTypes.string,
        title: PropTypes.number,
    }
    
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default class VerifyPropsValueType extends Component {
    render() {
        return (
            <div id="verifypropsvaluetype">
                <Header title={123}></Header>
            </div>
        )
    }
}
