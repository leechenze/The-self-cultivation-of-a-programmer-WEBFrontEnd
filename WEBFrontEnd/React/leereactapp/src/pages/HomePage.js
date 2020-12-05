import React, { Component } from 'react'

import "../assets/styles/HomePage.less"

import Header from '../components/Header'
import Banner from '../components/Banner'
import Subject from '../components/Subject'
import ImgPackage from '../components/ImgPackage'

import { Flex, Tabs, List } from 'antd-mobile'

const tabs = [
    { title: '产品' },
    { title: '研发' },
    { title: '运营' }
];

const sub_list_data = [
    {
        img: 't0110974b6f051c1e5a.gif',
        title: '用于构建用户界面的 JavaScript 库',
        des: '组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离',
    },
    {
        img: 't0177ec8627c04e438b.gif',
        title: '渐进式的JavaScript 框架',
        des: '不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩',
    },
    {
        img: 't0135a6567622271196.gif',
        title: '一套框架多种平台 移动端&桌面端',
        des: '学会用 Angular 构建应用，把这些代码和能力复用在多种不同平台的应用上',
    },
    {
        img: 't0110974b6f051c1e5a.gif',
        title: '用于构建用户界面的 JavaScript 库',
        des: '组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离',
    },
    {
        img: 't0177ec8627c04e438b.gif',
        title: '渐进式的JavaScript 框架',
        des: '不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩',
    }
];

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sub_list_data: sub_list_data,
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
                <div className="sub-list">
                    <div className="sub-list-header">相关咨询</div>
                    <div className="sub-list-main">
                        {
                            this.state.sub_list_data.map((val, ind) => {
                                return (
                                    <div className="sub-list-main-item" key={ind}>
                                        <Flex>
                                            <Flex.Item>
                                                <ImgPackage src={val.img} height={80} />
                                            </Flex.Item>
                                            <Flex.Item>
                                                <h3>{val.title}</h3>
                                                <p>{val.des}</p>
                                            </Flex.Item>
                                        </Flex>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
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
            </div>
        )
    }
}
