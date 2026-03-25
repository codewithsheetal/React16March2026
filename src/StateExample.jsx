import React, { useState } from 'react'

function StateExample() {

    // const [state,setState]=useState(initialvalue)
    console.log("render");

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    const [name, setName] = useState("");

    // setCount(count+1);

    function handleCount() {
        setCount(count + 10);
        console.log(count);

    }

    return (
        <>
            <h1>State comp</h1>
            <h2>count : {count} </h2>
            {/* <button onClick={()=>setCount(count+1)}>Count ++ </button> */}

            <button onClick={handleCount}>Count++ function </button>

            <button onClick={() => {
                setCount(count + 1)
                setCount(count + 1)
                setCount(count + 1)
                setCount(count + 1)
                setCount(count + 1)
            }}>
                Inc by 5
            </button>


            <button onClick={() => {
                setCount(count => count + 1) // count = 0+1
                setCount(count => count + 1) // count = 1+1
                setCount(count => count + 1) // count = 2+1
                setCount(count => count + 1) // count = 3+1
                setCount(count => count + 1) // count = 4+1 

            }}>
                Inc By 5
            </button>

            <button onClick={() => setFlag(!flag)}> display h2 tag</button>
            {/* !(true)= false
        !(false)= true */}

            {flag && <h2> hello, everyone </h2>}

        </>
    )
}

export default StateExample
