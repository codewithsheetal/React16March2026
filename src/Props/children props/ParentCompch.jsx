import React from 'react'
import ChildCompch from './ChildCompch'

function ParentCompch() {
    return (
        <>
        <h1>Parent</h1>

       <ChildCompch>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
       </ChildCompch>
        
        </>
    )
}

export default ParentCompch
