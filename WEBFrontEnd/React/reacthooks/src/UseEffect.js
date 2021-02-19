import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Class Components

// class UseEffect extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//     componentDidMount() {
//         console.log(`componentDidMount ==> You clicked ${this.state.count} times`)
//     }
//     componentDidUpdate() {
//         console.log(`componentDidUpdate ==> You clicked ${this.state.count} times`)
//     }
//     addCount() {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>clickMe</button>
//             </div>
//         )
//     }
// }











// Function Components

// HomePage
function Home() {
    useEffect(() => {
        console.log('useEffect ==> join Home Page');
        return () => {
            console.log('useEffect ==> leave Home Page');
        }
        // 第二个为空数组的参数如不添加时, 即便是但点击计数累加时也会触发;
    }, [])
    return <h2>HomePage</h2>
}
// ListPage
function List() {
    useEffect(() => {
        console.log('useEffect ==> join List Page');
        return () => {
            console.log('useEffect ==> leave List Page');
        }
        // 第二个为空数组的参数如不添加时, 即便是但点击计数累加时也会触发;
    }, [])
    return <h2>ListPage</h2>
}

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect ==> You clicked ${count} times`)
        return () => {
            console.log(`================================`)
        }
    }, [count]);
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>ClickMe</button>
            
            <Router>
                <ul>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="list">List</Link>
                    </li>
                </ul>
                <Route path="/home" exact component={Home} />
                <Route path="/list" exact component={List} />
            </Router>
        </div>
    )
}

export default UseEffect;