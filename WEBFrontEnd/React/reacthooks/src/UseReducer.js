import React, {useReducer} from 'react';

function ReducerDemo() {
    const [count, dispatch] = useReducer((state, action) => {
        console.log(state, action);
        switch(action) {
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default:
                return state;
        }
    }, 0)
    
    return (
        <div>
            <h1>Now the Count`s {count}</h1>
            <button onClick={() => {dispatch('add')}}>Increment</button>
            <button onClick={() => {dispatch('sub')}}>Decrement</button>
        </div>
    )
    
}

export default ReducerDemo;