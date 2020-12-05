import React, { Component } from 'react'
import ImgPackage from './ImgPackage'
import { Flex } from 'antd-mobile'

export default class SubListItem extends Component {
    render() {
        return (
            <Flex>
                <Flex.Item>
                    <ImgPackage src={this.props.ItemObj.img} height={80} />
                </Flex.Item>
                <Flex.Item>
                    <h3>{this.props.ItemObj.title}</h3>
                    <p>{this.props.ItemObj.des}</p>
                </Flex.Item>
            </Flex>
        )
    }
}
