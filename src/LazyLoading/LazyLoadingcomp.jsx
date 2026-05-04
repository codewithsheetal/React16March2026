import React, { Suspense } from 'react'
// import Events from '../Events'
const Event = React.lazy(()=>import ("../Events"));
const JSXR = React.lazy(()=>import ("../JSXRules"));


function LazyLoadingcomp() {
    return (
        <>
        <Suspense fallback={<h1>Event Loading</h1>}>
            <Event/>
            
        </Suspense>

        <Suspense fallback={<h1>Loading</h1>}>
            <JSXR/>
        </Suspense>
        </>
    )
}

export default LazyLoadingcomp
