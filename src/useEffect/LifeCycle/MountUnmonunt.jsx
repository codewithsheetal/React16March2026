import React, { useState } from 'react'
import ReactLifeCycle from './ReactLifeCycle'

function MountUnmonunt() {
    const [show ,setShow]= useState(true)

    function display(){
        setShow(!show)
    }
    return (
        <>
        <button onClick={display}>Toggle child comp </button>
        {show && <ReactLifeCycle/>}

        </>
    )
}

export default MountUnmonunt
