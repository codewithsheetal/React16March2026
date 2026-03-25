import React from 'react'

// function ChildCompprops(props) {
function ChildCompprops({name,id,username="guest"}) {
    
    return (
        <>
        {/* <h2>child comp props - {props.name} -{ props.id}</h2> */}
        <h2>child comp props - {name} -{id}-{username}</h2>
        </>
    )
}

export default ChildCompprops
