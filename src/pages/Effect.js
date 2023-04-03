import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Effect(){
    const [data, setData] = useState("");
    const [counter, setCount] = useState(0);
    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then(response =>{setData(response.data[0].email); console.log("Response")});
    }, [])
    return(
        <div>
            <h1>hello {data} </h1>
            <h2>{counter}</h2>
            <button onClick={()=>{
                setCount(counter + 1);
            }}>click</button>
        </div>
    )
}

export default Effect;