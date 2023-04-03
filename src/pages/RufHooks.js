import React, {useRef, useState} from 'react';


function RufHooks(){
    const inputRef = useRef(null);
    const [show, setShow] = useState("");
    const onClick = () =>{
        setShow(inputRef.current.value);
        inputRef.current.value = ("");

    }
    return(
        <div>
            <h1>use Ref</h1>
            <h3>{show}</h3>
            <div className='inline'>
                <input type="text" ref={inputRef}  className='input'/>
                <button onClick={onClick}>Click</button>
            </div>
        </div>
    )
}

export default RufHooks;