import React, { Component } from 'react';
import './assets/css/tab.css';
export default class TabColumnExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 2
        }
    }

    handleClick(curIndex) {
        this.setState({
            num: curIndex
        })
    }
    
    render() {
        return (
            <div className="tabcolumnexample">
                <div className="tab_btns">
                    <input type="button" value="按钮1" className={this.state.num === 1 ? "active" : ''} onClick={this.handleClick.bind(this, 1)} />
                    <input type="button" value="按钮2" className={this.state.num === 2 ? "active" : ''} onClick={this.handleClick.bind(this, 2)} />
                    <input type="button" value="按钮3" className={this.state.num === 3 ? "active" : ''} onClick={this.handleClick.bind(this, 3)} />
                </div>
                <div className="tab_cons">
                    <div className={this.state.num === 1 ? "current" : ''} >按钮1对应的内容</div>
                    <div className={this.state.num === 2 ? "current" : ''} >按钮2对应的内容</div>
                    <div className={this.state.num === 3 ? "current" : ''} >按钮3对应的内容</div>
                </div>
            </div>
        )
    }
}