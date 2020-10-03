import React, { Component } from 'react'

export default class ComponentLifecycle extends Component {

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // 第一阶段: 挂载期;
    
    constructor(props) {
        // 调用回父类(Component)的constructor方法, 传递参数props, 让props属性生效;
        super(props);
        this.state = {
            num: 20,
        }

        this.handleClick = this.handleClick.bind(this);
        console.log('挂载期 constructor执行 初始化组件');
    };
    
    handleClick() {
        console.log('点击按钮');
    }

    componentWillMount() {
        console.log('挂载期 componentWillMount执行 挂载之前执行');
    }
    componentDidMount() {
        console.log('挂载期 componentDidMount执行 挂载之后执行');
    }
    
    render() {
        console.log('挂载期 render执行 渲染标签到页面上, 填充数据到标签中');
        return (
            <div id="componentlifecycle">
                <p>{this.state.num}</p>
                <button onClick={this.handleClick}>btn</button>
            </div>
        )
    }




    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // 第二阶段: 更新期;

    componentWillReceiveProps() {
        console.log('更新期 componentWillReceiveProps执行 组件接收props之前');
    }    

    shouldComponentUpdate(nextProps, nextState) {
        // 减少不必要的render, 优化更新性能;
        console.log('更新期 shouldComponentUpdate执行 判断更新期时候的新值和原来的值是否发生了改变');
        // 如果发生了改变就返回true (返回true会重新执行一边render);
        // 如果未发生改变则返回false (返回false不再重新执行render渲染函数);
        console.log('原值为' + this.state.num);
        console.log('新值为' + nextState.num);

        return (this.state.num !== nextState.num ? true : false);

    }

    componentWillUpdate() {
        console.log('更新期 componentWillUpdate执行 更新前执行');
    }

    componentDidUpdate() {
        console.log('更新期 componentDidUpdate执行 更新后执行');
    }

    handleClick() {
        this.setState({
            num: this.state.num,
            // num: this.state.num + 1,
        })
    }
    
    render() {
        console.log('挂载期/更新期 render执行 渲染标签到页面上, 填充数据到标签中');
        return (
            <div id="componentlifecycle">
                <p>{this.state.num}</p>
                <button onClick={this.handleClick}>btn</button>
            </div>
        )
    }
    
}
