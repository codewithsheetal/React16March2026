import React, { useState } from 'react'
import ChildCompStateProps from './ChildCompStateProps'

function ParentCompStateProps() {
    const [msg,setMsg]= useState("hello!!")
    return (
        <>
        <h1>Parent</h1>
        <ChildCompStateProps text={msg} setText={setMsg}/>
        </>
    )
}

export default ParentCompStateProps
