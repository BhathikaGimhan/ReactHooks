import React, { useRef } from 'react';
import Button from './Button';

function ImperativeHandle(){
    const Buttonref = useRef(null);
    return(
        <div>
            <h1>use ImperativeHandle</h1>
            <button onClick={()=>{Buttonref.current.alterToggle()}}>Click-perant</button>
            <Button ref={Buttonref}/>
        </div>
    )
}

export default ImperativeHandle;