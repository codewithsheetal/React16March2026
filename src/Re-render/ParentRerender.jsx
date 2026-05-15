import React, { useState } from 'react'
import ChildRerender from './ChildRerender'

function ParentRerender() {

    const [count,setCount]=useState(0);
    console.log("parent render");
    
    return (
        <>
        <h1>parent comp</h1>
        <h1>count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>count </button>
        <ChildRerender name="sheetal"/>
        </>
    )
}

export default ParentRerender
