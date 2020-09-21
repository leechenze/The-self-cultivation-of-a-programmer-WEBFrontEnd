import React, { Component } from 'react'

export default class KeyUsage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                { id: 1, value: '第一个值' },
                { id: 2, value: '第二个值' },
                { id: 3, value: '第三个值' },
            ]
        }

    }

    handlerClick() {
        this.setState({
            list: [
                { id: 4, value: '第四个值' },
                { id: 1, value: '第一个值' },
                { id: 2, value: '第二个值' },
                { id: 3, value: '第三个值' },
            ]
        })
    }

    render() {
        return (
            <div id="keyusage">
                <button onClick={this.handlerClick.bind(this)}>button</button>
                <ul>
                    {
                        this.state.list.map((item, ind) => {
                            return (
                                // key值作用: 在项目中一般指定的是当前的id值, 有利于提高更新效率, 减少不必要的DOM操作;
                                // <li key={ind}>
                                <li key={item.id}>
                                    {item.value}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
