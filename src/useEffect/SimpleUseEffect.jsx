import React, { useEffect, useState } from 'react'

function SimpleUseEffect() {
    const [count,setCount]= useState(0);
    const [countby5,setCountbyFive]= useState(0);

    // useEffect (()=>{
    //     //code
    // },[])

    function demo(){
        console.log("call this function once");
    }
    // demo();

    //run on every render
    // useEffect(()=>{
    //     demo();
    // })


    //run only once
    // useEffect(()=>{
    //     demo();
    // },[])

    // call when count change
    useEffect(()=>{
        demo();
    },[count])

    return (
        <>
        count : {count}
        <br />
        <button onClick={()=>setCount(count+1)}>count++ </button>
        <button onClick={()=>setCountbyFive(countby5+5)}>count inc by 5 </button>
        </>
    )
}

export default SimpleUseEffect
