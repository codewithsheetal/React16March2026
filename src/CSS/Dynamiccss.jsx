import React, { useState } from 'react'

function Dynamiccss() {
    // const [color,setColor]= useState(true);
    const [color,setColor]= useState("red");

    function handleClick(){
        setColor(!color)
      
    }
    
    return (
        <>
        {/* <h1 style={{color: color? "green":"red" }}> Dynamic CSS </h1> */}
        <h1 style={{color: color }}> Dynamic CSS </h1>

        {/* <button onClick={()=>setColor("green")}> Change color </button> */}

        <button onClick={()=>setColor(prev => prev === "red" ? "green" : "red")}> Change color green to red to green </button>
        {/* <button onClick={handleClick}> Change color green to red to green </button> */}
        </>
    )
}

export default Dynamiccss
