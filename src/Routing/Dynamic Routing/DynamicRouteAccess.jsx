import React from 'react'
import { useParams } from 'react-router-dom'

function DynamicRouteAccess() {
    const {id}= useParams();
    console.log(id);
    
    return (
        <>
        <h3>{id}</h3>
        </>
    )
}

export default DynamicRouteAccess
