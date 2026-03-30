import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState("");

    const [email,setEmail]=useState("");
    const[emailsubmitted,setEmailSubmitted]=useState("")

    const[isSubmitted,setIsSubmitted]=useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setIsSubmitted(true);
        setEmailSubmitted(email);
        setEmail("")
    }

    function handleReset(){
        setEmail("");
    }

    return (
        <>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <h1>{name}</h1>

        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button type='submit'>Submit</button>
            <button type='button' onClick={handleReset}>Reset </button>
        </form>

        {/* {isSubmitted && <h2> your Email is: {email}</h2>} */}
        {isSubmitted && <h2> your Email is: {emailsubmitted}</h2>}
        </>
    )
}

export default Form
