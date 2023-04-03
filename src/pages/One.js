import React, { useState } from 'react';

export default function One(){
    const [counter, setCounter] = useState(0);
    const [showText, setShowText] = useState(true);
    const less = () => {
        setCounter(counter - 1);
        setShowText(!showText);
    }
    const [message, setMessage] = useState('');
    const changes = (e) => {
        const newValue = e.target.value;
        setMessage(newValue);
    }
    const [news, hello] = useState('');

    const send = (e) => {
        e.preventDefault();
        hello(message);
        setMessage('');
    }

    return (
        <div>
            <div className="Number-component">
            <p>{ counter } {showText && <b>:::</b>}</p>
                <div className='inline'>
                    <button className="btn-one" onClick={() => {
                        setCounter(counter + 1);
                        setShowText(!showText);
                    }}>max</button>
                    <button className="btn-one" onClick={less}>less</button>
                    
                </div>
                
            </div>
            <hr />
            <div>
                <p>{ message }</p>
                <p>{ news }</p>
                <input type="text" onChange={changes}/>
                <button className="btn-one" onClick={send} >click</button>
            </div>
        </div>
    )
}
