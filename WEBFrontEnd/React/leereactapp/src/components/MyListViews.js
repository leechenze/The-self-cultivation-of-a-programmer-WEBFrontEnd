import React, { Component } from 'react'
import { ListView } from 'antd-mobile';
import SubListMainItem from './SubListMainItem'






const list_views_data = [
    {
        img: 't0110974b6f051c1e5a.gif',
        title: '用于构建用户界面的 JavaScript 库',
        des: 'React 使创建交互式 UI 变得轻而易举',
    },
    {
        img: 't0177ec8627c04e438b.gif',
        title: '小米新品发布会定档 MIX新品亮相',
        des: 'Yeelight智能LED灯丝灯发布：复古设计 亮度可调',
    },
    {
        img: 't0135a6567622271196.gif',
        title: 'iPhone11开始出货 本周五发售',
        des: '首批售卖的iPhone 11、iPhone 11 Pro和iPhone 11 Pro Max已经从工厂送出',
    },
];



export default class MyListViews extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
        };
    }

    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        // simulate initial Ajax
        setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(list_views_data),
                isLoading: false,
            });
        }, 600);
    }

    renderRow(obj) {
        // 这个obj 即是 this.state.dataSource, Antd库默认封装的;
        return (
            <SubListMainItem ItemObj={obj} />
        )
    }


    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                // renderHeader={() => <span>header</span>}
                // renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                //     {this.state.isLoading ? 'Loading...' : 'Loaded'}
                // </div>)}

                renderRow={this.renderRow}
                className="am-list"
                // pageSize={4}
                useBodyScroll
            // onScroll={() => { console.log('scroll'); }}
            // scrollRenderAheadDistance={500}
            // onEndReached={this.onEndReached}
            // onEndReachedThreshold={10}
            />
        );
    }
}
