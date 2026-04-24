import React from 'react'
import ParentContextExample from './ParentContextExample'
import ContextandProvider from './ContextandProvider'

function GrandParentContextExample() {
    return (
        <>
        <h1>this is grandparent</h1>
        {/* <ParentContextExample/> */}
    
        <ContextandProvider>
            <ParentContextExample/>
          </ContextandProvider>
        </>
    )
}

export default GrandParentContextExample
