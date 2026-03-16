import React from 'react'

function Twocomp() {
    return (
        <>
        <h1>two comp</h1>
        </>
    )
}

 function Header(){
    return(<>
    <h1>header comp</h1>
    </>)
}
 function Footer(){
    return(<>
    <h2>footer comp</h2>
    </>)
}

function Xyz(){
    return(<>
    <h1> pvt</h1>
    </>)
}
export default Twocomp // default export
export {Header,Footer} // named export 
