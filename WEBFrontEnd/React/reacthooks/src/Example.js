import React, { Component, useState } from 'react';

// Class Component;
// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         }
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

// Function Component;
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