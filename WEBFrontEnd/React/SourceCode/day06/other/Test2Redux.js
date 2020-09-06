/*
   redux基础
*/
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'



// 请一个仓库管理员，必须是一个函数
const reducer = (state, action) => {
    console.log("执行了reducer函数")
    console.log(state, action)
    // 7、回到reducer函数，深拷贝action对象到newState，并返回
    //(此时只是reducer中的参数state发生了变化，而视图组件中的state没有改变，第8步将处理组件中的state)
    if(action.type === "up"){
        let newState = JSON.parse(JSON.stringify(state))
        newState.num1 = action.value
        return newState
    }
    // 1、定义初始state
    return {
        num1: 20
    }
}

//创建一个仓库， 把仓库管理员添请来管理这个仓库
// 2、创建store仓库
const store = createStore(reducer)



export default class App extends Component {
    constructor(props){
        super(props)

        // console.log(store.getState())
        // 3、在constructor中，获取初始state
        this.state = store.getState()
        this.changeNumUp = this.changeNumUp.bind(this)

        // 8、store订阅，一旦store数据发生改变，则执行storeChange函数里面的代码
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    render() {
        return (
            <div >
                {/* 4、 书写组件，填入数据 */}
                <p>{this.state.num1} </p>
                {/* 5、业务：点击让num1自增 */}
                <button onClick={this.changeNumUp}>增加</button>     
            </div>
        )
    }

    changeNumUp(e){
        // 6、改变数据的时候 需要调用store的dispatch方法，把新的值作为放在对象中传进去
        // 每次调用dispatch, 会在内部调用 图书管理员函数reducer
        const action = {
            type:'up',
            value:this.state.num1+1
        }
        store.dispatch(action)  // 每次调用dispatch, 会在内部调用 图书管理员函数reducer
    }

    storeChange(e){
        this.setState(store.getState())
    }
    
}


ReactDOM.render(
    <App />
    , document.getElementById('root'));