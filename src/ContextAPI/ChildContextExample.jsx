import React, { useContext } from 'react'
import FamilyContext from './FamilyContext'

function ChildContextExample() {

    // const data = useContext(FamilyContext);
    const {name,id} = useContext(FamilyContext);

    
    return (
        <>
        {/* <h1>this is child {data}</h1> */}
        {/* <h1>this is child {data.name}</h1> */}
        <h1>this is child {name} -{id}</h1>
        </>
    )
}

export default ChildContextExample
