import React from 'react'
import ChildPropsFunction from './ChildPropsFunction'

function ParentPropsfunction() {
    function Demo(){
        alert("hey!!!")
    }
    return (
        <>
        <h1>Parent</h1>
        <ChildPropsFunction onDemo={Demo}  text="click me"/>
        
        
        </>
    )
}

export default ParentPropsfunction
