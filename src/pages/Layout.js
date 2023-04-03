import React, {useEffect, useLayoutEffect, useRef} from 'react';


function LayoutEffect(){
    const val = useRef(null);
    useLayoutEffect(() => {
        console.log(val.current.value);
    }, []);
    useEffect(() => {
        val.current.value = "hello world";
    }, [])
    return(
        <div>
            <h1>use useLayoutEffcet</h1>
            <p>React JS give a proyority to useLayoutEffcet</p>
            <input type="text" ref={val} value="layoutEffect ckeck" />
        </div>
    )
}

export default LayoutEffect;