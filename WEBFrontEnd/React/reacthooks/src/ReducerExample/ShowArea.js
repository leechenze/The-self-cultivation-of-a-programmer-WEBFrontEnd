import React, {useContext} from 'react';
import {ColorContext} from './Color';

export default function ShowArea() {
    const {color} = useContext(ColorContext);
    console.log(color);
    return (
        <div style={{color: color}}>The FontStyle`s {color}</div>
    )
}