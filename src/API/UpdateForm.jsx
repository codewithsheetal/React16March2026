import React, { useEffect, useState } from 'react'
import { updateUser } from './api'

function UpdateForm({user,onUpdate}) {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    // console.log(user);
    useEffect(()=>{
        if(user){
            setName(user.name || "")
            setEmail(user.email || "")
        }
    },[user])
const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
        const updateuser = await updateUser (user.id ,{name,email})
        onUpdate(updateuser);
    }
    catch(error){
        console.log("error");
    }
}
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            
            <button type='submit'>Update data</button>
        </form>
        </>
    )
}

export default UpdateForm
