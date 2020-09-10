// JSX语法

import React, {Component} from 'react';
import './assets/css/JSXSyntax.css';
import QqImage1 from './assets/images/QQImage1.png';

export default class Jsxsyntax extends Component {
    render () {
        return (
            <div id="jsxsyntax">
                
                {/* 注释内容 */}
                <p style={{color: 'red', fontSize: '30px'}}>Jsx Syntax attention matters</p>
                <p className="p">Jsx Syntax attention matters</p>
                <img src={QqImage1} alt="" width="500px" />
                <br/><br/><br/>
                <label htmlFor="username">
                    用户名: <input type="text" id="username" />
                </label>
            </div>
        )
    }
}