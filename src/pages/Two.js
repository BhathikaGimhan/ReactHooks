import React, { useReducer } from 'react';
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1, reshowText: state.showText };
        case 'decrement':
            return {count: state.count - 1, reshowText:!state.showText};
        case 'text':
            return {count: state.count , reshowText:!state.text};
        case 'clear':
            return {count: state.count, reshowText:state.text};
        // eslint-disable-next-line no-unused-expressions
        default: state;
    }
}
const ReducerText = () =>{
    const [state, dispatch] = useReducer(reducer, { count: 0, text: true })

    return (
        <div>
            <h1>Count: {state.count}{ state.reshowText && <b>hello</b> }</h1>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => {
                dispatch({type: 'text'}); dispatch({type: 'clear'})}}>text</button>
        </div>    
    )
}
export default ReducerText;
            