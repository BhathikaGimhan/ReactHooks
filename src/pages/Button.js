import React, { forwardRef, useImperativeHandle, useState } from "react"

const Button = forwardRef((props, ref) =>{
    const [toggle, setToggle] = useState(false);
    useImperativeHandle(ref, () => ({
        alterToggle(){
            setToggle(!toggle);
        }
    }));
    return (
        <div>
            <button onClick={()=>{setToggle(!toggle)}}>Click-child</button>
            {toggle && <p>hello</p>}
        </div>
    )
})
export default Button;
    