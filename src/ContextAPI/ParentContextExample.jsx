import React, { useContext } from 'react'
import ChildContextExample from './ChildContextExample'
import { userContext } from './ContextandProvider'

function ParentContextExample() {
    const data = useContext(userContext);
    return (
        <>
        <h1>this is Parent {data}</h1>
        {/* <ChildContextExample/> */}
        
        </>
    )
}

export default ParentContextExample
