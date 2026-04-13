import React, { useEffect, useRef, useState } from 'react'

function StorePrevValue() {
    
    const [count,setCount]=useState(0);
    const prevCount = useRef(null)

    //after render
    useEffect (()=>{
        console.log(prevCount);  // prevCount = {current:null}
        
        prevCount.current = count;
    },[count])


    return (
        <>
        <h1>current Count : {count}</h1>
        <h1>Prev Count : {prevCount.current}</h1>

        <button onClick={()=>setCount(count+1)}>count ++</button>
        </>
    )
}

export default StorePrevValue

// first render 
// count =0 
// prevcount = null

// prevCount=0

// second render 
// count =1 
// prevCount= 0

// prevCount =1
