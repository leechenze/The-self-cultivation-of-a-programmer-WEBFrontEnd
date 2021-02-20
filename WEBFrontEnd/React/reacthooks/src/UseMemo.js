import React, { Component, useState, useEffect, useMemo } from 'react'

export default function UseMemo() {
    const [zuxian, setZuxian] = useState('zuxian is waiting for the guests')
    const [zhiling, setZhiling] = useState('Zhiling is waiting for the guests')

    return (
        <>
            <button onClick={() => { setZuxian(new Date().getTime()) }}>zuxian</button>
            <button onClick={() => { setZhiling(new Date().getTime() + '    zhiling came to me') }}>zhiling</button>

            <ChildCom name={zuxian}>
                {zhiling}
            </ChildCom>

        </>
    )
}

export function ChildCom({ name, children }) {
    // props中解构出(name和children);
    function changeZuxian(name) {
        console.log('Here her is, Zuxian came to me');
        return name + '      Zuxian came to me'
    }

    // const actionZuxian = useEffect(() => changeZuxian(name), [name]);
    const actionZuxian = useMemo(() => changeZuxian(name), [name]);

    // 此时用useMemo实现的是当点击志玲时不会触发祖贤;
    // 如果使用useEffect时, 就不会展示actionZuxian, 因为useEffect是在挂载和更新完成之后触发的函数
    
    return (
        <>
            <div>{actionZuxian}</div>
            <div>{children}</div>
        </>
    )
}