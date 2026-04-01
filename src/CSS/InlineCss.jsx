import React from 'react'

function InlineCss() {
    let isActive= false;
    return (
        <>
        <h1 style={{color:'red', backgroundColor:"beige"}}>Hello, This is Inline CSS comp</h1>

        {/* condition css  */}

        <h2 style={{backgroundColor: isActive ? "green":"red" }}>Condition base</h2>

        {/* <h2 className={ isActive ? "active":"inactive" }>Condition base</h2> */}


        </>
    )
}

export default InlineCss
