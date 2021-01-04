import React, { Component } from 'react'
import { connect } from 'react-redux'

class App2 extends Component {
    render() {
        return (
            <div>
                
                <p>{this.props.myNum}</p>
                {/* 2、书写点击事件 ，要在以前的this后面加多.props*/}
                <button onClick={this.props.handelClick.bind(this)}>增加</button>     
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myNum: state.num1
    }
}

// 1、事件写在mapDispatchToProps函数中
const mapDispatchToProps = (dispatch) => {
    return {
        handelClick(e){
            //3、 调用dispatch(action)，将管理状态的方案传当做参数
            let action = {
                type:'up',
                //这里其实修改的是props中的myNum
                value:this.props.myNum+1
            }
            dispatch(action)
        }
    }
}

// connect(展示数据的函数,改变数据的函数)(组件类名)
export default connect(mapStateToProps,mapDispatchToProps)(App2)
