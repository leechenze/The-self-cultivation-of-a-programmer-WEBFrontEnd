import React, { Component } from 'react'

// 受控组件
export default class Controlled extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            usernameval: '',
        }
        
    }

    handleChange(e) {
        this.setState({
            usernameval: e.target.value,
        })
    }

    render() {
        return (
            <div id="controlled">
                用户名: <input type="text" value={this.state.usernameval} onChange={this.handleChange.bind(this)}/><br/>
                密&nbsp;&nbsp;&nbsp;&nbsp;码: <input type="passworld" /><br/>
                <input type="button" value="登陆"/>
            </div>
        )
    }
}





// 不受控组件;
// export default class UnControlled extends Component {

//     handleClick() {
//         console.log(this.refs.username);
//         console.log(this.refs.passworld);
//     }

//     render() {
//         return (
//             <div id="uncontrolled">
//                 用户名: <input type="text" ref="username" /><br/>
//                 密&nbsp;&nbsp;&nbsp;&nbsp;码: <input type="passworld" ref="passworld" /><br/>
//                 <input type="button" value="登陆" onClick={this.handleClick.bind(this)}/>
//             </div>
//         )
//     }
// }
