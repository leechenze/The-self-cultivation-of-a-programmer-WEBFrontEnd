import React, { Component } from 'react'

import "../assets/styles/HomePage.less"

import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Subject from '../components/Subject'
import ImgPackage from '../components/ImgPackage'
import SubList from '../components/SubList'


import { Flex, Tabs, List } from 'antd-mobile'

const tabs = [
    { title: '产品' },
    { title: '研发' },
    { title: '运营' }
];

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: tabs,
        }
    }

    render() {
        return (
            <div className="home-page">
                {/* Header */}
                <Header />
                {/* Carousel */}
                <Banner />
                {/* Subject */}
                <Subject />
                {/* SubList */}
                <SubList />
                {/* SubTab */}
                <div className="sub-tab">
                    <Tabs tabs={this.state.tabs}
                        initialPage={0}
                        useOnPan
                        animated
                    >
                        <div>
                            <div className="sub-tab-flex">
                                <Flex>
                                    <Flex.Item>
                                        <ImgPackage src="20191025091907842.gif" height={80} />
                                    </Flex.Item>
                                    <Flex.Item>
                                        <h3>11111性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用</h3>
                                        <p>
                                            <span>
                                                <i className="iconfont icon-shijian-xianxing"></i>
                                                <span>两小时前</span>
                                            </span>
                                            <span>
                                                <i className="iconfont icon-yanjing"></i>
                                                <span>23</span>
                                            </span>
                                        </p>
                                    </Flex.Item>
                                </Flex>
                            </div>
                            <List className="my-list">
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                            </List>
                        </div>
                        <div>
                            <div className="sub-tab-flex">
                                <Flex>
                                    <Flex.Item>
                                        <ImgPackage src="20191025091907842.gif" height={80} />
                                    </Flex.Item>
                                    <Flex.Item>
                                        <h3>22222性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用</h3>
                                        <p>
                                            <span>
                                                <i></i>
                                                两小时前
                                            </span>
                                            <span>
                                                <i></i>
                                                23
                                            </span>
                                        </p>
                                    </Flex.Item>
                                </Flex>
                            </div>
                            <List className="my-list">
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                            </List>
                        </div>
                        <div>
                            <div className="sub-tab-flex">
                                <Flex>
                                    <Flex.Item>
                                        <ImgPackage src="20191025091907842.gif" height={80} />
                                    </Flex.Item>
                                    <Flex.Item>
                                        <h3>33333性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用</h3>
                                        <p>
                                            <span>
                                                <i></i>
                                                两小时前
                                            </span>
                                            <span>
                                                <i></i>
                                                23
                                            </span>
                                        </p>
                                    </Flex.Item>
                                </Flex>
                            </div>
                            <List className="my-list">
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                                <List.Item arrow="horizontal" onClick={() => { }}>lightSonic is the largest institution in the world</List.Item>
                            </List>
                        </div>
                    </Tabs>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        )
    }
}
