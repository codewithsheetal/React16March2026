import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const About = lazy(()=>import("../Routing/pages/About"))
const Contact = lazy(()=>import("../Routing/pages/Contact"))

function LazyLoadingWithRouter() {
    return (
        <>
        <Suspense fallback={<h1>Loading...</h1>}>
        
        <Routes>
            <Route path="/about" element={<About/>}/>
       
            <Route path="/contact" element={
                <Suspense fallback ={<h1>Contact page Loading...</h1>}>
                    <Contact/>
                </Suspense>
            }/>
        </Routes>
        </Suspense>
        </>
    )
}

export default LazyLoadingWithRouter
