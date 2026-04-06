import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigateButton() {
    const nav =useNavigate();

    function gotocontact(){
        nav('/contact')
    }
    return (
        <>
        <button onClick={gotocontact}> Go to Contact </button>
        </>
    )
}

export default NavigateButton
