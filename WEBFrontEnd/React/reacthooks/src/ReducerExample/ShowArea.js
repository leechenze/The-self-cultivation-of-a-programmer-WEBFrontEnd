import React, {useContext} from 'react';
import {ColorContext} from './Color';

export default function ShowArea() {
    const {color} = useContext(ColorContext);
    return (
        <div style={{color: color}}>The FontStyle`s {color}</div>
    )
}