import React,{Component} from 'react';

let name = 'clinton',
    age = 20,
    list = [10, 20, 30, 40];
export default class TernaryVarArray extends Component {
    render () {
        return (
            <div id="ternaryvararray">
                <p>姓名: {name}</p>
                <p>年龄: {age}</p>
                <p>是否大于十八岁: {age > 18 ? '是':'否'}</p>


                <ul>
                    {
                        list.map((item, ind) => {
                            return (
                                <li key={ind}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}