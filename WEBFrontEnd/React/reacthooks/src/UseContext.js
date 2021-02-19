import React, { Component, useState, createContext, useContext } from 'react'

const CountContext = createContext();

function UseContextChild() {
    let count = useContext(CountContext);
    console.info(count);
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