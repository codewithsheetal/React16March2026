import React from 'react'
import s from './Header.module.css'

function Modulecss() {
    return (
        <>
        <h1 className={s.titleblock}>Modulecss</h1>

        <h1 className={`${s.titleblock} ${s.box}`}>multiple css </h1>
        
        </>
    )
}

export default Modulecss
