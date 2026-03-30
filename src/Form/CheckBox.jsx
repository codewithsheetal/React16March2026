import React, { useState } from 'react'

function CheckBox() {

    const [isChecked,setIsChecked]=useState(false);

    function handleChange(e){
        console.log(e.target.value);
        console.log(e.target.checked);
        // setIsChecked(true);    
        setIsChecked(e.target.checked)
        if(isChecked){
            
        }   
    }
    return (
        <>
        <input type="checkbox" value="termsacceptd" checked={isChecked} onChange={handleChange} />
        Accept Terms and Conditions 
        
        <h2>checked : {isChecked ? "Yes": "No"}</h2>


        </>
    )
}

export default CheckBox
