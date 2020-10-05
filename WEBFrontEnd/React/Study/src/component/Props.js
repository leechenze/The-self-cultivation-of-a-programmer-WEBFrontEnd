import React, { Component } from 'react'

// 子组件
class Header extends Component {

    static defaultProps = {
        bgc: 'brown',
        title: 'default title'
    }
    
    render() {
        return (
            <header style={{width: '100%', height: '60px', lineHeight: '60px', backgroundColor: this.props.bgc}}>
                {this.props.title}
                <span style={{width: '100px', display: 'inline-block'}}></span>
                {this.props.children}
            </header>
        )
    }
}





// 父组件
export default class Props extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'home page title',
        }
    }
    render() {
        return (
            <div id="props">
                <Header title={this.state.title} bgc="#cff"/>
                <Header title="about page title" bgc="pink"/>
                <Header>parent assembly content</Header>
            </div>
        )
    }
}
