import React, { Component } from 'react'
import { connect } from 'react-redux'

class App1 extends Component {
    render() {
        return (
            <div>
                {/* 4、改写this.state.myNum为this.props.myNum */}
                <p>{this.props.myNum}</p>
                <button>增加</button>     
            </div> 
        )
    }
}

// 3、定义state数据转props数据的函数
const mapStateToProps = (state) => {
    return {
        myNum: state.num1
    }
}
// 2、使用connect完成连接组件，并把state数据转props数据
export default connect(mapStateToProps,null)(App1)
