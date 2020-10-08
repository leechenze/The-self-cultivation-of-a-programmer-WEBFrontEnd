import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div id="detail">
                详情页
                <br/>
                {this.props.routeParams.newId}
            </div>
        )
    }
}
