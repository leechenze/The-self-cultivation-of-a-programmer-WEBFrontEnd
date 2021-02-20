import React, { Component, useEffect, useState, useRef } from 'react'

export default function UseRef() {
    const inputEle = useRef(null);
    const showFont = () => {
        inputEle.current.value = 'Hello Lee';
    }

    const [text, setText] = useState('Lee');
    const textRef = useRef();

    useEffect(() => {
        textRef.current = text;
        console.log('textRef.current: ', textRef.current);
    })
    
    
    return (
        <>
            <input ref={inputEle} type="text" />
            <button onClick={showFont}>showFont in inputBox</button>
            <br/><br/>
            <input value={text} type="text" onChange={(e) => {setText(e.target.value)}} />
        </>
    )
}