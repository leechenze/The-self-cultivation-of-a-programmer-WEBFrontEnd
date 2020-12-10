import React, { Component } from 'react'
import SubListMainItem from '../components/SubListMainItem'





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

export default class SubList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sub_list_data: sub_list_data,
        }
    }
    render() {
        return (
            <div className="sub-list">
                <div className="sub-list-header">相关咨询</div>
                <div className="sub-list-main">
                    {
                        this.state.sub_list_data.map((val, ind) => {
                            return (
                                <SubListMainItem key={ind} ItemObj={val} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
