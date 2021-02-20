import React, { useState, useEffect, useCallback } from 'react'

// 自定义hook函数;
export function useWinSize() {

    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        heigth: document.documentElement.clientHeight,
    })

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            heigth: document.documentElement.clientHeight,
        })
    }, []);

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    },[]);

    return size;   
    
}

export default function Index() {

    const size = useWinSize();
    
    return(
        <>
            PageClientSize: {size.width} * {size.heigth}
        </>
    )
}
