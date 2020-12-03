import React, { Component } from 'react'
import {Flex} from 'antd-mobile'
import "../assets/styles/Subject.less"

export default class Subject extends Component {
    render() {
        return (
            <div className="subject">
                    {/* 第一行 */}
                    <Flex justify="center">
                        <Flex.Item>
                            <a href="#">
                                <i style={{backgroundPositionX: '0px'}}></i>
                                <p>JavaScript</p>
                            </a>
                        </Flex.Item>
                        <Flex.Item>
                            <a href="#">
                                <i style={{backgroundPositionX: '-50px'}}></i>
                                <p>JavaScript</p>
                            </a>
                        </Flex.Item>
                        <Flex.Item>
                            <a href="#">
                                <i style={{backgroundPositionX: -100}}></i>
                                <p>JavaScript</p>
                            </a>
                        </Flex.Item>
                        <Flex.Item>
                            <a href="#">
                                <i style={{backgroundPositionX: -150}}></i>
                                <p>JavaScript</p>
                            </a>
                        </Flex.Item>
                    </Flex>
                    {/* 第二行 */}
                    <Flex justify="center">
                        <Flex.Item>
                            <a href="#">
                                <i style={{backgroundPositionX: -200}}></i>
                                <p>JavaScript</p>
                            </a>
                        </Flex.Item>
                        <Flex.Item>
                            <a href="#">
                                <i style={{backgroundPositionX: -250}}></i>
                                <p>JavaScript</p>
                            </a>
                        </Flex.Item>
                        <Flex.Item>
                            <a href="#">
                                <i style={{backgroundPositionX: -300}}></i>
                                <p>JavaScript</p>
                            </a>
                        </Flex.Item>
                        <Flex.Item>
                            <a href="#">
                                
                            </a>
                        </Flex.Item>
                    </Flex>
            </div>
        )
    }
}
