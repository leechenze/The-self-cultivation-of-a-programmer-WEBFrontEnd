## 博学之, 审问之, 慎思之, 明辨之, 笃行之;
## 壹、贰、叁、肆、伍、陆、柒、捌、玖、拾;


### Example Hello World;

    import React, { Component, useState } from 'react';

    Class Component;
    class Example extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            }
        }
        addCount() {
            this.setState({
                count: this.state.count + 1
            })
        }
        render() {
            return (
                <div>
                    <p>You clicked {this.state.count} times</p>
                    <button onClick={this.addCount.bind(this)}>clickMe</button>
                </div>
            )
        }
    }

    Function Component;
    function Example() {
        const [count, setCount] = useState(0);
        return (
            <div>
                <p>You Clicked {count} times</p>
                <button onClick={() => { setCount(count + 1) }}>ClickMe</button>
            </div>
        )
    }

    export default Example

### UseState;

    import React, { Component, useState } from 'react'

    function UseState() {
        const [age, setAge] = useState(18);
        const [sex, setSex] = useState('man');
        const [job, setJob] = useState('JavaScript Developer');
        return (
            <div>
                <p>Lee age`s : &emsp; {age}</p>
                <p>Lee sex`s : &emsp; {sex}</p>
                <p>Lee job`s : &emsp; {job}</p>
            </div>
        )
    }

    export default UseState;

### UseEffect;

    解决生命周期问题;
        在16.8版本更新之前, 本是通过生命周期钩子实现的操作, 在Hook特性中即用UseEffect来实现;

        第二个参数:
        如果第二参数为空, 那么在任何操作组件生命周期的时候都会执行解绑
        如果第二参数为空数组, 那么在任何操作组件生命周期的时候都不会执行解绑
        如果第二参数为数组中制定的某个变量, 那么只有在这个变量更新时才会触发解绑;
    
    useEffect(() => {
        此时执行期为挂载和更新钩子;
        console.log('useEffect ==> join List Page');
        return () => {
            解绑: 此时执行销毁钩子;
            console.log('useEffect ==> leave List Page');
        }
    }, [])

### UseContext;

    解决父子组件传值问题;
        在 Class 生命组件时 需要使用props 进行父子组件传值;
        那么在Hook 中的 Funciton 组件中 就是通过UseContext来进行组件的传值的;
        
        useReducer解决的是状态共享的问题, 相当于Redux, 经常与useContext使用所以容易混淆
        概念比较抽象, 注意区分作用;

    import React, { Component, useState, createContext, useContext } from 'react'

    const CountContext = createContext();

    function UseContextChild() {
        let count = useContext(CountContext);
        return <h1>{count}</h1>
    }

    function UseContextFather() {
        const [count, setCount] = useState(0);
        return (
            <div>
                <p>You Clicked {count} times</p>
                <button onClick={() => { setCount(count + 1) }}>ClickMe</button>

                <CountContext.Provider value={count}>
                    <UseContextChild></UseContextChild>
                </CountContext.Provider>
                
            </div>
        )
    }

    export default UseContextFather;


    

### UseReducer;

    import React, {useReducer} from 'react';

    function ReducerDemo() {
        const [count, dispatch] = useReducer((state, action) => {
            console.log(state, action);
            switch(action) {
                case 'add':
                    return state + 1;
                case 'sub':
                    return state - 1;
                default:
                    return state;
            }
        }, 0)
        
        return (
            <div>
                <h1>Now the Count`s {count}</h1>
                <button onClick={() => {dispatch('add')}}>Increment</button>
                <button onClick={() => {dispatch('sub')}}>Decrement</button>
            </div>
        )
        
    }

    export default ReducerDemo;

