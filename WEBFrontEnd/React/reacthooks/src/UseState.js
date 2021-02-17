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