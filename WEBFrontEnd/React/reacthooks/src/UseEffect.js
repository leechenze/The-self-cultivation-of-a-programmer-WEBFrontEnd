import React, { Component, useState, useEffect } from 'react'

// Class Components
// class UseEffect extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//     componentDidMount() {
//         console.log(`componentDidMount => You clicked ${this.state.count} times`)
//     }
//     componentDidUpdate() {
//         console.log(`componentDidUpdate => You clicked ${this.state.count} times`)
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
function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect => You clicked ${count} times`)
    })
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>ClickMe</button>
        </div>
    )
}

export default UseEffect;