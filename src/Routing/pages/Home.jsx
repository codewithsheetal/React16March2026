import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <h1>home comp</h1>
        
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        </>
    )
}

export default Home
