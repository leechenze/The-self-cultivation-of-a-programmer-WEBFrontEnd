import React, { Component } from 'react'

export default class ImgPackage extends Component {
    render() {
        return (
            <div className="img-package">
                <img src={require(`../assets/images/${this.props.src}`)} height={this.props.height} />
            </div>
        )
    }
}
