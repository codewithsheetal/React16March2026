import React from 'react'

function ChildPropsFunction({onDemo,text}) {
    return (
        <>
        <h2>Child</h2>
        <button onClick={onDemo}>{text} </button>
        </>
    )
}

export default ChildPropsFunction
