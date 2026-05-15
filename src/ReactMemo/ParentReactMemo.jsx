import React, { useState } from 'react'
import ChildReactMemo from './ChildReactMemo'

function ParentReactMemo() {
    const [count,setCount]=useState(0)
    console.log("parent");
    
    return (
        <>

        <button onClick={()=>setCount(count+1)}>click me</button>

        <ChildReactMemo />
        </>
    )
}

export default ParentReactMemo
