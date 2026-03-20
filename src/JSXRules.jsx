import React from 'react'

function JSXRules() {
    //JSX :- javascript XML

    let name="javascript"
    let imgUrl="temp.png";

    function demo(){
        return "hello"
        
    }

    function condition(){
        if(false){
            return <h2>welcome</h2>
        }
        else{
            return <h3> oops!!</h3>
        }
    }

    function parameter(name){
        return <h1> hello, {name}</h1>
    }
    return (
       <>
        {/* one parent element */}
        
        <h1>hello {name} </h1>
        

        {10+20}
        10 + 20

        {/* inlinecss  */}
        <h2 style={{backgroundColor:"blue",color:"pink"}}>Inline Css</h2>

        {/* always close tags */}
        {/* <img src="temp.png" alt="" /> */}
        {/* dynmaic img  */}
        {/* <img src={imgUrl} alt="" /> */}

        {/* <h1 className='title'> this is react js </h1> */}

        {/* conditional based css */}
        {/* <h1 className={true ? "dark":"light"}>hello, everyone</h1> */}

        {/* camelCase for events  */}
        {/* <button onClick={}>click me</button> */}
        
        <h1>{demo()}</h1>

        {condition()}

        {parameter("sheetal")}
        </>
    )
}

export default JSXRules
