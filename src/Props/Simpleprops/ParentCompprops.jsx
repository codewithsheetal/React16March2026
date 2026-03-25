import React from 'react'
import ChildCompprops from './ChildCompprops'

function ParentCompprops() {
    return (
        <>
        <h1>Parent props comp</h1>
        <ChildCompprops name="sheetal" id ={10} username='qwe'/>
        <ChildCompprops name="sheetal" id ={10} />
        </>
    )
}

export default ParentCompprops
