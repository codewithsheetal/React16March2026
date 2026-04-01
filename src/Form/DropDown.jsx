import React, { useState } from 'react'

function DropDown() {
    const langs =["React","c","python"]
    const [lang,setLang]=useState("");

    function handleChange(e){
        setLang(e.target.value)  // setLang(React) --> lang =React
    }

    return (
        <>
        <h1>DropDown</h1>

        <h2>{lang}</h2>
        <select value={lang} onChange={handleChange}>  //value =React
            <option value="">select Lang</option>
            <option value="React"> React Js</option>
            <option value="Js"> JavaScript</option>
            <option value="HTML"> HTML</option>
        </select>

        </>
    )
}

export default DropDown
