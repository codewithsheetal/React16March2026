import React, { useState } from 'react'

function Radio() {
    // const [gender,setGender]=useState("");
    const [gender,setGender]=useState("Female");

    function handleChange(e){
        setGender(e.target.value)
    }
    return (
        <>

        <input type="radio" name="gender" value="Male" onChange={handleChange} 
        checked ={gender==="Male"} // Male===Male
        /> male 
        
        <input type="radio" name="gender" value="Female" onChange={handleChange} 
        checked ={gender==="Female"}
        /> Female 
        
        <input type="radio" name="gender" value="Other" onChange={handleChange} 
        checked ={gender==="Other"}
        /> Other 
        
        <h2>selected: {gender} </h2>

        </>
    )
}

export default Radio
