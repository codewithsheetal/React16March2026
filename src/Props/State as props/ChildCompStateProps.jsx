import React from 'react'

function ChildCompStateProps({text,setText}) {
    return (
        <>
        <h2>child -{text}</h2>

        <button onClick={()=>setText("hey!!")}> change the text</button>
        </>
    )
}

export default ChildCompStateProps
