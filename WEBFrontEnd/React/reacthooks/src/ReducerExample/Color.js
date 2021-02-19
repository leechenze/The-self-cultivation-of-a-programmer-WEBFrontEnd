import React, { Component, createContext, useContext, useReducer } from 'react'
import UseState from '../UseState';

export const ColorContext = createContext();

export const UPDATE_COLOR = "UPDATE_COLOR";

export const Color = props => {

    const [color, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case UPDATE_COLOR:
                return action.color;
            default:
                return state;
        }
    }, 'blue')
    
    return (
        // <ColorContext.Provider value={{color:color, dispatch:dispatch}}>
        <ColorContext.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}


// 此处为ES的简写语法, {value: value, dispatch: dispatch}

export default Color;