import React, { useEffect, useState } from 'react'

function InterViewuseEffect() {
    const [count,setCount]= useState(0);

    // infinite loop
    useEffect(()=>{
        setCount(count+1);
    },[count]) 

    



    return (
        <>
         count : {count}
        <br />
        <button onClick={()=>setCount(count+1)}>count++ </button>
        </>
    )
}

export default InterViewuseEffect
