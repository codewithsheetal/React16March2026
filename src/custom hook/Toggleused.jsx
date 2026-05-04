import React, { useState } from 'react'
import useToggle from './useToggle'

function Toggleused() {
    const [isVisible, setVisible] = useToggle(true);
    // const [isVisible, setVisible] = useToggle();
    return (
        <>
        <button onClick={setVisible}> 
            
            { isVisible ? "hide":"show"}
        </button>

        {isVisible && <p> this text is visible </p>}
        
        </>
    )
}

export default Toggleused
