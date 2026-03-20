import React from 'react'

function Events() {

    function handleClick(){
        console.log("button is clicked");
        
    }
    function handleArg(a){
        console.log("handle arg button is clicked",a);
        
    }
    function handleChange(event){
        // console.log(event);
        console.log(event.target.value);
        
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("form submitted ");
        
    }
    return (
        <>
        {/* html way  */}
        {/* <button onclick="method()">click me</button> */}

        {/* function call now  */}
        {/* <button onClick={handleClick()}> click me </button> */}

        {/* correct way */}
        <button onClick={handleClick}> click me </button>
        <button onClick={()=>handleClick()}> click me </button>

        {/* argument  */}
        {/* wrong way */}
        {/* <button onClick={handleArg(4)}> click me arg</button> */}

        <button onClick={()=>handleArg(4)}> click me arg</button>

        {/* inline event handling  */}

        <button onClick={()=>alert("hey!!")}> open Alert box </button>

        <input type="text" onChange={handleChange} />

        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">submit</button>
        </form>


        </>
    )
}

export default Events
